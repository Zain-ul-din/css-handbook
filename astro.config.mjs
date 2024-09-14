// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "CSS Handbook",
      social: {
        github: "https://github.com/withastro/starlight"
      },
      sidebar: [
        {
          link: "intro",
          label: "Intro"
        },
        {
          label: "Fundamentals",
          items: [
            { label: "Basic Syntax", slug: "fundamentals/syntax" },
            { label: "Selectors", slug: "fundamentals/selectors" }
          ]
        }
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" }
        //   ]
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" }
        // }
      ]
    })
  ]
});
