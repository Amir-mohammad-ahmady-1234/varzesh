"use server";

import { PodcastGet } from "../../../server/admin/paneladmin/podcast/PodcastGet";

export async function GetPodcasts() {
  return await PodcastGet();
}
