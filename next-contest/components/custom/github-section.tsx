import Link from "next/link";

export default function GithubSection(): React.JSX.Element {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 to-keppel-500 mb-6 py-2">
              Star Us on GitHub
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Support our open-source project by giving us a star on GitHub.
              Your stars help us grow and improve our platform for the coding
              community.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-keppel-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Show Your Support
                  </h3>
                  <p className="text-neutral-400 mb-3">
                    Stars help our project gain visibility in the GitHub
                    community. Your support motivates us to continue building
                    and improving.
                  </p>
                  <Link
                    href="https://github.com/abhoy21/next-contest.git"
                    target="_blank"
                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-4 py-2 w-1/4 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Star on GitHub
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-keppel-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Join the Discussion
                  </h3>
                  <p className="text-neutral-400 mb-3">
                    Participate in discussions, report issues, and suggest new
                    features. Your feedback is essential for our growth.
                  </p>
                  <Link
                    href="https://github.com/abhoy21/next-contest.git"
                    target="_blank"
                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-4 py-2 w-1/4 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    Open an Issue
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-keppel-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Contribute to the Project
                  </h3>
                  <p className="text-neutral-400 mb-3">
                    Fork the repository, make improvements, and submit pull
                    requests. Help us build a better platform for everyone.
                  </p>
                  <Link
                    href="https://github.com/abhoy21/next-contest.git"
                    target="_blank"
                    className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-4 py-2 w-1/4 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    Fork Repository
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-keppel-950">
              <div className="p-6 bg-gradient-to-br from-neutral-900 to-keppel-950/45">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 bg-keppel-600 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-keppel-200">
                      Next Contest
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      Have a look at the repository
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-5 border border-neutral-700/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-neutral-300 font-medium">
                      Project Status
                    </span>
                    <span className="text-emerald-400 text-sm font-medium">
                      Active
                    </span>
                  </div>

                  <div className="w-full bg-neutral-700/50 rounded-full h-2 mb-5">
                    <div
                      className="bg-gradient-to-r from-keppel-200 to-keppel-500 h-2 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-neutral-800/80 rounded-lg p-3 border border-neutral-700/30">
                      <span className="block text-neutral-400 text-xs mb-1">
                        Stars
                      </span>
                      <span className="text-white font-bold">24</span>
                    </div>
                    <div className="bg-neutral-800/80 rounded-lg p-3 border border-neutral-700/30">
                      <span className="block text-neutral-400 text-xs mb-1">
                        Forks
                      </span>
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="bg-neutral-800/80 rounded-lg p-3 border border-neutral-700/30">
                      <span className="block text-neutral-400 text-xs mb-1">
                        Issues
                      </span>
                      <span className="text-white font-bold">0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-5 border border-neutral-700/50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-keppel-600/30 flex items-center justify-center mr-3 border border-keppel-500/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-keppel-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-white font-medium">v1.0.0</span>
                        <span className="ml-2 text-xs bg-keppel-900/50 text-keppel-300 px-2 py-0.5 rounded-full border border-keppel-700/30">
                          Initial
                        </span>
                      </div>
                      <p className="text-neutral-400 text-xs">
                        Released recently
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-neutral-800">
                <Link
                  href="https://github.com/abhoy21/next-contest.git"
                  className="block w-full bg-keppel-600 hover:bg-keppel-700 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-300 text-center"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </div>
                </Link>
                <p className="text-neutral-500 text-xs text-center mt-4">
                  A personal project in development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
