import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero(): React.JSX.Element {
  return (
    <section className=" text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Never Miss a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 via-300 to-keppel-500 italic">
                Coding Contest
              </span>{" "}
              Again
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Stay updated with all upcoming coding competitions from
              Codeforces, LeetCode, CodeChef, and more platforms in one
              centralized calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calendar"
                className="bg-keppel-600 hover:bg-keppel-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 text-center"
              >
                View Calendar
              </Link>
              <Link
                href="/calendar"
                className="bg-transparent hover:bg-neutral-800 border border-keppel-500 text-keppel-400 font-medium py-3 px-6 rounded-xl transition duration-300 text-center"
              >
                Explore Platforms
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-neutral-900/45 backdrop-blur-md rounded-xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 top-10 left-[2rem] w-32 h-20  bg-keppel-600 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 top-50 left-[40rem] w-32 h-20  bg-keppel-600 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-keppel-500 opacity-10 rounded-full -mr-10 -mt-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-keppel-500 opacity-10 rounded-full -ml-8 -mb-8" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Contest Calendar</h3>
                  <div className="text-sm text-gray-400 italic">
                    Next Contest
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-950/45 rounded-xl p-4 hover:bg-neutral-600 transition duration-300 border-l-4 border-yellow-500">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Leetcode Weekly Contest</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Sunday, July 10 • 7:30 AM
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-keppel-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-950/45 rounded-xl p-4 hover:bg-neutral-600 transition duration-300 border-l-4 border-blue-500">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Codeforces Round #812</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Tuesday, July 12 • 6:35 PM
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-keppel-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-950/45 rounded-xl p-4 hover:bg-neutral-600 transition duration-300 border-l-4 border-red-500">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">CodeChef Long Challenge</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Friday, July 15 • 2:00 PM
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-keppel-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button className="rounded-xl text-keppel-950 font-montserrat">
                    See Full Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800/45 backdrop-blur-md p-6 rounded-xl text-center ">
            <div className="absolute inset-0 top-10 left-[2rem] w-32 h-20  bg-keppel-600/50 rounded-full blur-3xl"></div>
            <div className="text-3xl font-bold text-keppel-500 mb-2">3+</div>
            <div className="text-gray-400">Coding Platforms</div>
          </div>
          <div className="bg-neutral-800/45 backdrop-blur-md p-6 rounded-xl text-center ">
            <div className="absolute inset-0 top-10 left-[2rem] w-32 h-20  bg-keppel-600/50 rounded-full blur-3xl"></div>
            <div className="text-3xl font-bold text-keppel-500 mb-2">50+</div>
            <div className="text-gray-400">Monthly Contests</div>
          </div>
          <div className="bg-neutral-800/45 backdrop-blur-md p-6 rounded-xl text-center ">
            <div className="absolute inset-0 top-0 left-[16rem] w-24 h-24  bg-keppel-600/50 rounded-full blur-3xl"></div>
            <div className="text-3xl font-bold text-keppel-500 mb-2">50+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}
