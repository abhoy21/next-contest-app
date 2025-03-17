import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="fixed top-2 left-0 right-0 z-50 max-w-5xl mx-auto sm:px-4 border border-keppel-900/45 bg-neutral-900/10 backdrop-blur-md rounded-xl">
      <div className="flex h-16 items-center justify-between ">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-keppel-100 to-keppel-500 font-montserrat text-2xl tracking-widest">
          Next
          <span className="ml-2 tracking-tighter font-extrabold">Contest</span>
        </h1>
        <div className="hidden md:flex items-center space-x-8 ">
          <Link
            className="text-base text-gray-400 duration-300 ease-in-out hover:text-keppel-600"
            href="/home"
          >
            Features
          </Link>
          <Link
            className="text-base text-gray-400 duration-300 ease-in-out hover:text-keppel-600"
            href="/home"
          >
            Solutions
          </Link>

          <Link
            className="text-base text-gray-400 duration-300 ease-in-out hover:text-keppel-600"
            href="/home"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4 mr-2">
          <Link href="/calendar">
            <Button
              variant="outline"
              className="font-semibold text-keppel-400 hover:text-keppel-200 rounded-xl"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
