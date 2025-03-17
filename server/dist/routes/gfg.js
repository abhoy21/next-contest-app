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
router.use("/contests", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://practiceapi.geeksforgeeks.org/api/v1/contests/");
        if (!response.data || !response.data.upcoming) {
            throw new Error("Failed to fetch GeeksForGeeks contests");
        }
        const contests = response.data.upcoming.map((e) => {
            const startTime = new Date(e.start_time);
            const endTime = new Date(e.end_time);
            const durationSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
            const hours = Math.floor(durationSeconds / 3600);
            const minutes = Math.floor((durationSeconds % 3600) / 60);
            const duration = `${hours}h ${minutes}m`;
            return {
                platform: "GeeksForGeeks",
                name: e.title,
                startTimeUnix: startTime.getTime() / 1000,
                startTime: startTime.toISOString(),
                durationSeconds: durationSeconds,
                duration: duration,
                url: e.url,
            };
        });
        res.status(200).json(contests);
    }
    catch (error) {
        console.error("Error fetching GeeksForGeeks contests:", error);
        res.status(500).json({ error: "Failed to fetch GeeksForGeeks contests" });
    }
}));
exports.default = router;
