import {
  PostQueryResponse,
  postQuery,
  SettingsQueryResponse,
  settingsQuery,
} from "@/sanity/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { groq } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}
type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResponse>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch<PostQueryResponse>({
      query: postQuery,
      params,
    }),
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
  ]);
  return (
    <main className="w-full max-w-2xl mx-auto mt-8 px-4 md:px-0">
      <div className="text-gray-400 font-light underline cursor-pointer">
        <Link href="/">Back</Link>
      </div>
      <div className="font-bold text-2xl">{post?.title}</div>
      {post?.date && (
        <div className="text-gray-500 text-sm">{formatDate(post?.date)}</div>
      )}
      <div className="mt-4">
        <PortableText value={post?.body!} />
      </div>
    </main>
  );
}
