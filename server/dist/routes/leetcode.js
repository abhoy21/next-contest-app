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
    try {
        const graphqlQuery = {
            query: `
        query getContestList {
          allContests {
            title
            startTime
            duration
            titleSlug
          }
        }
      `,
        };
        const response = yield axios_1.default.post("https://leetcode.com/graphql", graphqlQuery, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const now = Date.now();
        const contests = response.data.data.allContests
            .filter((c) => c.startTime * 1000 > now)
            .map((e) => ({
            platform: "LeetCode",
            name: e.title,
            startTimeUnix: e.startTime,
            startTime: new Date(e.startTime * 1000).toISOString(),
            durationSeconds: e.duration,
            duration: `${Math.floor(e.duration / 3600)} hours ${(e.duration % 3600) / 60} minutes`,
            url: `https://leetcode.com/contest/${e.titleSlug}`,
        }));
        res.status(200).json(contests);
    }
    catch (error) {
        console.error("Error fetching Leetcode contests:");
        res.status(500).json({ error: "Failed to fetch Leetcode contests" });
    }
}));
exports.default = router;
