"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Link from "next/link";

interface ContestType {
  platform: string;
  name: string;
  startTimeUnix: number;
  startTime: string;
  durationSeconds: number;
  duration: string;
  url: string;
}

export default function ContestCalendar(): React.JSX.Element {
  dayjs.extend(duration);
  const [contests, setContests] = useState<ContestType[]>([]);
  const [month, setMonth] = useState(dayjs().month());

  useEffect(() => {
    const fetchContests = async () => {
      const responses = await Promise.all([
        axios.get("http://localhost:8000/api/v1/codeforces/contests"),
        axios.get("http://localhost:8000/api/v1/leetcode/contests"),
        axios.get("http://localhost:8000/api/v1/codechef/contests"),
      ]);

      const allContests = [
        ...responses[0].data.map((c: ContestType) => ({
          ...c,
          platform: "codeforces",
        })),
        ...responses[1].data.map((c: ContestType) => ({
          ...c,
          platform: "leetcode",
        })),
        ...responses[2].data.map((c: ContestType) => ({
          ...c,
          platform: "codechef",
        })),
      ];

      setContests(allContests);
    };

    fetchContests();
  }, []);

  const getContestsByDate = (date: string) => {
    return contests.filter(
      (contest) => dayjs(contest.startTime).format("YYYY-MM-DD") === date
    );
  };

  const getContestColor = (platform: string) => {
    switch (platform) {
      case "codeforces":
        return "bg-blue-950 text-blue-300 p-4";
      case "leetcode":
        return "bg-yellow-950 text-yellow-300 p-4";
      case "codechef":
        return "bg-red-950 text-red-300 p-4";
      default:
        return "bg-gray-900 text-gray-300 p-4";
    }
  };

  const getPlatformDisplay = (platform: string) => {
    switch (platform) {
      case "codeforces":
        return {
          abbr: "CF",
          bgColor: "bg-blue-600",
          textColor: "text-blue-400",
          borderColor: "border-blue-500",
          hoverBg: "hover:bg-blue-600",
        };
      case "leetcode":
        return {
          abbr: "LC",
          bgColor: "bg-yellow-500",
          textColor: "text-yellow-400",
          borderColor: "border-yellow-500",
          hoverBg: "hover:bg-yellow-500",
        };
      case "codechef":
        return {
          abbr: "CC",
          bgColor: "bg-red-600",
          textColor: "text-red-400",
          borderColor: "border-red-500",
          hoverBg: "hover:bg-red-600",
        };
      default:
        return {
          abbr: "XX",
          bgColor: "bg-gray-600",
          textColor: "text-gray-400",
          borderColor: "border-gray-500",
          hoverBg: "hover:bg-gray-600",
        };
    }
  };

  const renderCalendar = () => {
    const startOfMonth = dayjs()
      .year(new Date().getFullYear())
      .month(month)
      .startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();
    const firstDayOfWeek = startOfMonth.day();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-32 p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = startOfMonth.date(day).format("YYYY-MM-DD");
      const contestsForDay = getContestsByDate(date);
      const bgColor = day % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800";

      calendarDays.push(
        <div
          key={date}
          className={`h-[10rem] p-2 m-1 border-r border-neutral-700 ${bgColor}`}
        >
          <div className="text-white mb-2 text-sm">{day}</div>
          {contestsForDay.map((contest, index) => (
            <Link key={index} href={contest.url} target="_blank">
              <div
                className={`mb-1 p-1 rounded-xl ${getContestColor(
                  contest.platform
                )}`}
              >
                <h1 className="capitalize tracking-widest text-white">
                  {contest.platform}
                </h1>
                <div className="font-medium truncate">{contest.name}</div>
                <div>{dayjs(contest.startTime).format("HH:mm")} UTC</div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    return calendarDays;
  };

  const getUpcomingWeekContests = () => {
    const today = dayjs();
    const endOfWeek = today.endOf("week");

    return contests
      .filter((contest) => {
        const contestDate = dayjs(contest.startTime);
        return contestDate.isAfter(today) && contestDate.isBefore(endOfWeek);
      })
      .sort((a, b) => a.startTimeUnix - b.startTimeUnix)
      .slice(0, 5);
  };

  return (
    <div className="py-20">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 via-keppel-300 to-keppel-500 mb-6 py-2">
            Next Contest
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto italic text-lg">
            Stay updated with all upcoming coding competitions in one
            centralized calendar. Plan your schedule and never miss a contest
            again.
          </p>
        </div>

        <div className="bg-neutral-[#131313] rounded-xl shadow-lg overflow-hidden px-2">
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center border-b border-neutral-700">
            <div className="flex items-center">
              <Button
                variant={"outline"}
                className="text-gray-400 hover:text-white p-2 rounded-xl"
                onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
              <h3 className="text-xl font-bold text-white px-4">
                {dayjs()
                  .year(new Date().getFullYear())
                  .month(month)
                  .format("MMMM YYYY")}
              </h3>
              <Button
                variant={"outline"}
                className="text-gray-400 hover:text-white p-2 rounded-xl"
                onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
            <div>
              <h3 className="text-montserrat text-keppel-300">
                Tack Upcomming Contests for different platforms here
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[10rem]">
              <div className="grid grid-cols-7 border-b border-neutral-700">
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day, index) => (
                  <div
                    key={index}
                    className="p-4 text-center text-gray-400 font-medium"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 border-b border-neutral-700">
                {renderCalendar()}
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-neutral-700">
            <h3 className="text-xl sm:text-3xl lg:text-5xl py-4 sm:py-6 lg:py-8 font-montserrat text-keppel-200 mb-6">
              Upcoming Contests This Week
            </h3>
            <div className="space-y-4">
              {getUpcomingWeekContests().length > 0 ? (
                getUpcomingWeekContests().map((contest, index) => {
                  const platform = getPlatformDisplay(contest.platform);
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-neutral-800/45 backdrop-blur-md rounded-xl hover:bg-neutral-950 transition-colors duration-300"
                    >
                      <div className="mb-3 md:mb-0">
                        <div className="flex items-center">
                          <div
                            className={`w-10 h-10 rounded-xl ${platform.bgColor} flex items-center justify-center text-white font-bold text-sm mr-4`}
                          >
                            {platform.abbr}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                              {contest.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {dayjs(contest.startTime).format("dddd, MMMM D")}{" "}
                              • {dayjs(contest.startTime).format("HH:mm")} UTC
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`text-xs bg-${
                            contest.platform === "codeforces"
                              ? "blue"
                              : contest.platform === "leetcode"
                              ? "yellow"
                              : "red"
                          }-950 ${platform.textColor} px-3 py-1 rounded-full`}
                        >
                          Rated
                        </span>
                        <span className="text-sm text-gray-400">
                          {dayjs
                            .duration(contest.durationSeconds, "seconds")
                            .format("H:mm")}{" "}
                          hours
                        </span>
                        <Link
                          href={contest.url}
                          target="_blank"
                          className={`bg-transparent ${platform.hoverBg} ${platform.textColor} hover:text-white border ${platform.borderColor} rounded-xl px-3 py-1 text-sm font-medium transition-colors duration-300`}
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No upcoming contests this week.
                </div>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-neutral-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-keppel-300 sm:text-xl">Platforms:</span>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-blue-950 hover:bg-blue-600 text-blue-300 text-xs px-3 py-1 rounded-full">
                  Codeforces
                </Button>
                <Button className="bg-yellow-950 hover:bg-yellow-600 text-yellow-300 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  LeetCode
                </Button>
                <Button className="bg-red-950 hover:bg-red-600 text-red-300 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  CodeChef
                </Button>

                <Button className="bg-keppel-950 hover:bg-keppel-600 text-keppel-300 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  More...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
