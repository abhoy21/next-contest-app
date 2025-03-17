import Link from "next/link";
import { Button } from "../ui/button";

export default function Platforms(): React.JSX.Element {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 to-keppel-500 mb-6 py-2">
            Featured Contests
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay ahead with these upcoming high-profile coding competitions. Add
            them to your calendar and prepare to showcase your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CF</span>
                  </div>
                  <span className="ml-3 text-xs font-medium text-blue-400 bg-blue-400/10 py-1 px-2 rounded">
                    Codeforces
                  </span>
                </div>
                <div className="text-xs font-medium text-green-400 bg-green-400/10 py-1 px-2 rounded">
                  Div. 2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Codeforces Round #845
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                A competitive programming contest featuring algorithmic problems
                to solve in a limited time.
              </p>
              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>July 25, 2023 • 19:35 UTC</span>
              </div>
              <div className="flex items-center text-gray-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2 hours duration</span>
              </div>
              <div className="flex justify-between items-center">
                <Button className="bg-transparent hover:bg-indigo-500 text-indigo-400 hover:text-white border border-indigo-500 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300">
                  Add to Calendar
                </Button>
                <Link
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-600" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LC</span>
                  </div>
                  <span className="ml-3 text-xs font-medium text-yellow-400 bg-yellow-400/10 py-1 px-2 rounded">
                    LeetCode
                  </span>
                </div>
                <div className="text-xs font-medium text-gray-400 bg-gray-400/10 py-1 px-2 rounded">
                  Weekly
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                LeetCode Weekly Contest 356
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Solve 4 algorithmic puzzles with increasing difficulty in
                LeetCode&apos;s weekly competition.
              </p>
              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>July 30, 2023 • 02:30 UTC</span>
              </div>
              <div className="flex items-center text-gray-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>1.5 hours duration</span>
              </div>
              <div className="flex justify-between items-center">
                <Button className="bg-transparent hover:bg-yellow-500 text-yellow-400 hover:text-white border border-yellow-500 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300">
                  Add to Calendar
                </Button>
                <Link
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CC</span>
                  </div>
                  <span className="ml-3 text-xs font-medium text-red-400 bg-red-400/10 py-1 px-2 rounded">
                    CodeChef
                  </span>
                </div>
                <div className="text-xs font-medium text-orange-400 bg-orange-400/10 py-1 px-2 rounded">
                  Cook-Off
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                CodeChef July Cook-Off
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                A short contest featuring interesting algorithmic challenges
                from easy to hard levels.
              </p>
              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>July 28, 2023 • 14:30 UTC</span>
              </div>
              <div className="flex items-center text-gray-400 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>2.5 hours duration</span>
              </div>
              <div className="flex justify-between items-center">
                <Button className="bg-transparent hover:bg-red-500 text-red-400 hover:text-white border border-red-500 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300">
                  Add to Calendar
                </Button>
                <Link
                  href="#"
                  className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#calendar"
            className="inline-flex items-center bg-keppel-600 hover:bg-keppel-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
          >
            View All Upcoming Contests
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
