// test-mail.mjs  ← create this file temporarily
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "PASTE_YOUR_EMAIL_HERE",       // ← hardcode temporarily to test
    pass: "PASTE_APP_PASSWORD_HERE",     // ← 16 chars, no spaces
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((err, success) => {
  if (err) console.error("FAILED:", err.message);
  else console.log("SUCCESS — credentials work!");
});