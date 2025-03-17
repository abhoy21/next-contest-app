import axios from "axios";
import { Router } from "express";

const router: Router = Router();

interface CodeForcesContest {
  id: number;
  name: string;
  type: string;
  phase: string;
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds?: number;
  relativeTimeSeconds?: number;
}

interface CodeForcesResponse {
  status: string;
  result?: CodeForcesContest[];
}

router.get("/contests", async (req, res): Promise<void> => {
  try {
    const response = await axios.get<CodeForcesResponse>(
      "https://codeforces.com/api/contest.list"
    );
    if (response.data.status !== "OK") {
      throw new Error("Failed to fetch Codeforces contests");
    }

    const contests = response.data.result
      ?.filter((c) => c.phase === "BEFORE")
      .map((e) => ({
        platform: "Codeforces",
        name: e.name,
        startTimeUnix: e.startTimeSeconds,
        startTime: new Date(e.startTimeSeconds! * 1000).toISOString(),
        durationSeconds: e.durationSeconds,
        duration: `${Math.floor(e.durationSeconds / 3600)} hours ${
          (e.durationSeconds % 3600) / 60
        } minutes`,
        url: `https://codeforces.com/contests/${e.id}`,
      }));

    res.status(200).json(contests);
  } catch (error) {
    console.error("Error fetching Codeforces contests:");
    res.status(500).json({ error: "Failed to fetch Codeforces contests" });
  }
});

export default router;
