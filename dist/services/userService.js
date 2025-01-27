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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordHelper_1 = __importDefault(require("../helpers/passwordHelper"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class UserService {
    static register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = yield (0, passwordHelper_1.default)(user.password);
                user.password = hashedPassword;
                return yield UserRepository_1.default.add(user);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserRepository_1.default.login(auth);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = UserService;
