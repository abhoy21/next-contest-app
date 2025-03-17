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
        const response = yield axios_1.default.get("https://www.codechef.com/api/list/contests/all");
        if (response.data.status !== "success") {
            throw new Error("Failed to fetch CodeChef contests");
        }
        const contests = response.data.future_contests.map((e) => ({
            platform: "CodeChef",
            name: e.contest_name,
            startTimeUnix: new Date(e.contest_start_date_iso).getTime() / 1000,
            startTime: new Date(e.contest_start_date_iso).toISOString(),
            durationSeconds: new Date(e.contest_end_date_iso).getTime() / 1000 -
                new Date(e.contest_start_date_iso).getTime() / 1000,
            duration: e.contest_duration,
            url: `https://www.codechef.com/contests/${e.contest_code}`,
        }));
        res.status(200).json(contests);
    }
    catch (error) {
        console.error("Error fetching CodeChef contests:");
        res.status(500).json({ error: "Failed to fetch CodeChef contests" });
    }
}));
exports.default = router;
