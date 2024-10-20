"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const AiRouter_1 = __importDefault(require("./Routes/AiRouter"));
const BaseRouter_1 = __importDefault(require("./Routes/BaseRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', BaseRouter_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to CoinSafe');
});
const mongodb = 'mongodb+srv://agbakwuruoluchi:coinsafe@cluster0.g6csr.mongodb.net/CoinSafe';
mongoose_1.default.connect(mongodb, {
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
app.use(AiRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map