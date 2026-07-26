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
	{ slug: "architecture", label: "アーキテクチャ", color: "#a3b54a" },
	{ slug: "sql", label: "SQL", color: "#5b9bd5" },
	{ slug: "types-and-errors", label: "型・例外処理", color: "#e8703a" },
	{ slug: "web", label: "Web基礎", color: "#4caf82" },
	{ slug: "ai-tooling", label: "AI実務活用", color: "#b57edc" },
] as const;

export type TopicCategorySlug = (typeof TOPIC_CATEGORIES)[number]["slug"];

export function getTopicCategoryLabel(slug: TopicCategorySlug): string {
	return TOPIC_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function getTopicCategoryColor(slug: TopicCategorySlug): string {
	return TOPIC_CATEGORIES.find((c) => c.slug === slug)?.color ?? "#80806a";
}

export const STATUS_LABELS = {
	exploring: "インプット",
	practicing: "アウトプット",
} as const;

export const STATUS_ICONS = {
	exploring: "◻︎",
	practicing: "☑︎",
} as const;

export type TopicStatus = keyof typeof STATUS_LABELS;

export function getStatusLabel(status: TopicStatus): string {
	return STATUS_LABELS[status];
}

export function getStatusIcon(status: TopicStatus): string {
	return STATUS_ICONS[status];
}
