import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Activity } from "../entities/Activity";
import { User } from "../entities/User";

dotenv.config();

export const sendTurnConfirmationEmail = async (
  toEmail: string | undefined,
  user: User | null,
  activity: Activity | null,
  date: Date,
  time: string | undefined
) => {
  try {
    if (!toEmail || !user || !activity) {
      throw new Error("Datos incompletos para enviar el email");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Amazing Amazonas Tours" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "¡Tu reserva está confirmada!",
      html: `
        <h2>Hola ${user.name},</h2>
        <p>Gracias por reservar con Amazing Amazonas Tours.</p>
        <p><strong>Actividad:</strong> ${activity.name}</p>
        <p><strong>Fecha:</strong> ${date.toLocaleDateString()}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p>¡Te esperamos para vivir una experiencia inolvidable en el Amazonas!</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
