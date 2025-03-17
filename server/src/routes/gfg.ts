import axios from "axios";
import { Router } from "express";

const router: Router = Router();

interface GFGContest {
  title: string;
  start_time: string;
  end_time: string;
  url: string;
  venue?: string;
}

interface GFGContestsResponse {
  upcoming: GFGContest[];
  active: GFGContest[];
}

router.use("/contests", async (req, res): Promise<void> => {
  try {
    const response = await axios.get<GFGContestsResponse>(
      "https://practiceapi.geeksforgeeks.org/api/v1/contests/"
    );

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
  } catch (error) {
    console.error("Error fetching GeeksForGeeks contests:", error);
    res.status(500).json({ error: "Failed to fetch GeeksForGeeks contests" });
  }
});

export default router;
