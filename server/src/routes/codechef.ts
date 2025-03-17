import axios from "axios";
import { Router } from "express";

const router: Router = Router();

interface CodeChefContest {
  contest_code: string;
  contest_name: string;
  contest_start_date: string;
  contest_end_date: string;
  contest_start_date_iso: string;
  contest_end_date_iso: string;
  contest_duration: string;
  distinct_users: number;
}

interface CodeChefContestsResponse {
  status: string;
  message: string;
  present_contests: CodeChefContest[];
  future_contests: CodeChefContest[];
  practice_contests: CodeChefContest[];
  past_contests: CodeChefContest[];
}

router.use("/contests", async (req, res): Promise<void> => {
  try {
    const response = await axios.get<CodeChefContestsResponse>(
      "https://www.codechef.com/api/list/contests/all"
    );
    if (response.data.status !== "success") {
      throw new Error("Failed to fetch CodeChef contests");
    }

    const contests = response.data.future_contests.map((e) => ({
      platform: "CodeChef",
      name: e.contest_name,
      startTimeUnix: new Date(e.contest_start_date_iso).getTime() / 1000,
      startTime: new Date(e.contest_start_date_iso).toISOString(),
      durationSeconds:
        new Date(e.contest_end_date_iso).getTime() / 1000 -
        new Date(e.contest_start_date_iso).getTime() / 1000,
      duration: e.contest_duration,
      url: `https://www.codechef.com/contests/${e.contest_code}`,
    }));

    res.status(200).json(contests);
  } catch (error) {
    console.error("Error fetching CodeChef contests:");
    res.status(500).json({ error: "Failed to fetch CodeChef contests" });
  }
});

export default router;
