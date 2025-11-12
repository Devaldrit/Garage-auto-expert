import type { Request, Response } from "express";
import { sendMail } from "../utils/sendMail.js";

export const sendContactEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Champs manquants" });
    return;
  }

  try {
    await sendMail({
      to: process.env.CONTACT_EMAIL as string,
      subject: `Nouveau message de ${name}`,
      text: `Email : ${email}\nMessage : ${message}`,
    });
    res.status(200).json({ success: true, message: "Mail envoyé" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
  }
};
