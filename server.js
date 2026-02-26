import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const mailTo = process.env.MAIL_TO || "adrian.geanta@recyclebin.ro";
const mailFrom = process.env.MAIL_FROM || "no-reply@recyclebin.ro";
const subjectPrefix = process.env.MAIL_SUBJECT_PREFIX || "[RecycleBin]";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure =
  process.env.SMTP_SECURE !== undefined
    ? process.env.SMTP_SECURE === "true"
    : smtpPort === 465;

if (!smtpHost || !smtpUser || !smtpPass) {
  console.warn(
    "SMTP_HOST/SMTP_USER/SMTP_PASS not set. Email sending will fail until configured."
  );
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Missing required fields: name, email, message",
    });
  }

  try {
    await transporter.sendMail({
      to: mailTo,
      from: mailFrom,
      replyTo: email,
      subject: `${subjectPrefix} New contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});