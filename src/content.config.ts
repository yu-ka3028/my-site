import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		category: z.enum(["info", "tech", "reading", "misc"]).optional(),
		subcategory: z.string().optional(),
	}),
});

const topics = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/topics" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		status: z.enum(["exploring", "practicing"]),
		category: z.enum([
			"architecture",
			"sql",
			"types-and-errors",
			"web",
			"ai-tooling",
		]),
		tags: z.array(z.string()).optional(),
		related: z.array(z.string()).default([]),
		prerequisite: z.array(z.string()).default([]),
		portfolio: z.boolean().default(false),
		niche: z.boolean().default(false),
		constraint_context: z.string().optional(),
	}),
});

const roundups = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/roundups" }),
	schema: z.object({
		title: z.string(),
		type: z.literal("roundup"),
		date: z.coerce.date(),
		summarizes: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, topics, roundups };
