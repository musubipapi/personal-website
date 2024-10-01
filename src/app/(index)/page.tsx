import { client } from "@/sanity/lib/client";
import { SanityDocument } from "sanity";
import { Post, GetAllPosts } from "@/sanity/queries";

export default async function Home() {
  return (
    <main className="text-lg w-screen h-screen justify-center flex items-center">
      Loading...
    </main>
  );
}
