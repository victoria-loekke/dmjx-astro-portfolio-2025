import { z, defineCollection } from "astro:content";


const caseCollection = defineCollection({
  // Define the schema
  schema: z.object({
    title: z.string().max(100),
    date: z.date(),
    categories: z.array(z.string()),
    summary: z.string(),
    image: z.string().optional(), //Image can be optional
  }),
});

// Export
export const collections = {
  //  collectionName: collection
  case: caseCollection,
};
