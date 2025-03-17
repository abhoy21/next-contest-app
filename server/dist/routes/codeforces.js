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
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/contests", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.get("https://codeforces.com/api/contest.list");
        if (response.data.status !== "OK") {
            throw new Error("Failed to fetch Codeforces contests");
        }
        const contests = (_a = response.data.result) === null || _a === void 0 ? void 0 : _a.filter((c) => c.phase === "BEFORE").map((e) => ({
            platform: "Codeforces",
            name: e.name,
            startTimeUnix: e.startTimeSeconds,
            startTime: new Date(e.startTimeSeconds * 1000).toISOString(),
            durationSeconds: e.durationSeconds,
            duration: `${Math.floor(e.durationSeconds / 3600)} hours ${(e.durationSeconds % 3600) / 60} minutes`,
            url: `https://codeforces.com/contests/${e.id}`,
        }));
        res.status(200).json(contests);
    }
    catch (error) {
        console.error("Error fetching Codeforces contests:");
        res.status(500).json({ error: "Failed to fetch Codeforces contests" });
    }
}));
exports.default = router;
