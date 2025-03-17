"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const codeforces_1 = __importDefault(require("./routes/codeforces"));
const codechef_1 = __importDefault(require("./routes/codechef"));
const leetcode_1 = __importDefault(require("./routes/leetcode"));
const gfg_1 = __importDefault(require("./routes/gfg"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        message: "API endpoints are available",
        endpoints: {
            "/ap1/v1/codeforces/contests": "Get active Codeforces contests",
            "/ap1/v1/leetcode/contests": "Get active LeetCode contests",
            "/ap1/v1/codechef/contests": "Get active CodeChef contests",
            "/api/v1/geeksforgeeks/contests": "Get active GeeksForGeeks contests",
        },
    });
});
app.use("/api/v1/codeforces", codeforces_1.default);
app.use("/api/v1/codechef", codechef_1.default);
app.use("/api/v1/leetcode", leetcode_1.default);
app.use("/api/v1/geeksforgeeks", gfg_1.default);
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
