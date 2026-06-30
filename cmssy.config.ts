import type { CmssyNextConfig } from "@cmssy/next";

// On cmssy cloud you only set the two per-workspace values below.
// apiUrl + editorOrigin default to cmssy cloud (api.cmssy.io / www.cmssy.io);
// uncomment them only for local dev or self-hosting.
export const cmssy: CmssyNextConfig = {
  workspaceSlug: process.env.CMSSY_WORKSPACE_SLUG ?? "",
  draftSecret: process.env.CMSSY_DRAFT_SECRET ?? "",
  defaultLocale: "en",
  enabledLocales: ["en"],
  // apiUrl: process.env.CMSSY_API_URL,
  // editorOrigin: process.env.CMSSY_EDITOR_ORIGIN,
};
