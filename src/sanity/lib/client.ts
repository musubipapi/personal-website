import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./api";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
