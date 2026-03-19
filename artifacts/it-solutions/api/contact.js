const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, workEmail, phone, requirements } = req.body || {};

  if (!fullName || !workEmail) {
    return res.status(400).json({ error: "Full name and email are required." });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD not set");
    return res.status(500).json({ error: "Email service not configured." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"Ishanya Infosoft Website" <${user}>`,
    to: "ishanya.infosoft@gmail.com",
    replyTo: workEmail,
    subject: `New Enquiry from ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #F7941D; border-bottom: 2px solid #F7941D; padding-bottom: 8px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Full Name</td>
            <td style="padding: 10px 0; color: #222;">${fullName}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Work Email</td>
            <td style="padding: 10px 0; color: #222;">${workEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 10px 0; color: #222;">${phone || "—"}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Requirements</td>
            <td style="padding: 10px 0; color: #222; white-space: pre-wrap;">${requirements || "—"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Sent from the Ishanya Infosoft website contact form.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
};
