import { Button } from "../ui/button";

export default function CalendarSection(): React.JSX.Element {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 to-keppel-500 mb-6 py-2">
            Keep track of your coding competitions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with all upcoming coding competitions in one
            centralized calendar. Plan your schedule and never miss a contest
            again.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center border-b border-neutral-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <Button className="text-gray-400 hover:text-white p-2 rounded-xl">
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
              <h3 className="text-xl font-bold text-white px-4">July 2023</h3>
              <Button className="text-gray-400 hover:text-white p-2 rounded-xl">
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
            <div className="flex items-center space-x-2">
              <Button className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300">
                Day
              </Button>
              <Button className="bg-keppel-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
                Week
              </Button>
              <Button className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300">
                Month
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-max">
              <div className="grid grid-cols-7 border-b border-neutral-700 mr-6">
                <div className="p-4 text-center text-gray-400 font-medium">
                  Sunday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Monday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Tuesday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Wednesday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Thursday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Friday
                </div>
                <div className="p-4 text-center text-gray-400 font-medium">
                  Saturday
                </div>
              </div>

              <div className="grid grid-cols-7 border-b border-neutral-700">
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">25</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">26</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">27</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">28</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">29</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-gray-500 mb-2 text-sm">30</div>
                </div>

                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">1</div>
                  <div className="mb-1 bg-blue-950 bg-opacity-20 text-blue-400 text-xs p-1 rounded">
                    <div className="font-medium">CF: Div 3 Round</div>
                    <div>19:35 UTC</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 border-b border-neutral-700">
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">2</div>
                  <div className="mb-1 bg-yellow-950 bg-opacity-20 text-yellow-400 text-xs p-1 rounded">
                    <div className="font-medium">LC: Weekly Contest</div>
                    <div>02:30 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">3</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">4</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">5</div>
                  <div className="mb-1 bg-green-950 bg-opacity-20 text-green-400 text-xs p-1 rounded">
                    <div className="font-medium">HR: Weekly Challenge</div>
                    <div>14:00 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">6</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">7</div>
                  <div className="mb-1 bg-red-950 bg-opacity-20 text-red-400 text-xs p-1 rounded">
                    <div className="font-medium">CC: Starters 97</div>
                    <div>14:30 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">8</div>
                </div>
              </div>
              <div className="grid grid-cols-7 border-b border-neutral-700">
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">9</div>
                  <div className="mb-1 bg-yellow-950 bg-opacity-20 text-yellow-400 text-xs p-1 rounded">
                    <div className="font-medium">LC: Biweekly Contest</div>
                    <div>14:00 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">10</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">11</div>
                  <div className="mb-1 bg-purple-950 bg-opacity-20 text-purple-400 text-xs p-1 rounded">
                    <div className="font-medium">AC: Beginner Contest</div>
                    <div>12:00 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">12</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm font-medium">13</div>
                  <div className="mb-1 bg-blue-950 bg-opacity-20 text-blue-400 text-xs p-1 rounded">
                    <div className="font-medium">CF: Educational Round</div>
                    <div>17:35 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">14</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700 bg-neutral-800">
                  <div className="text-white mb-2 text-sm">15</div>
                  <div className="mb-1 bg-green-950 bg-opacity-20 text-green-400 text-xs p-1 rounded">
                    <div className="font-medium">HE: July Circuits</div>
                    <div>13:30 UTC</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7">
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">16</div>
                  <div className="mb-1 bg-yellow-950 bg-opacity-20 text-yellow-400 text-xs p-1 rounded">
                    <div className="font-medium">LC: Weekly Contest</div>
                    <div>02:30 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">17</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">18</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">19</div>
                  <div className="mb-1 bg-red-950 bg-opacity-20 text-red-400 text-xs p-1 rounded">
                    <div className="font-medium">CC: Cook-Off</div>
                    <div>18:00 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">20</div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">21</div>
                  <div className="mb-1 bg-blue-950 bg-opacity-20 text-blue-400 text-xs p-1 rounded">
                    <div className="font-medium">CF: Div 2 Round</div>
                    <div>17:35 UTC</div>
                  </div>
                </div>
                <div className="h-32 p-2 border-r border-neutral-700">
                  <div className="text-white mb-2 text-sm">22</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-neutral-700">
            <h3 className="text-xl font-montserrat text-keppel-200 mb-6">
              Upcoming Contests
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-neutral-800/45 backdrop-bluw-md rounded-xl hover:bg-neutral-700 transition-colors duration-300">
                <div className="mb-3 md:mb-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-4">
                      CF
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        Codeforces Round #845 (Div. 2)
                      </h4>
                      <p className="text-sm text-gray-400">
                        Tuesday, July 25 • 19:35 UTC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-blue-950 text-blue-400 px-3 py-1 rounded-full">
                    Rated
                  </span>
                  <span className="text-sm text-gray-400">2:00 hours</span>
                  <Button className="bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500 rounded-xl px-3 py-1 text-sm font-medium transition-colors duration-300">
                    Add Reminder
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-neutral-800/45 backdrop-bluw-md rounded-xl hover:bg-neutral-700 transition-colors duration-300">
                <div className="mb-3 md:mb-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm mr-4">
                      CC
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        CodeChef July Cook-Off
                      </h4>
                      <p className="text-sm text-gray-400">
                        Friday, July 28 • 14:30 UTC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-red-950 text-red-400 px-3 py-1 rounded-full">
                    Rated
                  </span>
                  <span className="text-sm text-gray-400">2:30 hours</span>
                  <Button className="bg-transparent hover:bg-red-600 text-red-400 hover:text-white border border-red-500 rounded-xl px-3 py-1 text-sm font-medium transition-colors duration-300">
                    Add Reminder
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-neutral-800/45 backdrop-bluw-md rounded-xl hover:bg-neutral-700 transition-colors duration-300">
                <div className="mb-3 md:mb-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-white font-bold text-sm mr-4">
                      LC
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        LeetCode Weekly Contest 356
                      </h4>
                      <p className="text-sm text-gray-400">
                        Sunday, July 30 • 02:30 UTC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-yellow-950 text-yellow-400 px-3 py-1 rounded-full">
                    Rated
                  </span>
                  <span className="text-sm text-gray-400">1:30 hours</span>
                  <Button className="bg-transparent hover:bg-yellow-500 text-yellow-400 hover:text-white border border-yellow-500 rounded-xl px-3 py-1 text-sm font-medium transition-colors duration-300">
                    Add Reminder
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-neutral-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-300 text-sm">Platforms:</span>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-keppel-950 text-keppel-400 text-xs px-3 py-1 rounded-full">
                  Codeforces
                </Button>
                <Button className="bg-yellow-950 hover:bg-yellow-600 text-yellow-400 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  LeetCode
                </Button>
                <Button className="bg-red-950 hover:bg-red-600 text-red-400 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  CodeChef
                </Button>
                <Button className="bg-green-950 hover:bg-green-600 text-green-400 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  HackerRank
                </Button>
                <Button className="bg-indigo-950 hover:bg-indigo-600 text-indigo-400 hover:text-white text-xs px-3 py-1 rounded-full transition-colors duration-300">
                  More...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
