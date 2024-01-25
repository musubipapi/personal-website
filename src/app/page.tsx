import Coffee from "@/components/Coffee";
import Name from "@/components/Name";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navigation = [
  // { title: "Projects", link: "/", hidden: true },
  { title: "Thoughts", link: "/", hidden: true },
  { title: "Github", link: "https://github.com/musubipapi" },
  { title: "Instagram", link: "https://instagram.com/iforgottocooktherice" },
  { title: "Twitter/X", link: "https://twitter.com/andy_gao_1" },
];

export default function Home() {
  return (
    <main className="container mx-auto lg:px-0 px-4 max-w-3xl font-serif">
      <div>
        <div className="mt-8 text-4xl flex">
          Andy Ga
          <div className="mt-[13.2px] ml-[0.75px]">
            <Name />
          </div>
          .
        </div>
        <p className="text-lg">
          Welcome to my corner of the internet. Help yourself to a{" "}
          <span className="font-serif">
            <Coffee />
          </span>
        </p>
        <p className="text-lg">
          <span className="font-bold mr-1">Past:</span> Co-founder of{" "}
          <a
            className="text-green-800 hover:font-extrabold cursor-pointer dark:text-green-400"
            href="https://tryarcher.io"
          >
            Archer
          </a>
          .
        </p>
        <p className="text-lg">
          <span className="font-bold mr-1">Now:</span> Taking a smol break and
          building things for fun.
        </p>
        <p className="text-lg">
          <span className="font-bold mr-1">Future:</span>Open to{" "}
          <a className="text-blue-800 cursor-pointer hover:font-extrabold dark:text-blue-400">
            software consulting
          </a>{" "}
          and new opportunities.{" "}
        </p>
        <div className="flex flex-wrap mt-4">
          {Navigation.map((nav, i) => {
            return (
              <div
                key={i}
                className="rounded-sm mr-2 my-2 p-1 border dark:bg-white dark:text-black dark:hover:bg-gray-300 border-black hover:bg-black hover:text-white duration-75 transition ease-in cursor-pointer"
              >
                {nav.hidden ? (
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>{nav.title}</TooltipTrigger>
                      <TooltipContent className="mb-2">
                        <p className="font-serif">Coming soon</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <a href={nav.link}>{nav.title}</a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
