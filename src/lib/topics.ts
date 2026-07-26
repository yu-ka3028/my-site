import type { CollectionEntry } from "astro:content";

export interface EnrichedTopic {
	topic: CollectionEntry<"topics">;
	count: number;
	core: boolean;
	unconnected: boolean;
}

export function enrichTopics(
	topics: CollectionEntry<"topics">[],
	roundups: CollectionEntry<"roundups">[],
): Map<string, EnrichedTopic> {
	const counts = new Map<string, number>();
	for (const roundup of roundups) {
		for (const slug of roundup.data.summarizes) {
			counts.set(slug, (counts.get(slug) ?? 0) + 1);
		}
	}

	const enriched = new Map<string, EnrichedTopic>();
	for (const topic of topics) {
		const count = counts.get(topic.data.slug) ?? 0;
		enriched.set(topic.data.slug, {
			topic,
			count,
			core: count >= 3,
			unconnected: count === 0 && !topic.data.niche,
		});
	}
	return enriched;
}
