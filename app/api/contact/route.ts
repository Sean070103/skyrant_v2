import nodemailer from 'nodemailer';

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const smtpUser =
      process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPassRaw =
      process.env.SMTP_PASS || process.env.EMAIL_PASS;
    // Gmail app passwords are often shown with spaces; nodemailer needs the compact form
    const smtpPass = smtpPassRaw?.replace(/\s/g, '');

    if (!smtpUser || !smtpPass) {
      console.error('Contact form: missing SMTP_USER/EMAIL_USER or SMTP_PASS/EMAIL_PASS');
      return Response.json(
        { error: 'Email is not configured on the server' },
        { status: 503 }
      );
    }

    const fromAddr = process.env.SMTP_FROM || smtpUser;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message));

    const notifyTo =
      process.env.CONTACT_EMAIL || smtpUser;
    const rawName = String(name).trim();
    const rawEmail = String(email).trim();
    const rawMessage = String(message).trim();
    const textBody = [
      'New contact form submission',
      '',
      `From (name): ${rawName}`,
      `From (email): ${rawEmail}`,
      '',
      'Message:',
      rawMessage,
    ].join('\n');

    await transporter.sendMail({
      from: fromAddr,
      to: notifyTo,
      subject: `New Contact Form Submission from ${rawName}`,
      replyTo: rawEmail,
      text: textBody,
      html: `
        <div style="font-family: monospace; color: #333;">
          <h2>New Project Inquiry</h2>
          <p><strong>From (name):</strong> ${safeName}</p>
          <p><strong>From (email):</strong> <a href="mailto:${encodeURIComponent(rawEmail)}">${safeEmail}</a></p>
          <p><strong>Message from sender:</strong></p>
          <p style="white-space: pre-wrap; border-left: 3px solid #333; padding-left: 12px; margin-top: 8px;">${safeMessage}</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: fromAddr,
      to: email,
      subject: 'We received your message - SKYRANT TECH',
      html: `
        <div style="font-family: monospace; color: #333;">
          <h2>Thank you for reaching out</h2>
          <p>Hi ${safeName},</p>
          <p>We've received your project inquiry and will get back to you as soon as possible.</p>
          <p style="margin-top: 2rem;">Best regards,<br/>SKYRANT TECH</p>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
