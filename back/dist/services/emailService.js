"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTurnConfirmationEmail = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var sendTurnConfirmationEmail = function (toEmail, user, activity, date, time) { return __awaiter(void 0, void 0, void 0, function () {
    var actualDate, formattedDate, transporter, mailOptions, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!toEmail || !user || !activity) {
                    throw new Error("Datos incompletos para enviar el email");
                }
                actualDate = date instanceof Date ? date : new Date(date);
                formattedDate = actualDate
                    .toLocaleDateString("es-ES", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })
                    .replace(",", "");
                transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASSWORD,
                    },
                });
                mailOptions = {
                    from: "\"Amazing Amazonas Tours\" <".concat(process.env.EMAIL_USER, ">"),
                    to: toEmail,
                    subject: "¡Tu reserva está confirmada!",
                    html: "\n  <!DOCTYPE html>\n  <html lang=\"es\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <title>Confirmaci\u00F3n de reserva</title>\n      <style>\n        body {\n          margin: 0;\n          padding: 0;\n          background-color: #f4f4f4;\n          font-family: Arial, sans-serif;\n        }\n        .email-container {\n          max-width: 600px;\n          margin: 0 auto;\n          background-color: #ffffff;\n          border-radius: 8px;\n          overflow: hidden;\n          box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n        .header {\n          background-color: #b67b38;\n          color: white;\n          padding: 20px;\n          text-align: center;\n          font-size: 24px;\n          font-weight: bold;\n        }\n        .body {\n          padding: 30px;\n          color: #333333;\n          font-size: 16px;\n        }\n        .body h2 {\n          color: #b67b38;\n        }\n        .button {\n          display: inline-block;\n          background-color: #b67b38;\n          color: white;\n          text-decoration: none;\n          padding: 12px 20px;\n          margin-top: 20px;\n          border-radius: 6px;\n          font-weight: bold;\n        }\n        .footer {\n          background-color: #eee;\n          text-align: center;\n          padding: 20px;\n          font-size: 12px;\n          color: #777;\n        }\n      </style>\n    </head>\n    <body>\n      <div class=\"email-container\">\n        <div class=\"header\">\n          Amazing Amazonas Tours\n        </div>\n\n        <div class=\"body\">\n          <h2>\u00A1Hola ".concat(user.name.split(" ")[0], "!</h2>\n          <p>\n            Tu reserva ha sido confirmada con \u00E9xito para la actividad <strong>").concat(activity.name, "</strong> el d\u00EDa <strong>").concat(formattedDate, "</strong> a las <strong>").concat(time, "</strong>.\n          </p>\n          <p>\u00A1Gracias por confiar en nosotros! Prep\u00E1rate para una experiencia inolvidable en el Amazonas.</p>\n\n          <a href=\"#\" class=\"button\">Ver mi reserva</a>\n        </div>\n\n        <div class=\"footer\">\n          \u00A9 2025 Amazing Amazonas Tours. Todos los derechos reservados.<br />\n          <a href=\"mailto:contacto@amazonastours.com\">contacto@amazonastours.com</a>\n        </div>\n      </div>\n    </body>\n  </html>\n"),
                };
                return [4 /*yield*/, transporter.sendMail(mailOptions)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error al enviar el correo:", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.sendTurnConfirmationEmail = sendTurnConfirmationEmail;
