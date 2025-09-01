import z from "zod";

export const Game = z.object({
  username: z.string(),
  xp: z.number(),
  firstthem: z.string(),
  secondthem: z.string(),
  League: z.union([z.literal("Acup"), z.literal("Tcup"), z.literal("Dcup")]),
  step: z.string(),
  data: z.coerce.date(),
  time: z.coerce.date(),
  status: z.union([
    z.literal("Scheduled"),
    z.literal("down"),
    z.literal("live"),
  ]),
  description: z.string(),
});
