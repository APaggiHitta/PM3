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
    const actualDate = date instanceof Date ? date : new Date(date);

    const formattedDate = actualDate
      .toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(",", ""); // Quitar la coma después del día de la semana

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
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Confirmación de reserva</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          font-family: Arial, sans-serif;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #b67b38;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        .body {
          padding: 30px;
          color: #333333;
          font-size: 16px;
        }
        .body h2 {
          color: #b67b38;
        }
        .button {
          display: inline-block;
          background-color: #b67b38;
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          margin-top: 20px;
          border-radius: 6px;
          font-weight: bold;
        }
        .footer {
          background-color: #eee;
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          Amazing Amazonas Tours
        </div>

        <div class="body">
          <h2>¡Hola ${user.name.split(" ")[0]}!</h2>
          <p>
            Tu reserva ha sido confirmada con éxito para la actividad <strong>${
              activity.name
            }</strong> el día <strong>${formattedDate}</strong> a las <strong>${time}</strong>.
          </p>
          <p>¡Gracias por confiar en nosotros! Prepárate para una experiencia inolvidable en el Amazonas.</p>

          <a href="#" class="button">Ver mi reserva</a>
        </div>

        <div class="footer">
          © 2025 Amazing Amazonas Tours. Todos los derechos reservados.<br />
          <a href="mailto:contacto@amazonastours.com">contacto@amazonastours.com</a>
        </div>
      </div>
    </body>
  </html>
`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
