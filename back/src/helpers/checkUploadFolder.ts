import fs from "fs";
import path from "path";

export function checkUploadFolder() {
  const uploadPath = path.join(__dirname, "../../uploads");

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log("Carpeta 'uploads' creada");
  } else {
    console.log("Carpeta 'uploads' ya existe");
  }
}
