import { groq } from "next-sanity";
import { PortableTextBlock, Image } from "sanity";

export interface Author {
  name: string;
  picture?: (Image & { alt?: string | null }) | null;
}
export const settingsQuery = groq`*[_type == "settings"][0]`;

export interface SettingsQueryResponse {
  title?: string;
  description?: PortableTextBlock[];
  footer?: PortableTextBlock[];
  ogImage?: (Image & { alt?: string; metadataBase?: string }) | null;
}

export interface Post {
  _id: string;
  status: "draft" | "published";
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: (Image & { alt?: string }) | null;
  date: string;
  author?: Author | null;
}

export const GetAllPosts = groq`
  *[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
  }
`;

const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  body,
  ${postFields}
}`;

export type PostQueryResponse =
  | (Post & {
      body?: PortableTextBlock[] | null;
    })
  | null;
