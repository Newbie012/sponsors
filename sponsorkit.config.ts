import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  // Providers configs
  github: {
    login: "Newbie012",
    type: "user",
  },
  // Rendering configs
  width: 800,
  formats: ["svg"],
  outputDir: ".",
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    // Default tier
    {
      title: "Backers",
      preset: tierPresets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
});
