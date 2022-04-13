"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Database_1 = require("./Configs/Database");
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const routes_1 = require("./Routes/routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
function main() {
    (0, dotenv_1.config)();
    (0, Database_1.dbAuthenticate)();
    app.use(express_1.default.json());
    app.use((0, compression_1.default)());
    app.use((0, morgan_1.default)("dev"));
    app.use(routes_1.router);
    app.get('/', (req, res) => {
        res.status(200).send('Welcome to my API');
    });
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}
main();
