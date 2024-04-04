import { Dot, Play, Triangle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-2xl mx-auto">
      <div className="mt-8 font-semibold text-xl text-neutral-600">
        Andy Gao
      </div>
      <div className="mt-4">
        <div className="flex items-center bg-slate-200 border rounded-sm">
          {/* @ts-ignore */}
          <div className="flex items-center bg-green-300 rounded-sm p-1 text-sm">
            <Play size={15} />
            <div className=" ml-2 whitespace-nowrap">Now Playing</div>
          </div>
          <div className="italic p-0 w-full flex items-center">
            {/* @ts-ignore */}
            <marquee className="w-full">
              Traveling the world and wrangling with code.
              {/* @ts-ignore */}
            </marquee>
          </div>
        </div>
        <br />
        <div>
          <p>
            In a former life, I was a{" "}
            <Link
              href="https://tryarcher.io"
              className="text-blue-400 cursor-pointer hover:text-blue-500"
            >
              startup founder
            </Link>{" "}
            working on bringing AI to the owners of small businesses.
          </p>
          <br />
          <p>
            {`These days I'm tinkering on some personal projects and building out my`}{" "}
            <a className="text-blue-400 cursor-pointer hover:text-blue-500">
              software studio
            </a>
            {`. If you need help building something, please feel free to reach out!`}
          </p>
        </div>
        <div className="border-t border-neutral-200 my-4" />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4">
            <div className="mb-2">{`Thoughts I'm pondering`}</div>
            <div className="">
              <div className="flex">
                <Dot />
                <a className="text-blue-500 cursor-pointer">
                  Reflections on building a startup
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-md col-span-2">
            <div>{`Music I'm listening to`}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
