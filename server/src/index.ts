import express from "express";
import cors from "cors";
import codeforces from "./routes/codeforces";
import codechef from "./routes/codechef";
import leetcode from "./routes/leetcode";
import gfg from "./routes/gfg";

const app = express();

app.use(cors());
app.use(express.json());

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

app.use("/api/v1/codeforces", codeforces);
app.use("/api/v1/codechef", codechef);
app.use("/api/v1/leetcode", leetcode);
app.use("/api/v1/geeksforgeeks", gfg);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
