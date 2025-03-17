import axios from "axios";
import { Router } from "express";

const router: Router = Router();

interface LeetcodeContest {
  title: string;
  startTime: number;
  duration: number;
  titleSlug: string;
}

interface LeetCodeResponse {
  data: {
    allContests: LeetcodeContest[];
  };
}

router.get("/contests", async (req, res): Promise<void> => {
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
    const response = await axios.post<LeetCodeResponse>(
      "https://leetcode.com/graphql",
      graphqlQuery,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const now = Date.now();
    const contests = response.data.data.allContests
      .filter((c) => c.startTime * 1000 > now)
      .map((e) => ({
        platform: "LeetCode",
        name: e.title,
        startTimeUnix: e.startTime,
        startTime: new Date(e.startTime * 1000).toISOString(),
        durationSeconds: e.duration,
        duration: `${Math.floor(e.duration / 3600)} hours ${
          (e.duration % 3600) / 60
        } minutes`,
        url: `https://leetcode.com/contest/${e.titleSlug}`,
      }));

    res.status(200).json(contests);
  } catch (error) {
    console.error("Error fetching Leetcode contests:");
    res.status(500).json({ error: "Failed to fetch Leetcode contests" });
  }
});

export default router;
