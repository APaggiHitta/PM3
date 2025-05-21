"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUploadFolder = checkUploadFolder;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function checkUploadFolder() {
    var uploadPath = path_1.default.join(__dirname, "../../uploads");
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
        console.log("Carpeta 'uploads' creada");
    }
    else {
        console.log("Carpeta 'uploads' ya existe");
    }
}
