import type { Request, Response } from "express";
import { sendMail } from "../utils/sendMail.js";

export const sendContactEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "Champs manquants" });
    return;
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    res.status(500).json({ error: "Configuration email manquante" });
    return;
  }

  try {
    const htmlContent = `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `;

    await sendMail({
      to: process.env.CONTACT_EMAIL,
      subject,
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: "Mail envoyé" });
  } catch (err: any) {
    console.error("Erreur lors de l'envoi du mail :", err);
    res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
  }
};
