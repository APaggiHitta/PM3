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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCredentialsService = void 0;
const data_source_1 = require("../config/data-source");
const createCredentialsService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = data_source_1.CredentialModel.create(data);
    return yield data_source_1.CredentialModel.save(credential);
});
exports.createCredentialsService = createCredentialsService;
// export const validateCredentialsService = async (
//   credentialData: CredentialDto
// ): Promise<number | null> => {
//   const existing = credentials.find(
//     (cred) =>
//       cred.userName === credentialData.userName &&
//       cred.password === credentialData.password
//   );
//   return existing ? existing.id : null;
// };
