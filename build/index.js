"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Database_1 = require("./Configs/Database");
const dotenv_1 = require("dotenv");
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./Routes/routes");
const express_rate_limit_1 = require("express-rate-limit");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
function main() {
    (0, dotenv_1.config)();
    (0, Database_1.dbAuthenticate)();
    app.use(express_1.default.json());
    app.use(express_1.default.static('template'));
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)({
        origin: '*'
    }));
    app.use(routes_1.router);
    app.use((0, express_rate_limit_1.rateLimit)({
        windowMs: 10000,
        max: 10,
        message: 'Too many request, try again letter'
    }));
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}
main();
