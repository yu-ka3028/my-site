export const CATEGORIES = [
	{ slug: "info", label: "連絡" },
	{ slug: "tech", label: "技術" },
	{ slug: "reading", label: "読書" },
	{ slug: "misc", label: "雑記" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function getCategoryLabel(slug: CategorySlug): string {
	return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export const TOPIC_CATEGORIES = [
	{ slug: "architecture", label: "アーキテクチャ" },
	{ slug: "sql", label: "SQL" },
	{ slug: "types-and-errors", label: "型・例外処理" },
	{ slug: "web", label: "Web基礎" },
	{ slug: "ai-tooling", label: "AI実務活用" },
] as const;

export type TopicCategorySlug = (typeof TOPIC_CATEGORIES)[number]["slug"];

export function getTopicCategoryLabel(slug: TopicCategorySlug): string {
	return TOPIC_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export const STATUS_LABELS = {
	exploring: "探索中",
	practicing: "実践中",
	revisiting: "再訪中",
} as const;

export type TopicStatus = keyof typeof STATUS_LABELS;

export function getStatusLabel(status: TopicStatus): string {
	return STATUS_LABELS[status];
}
