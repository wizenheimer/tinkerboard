export enum Context {
	Sentence = "sentence",
	Character = "character",
	Paragraph = "paragraph",
	Section = "section",
	Chapter = "chapter",
	Markdown = "markdown",
	Latex = "latex",
	HTML = "html",
}

export type SplitOptions = {
	minLength?: number; // minLength: Minimum length of each chunk (default is 0).
	maxLength?: number; // maxLength: Maximum length of each chunk (default is 1000).
	overlap?: number; // overlap: Number of characters to overlap between chunks (default is 0).
	context?: Context; // splitter: Specifies whether to split by "sentence" or "paragraph" (default is "sentence").
	delimiter?: string; // delimiter: Specifies the delimiter to use
	metadata?: boolean; // metadata: Specifies whether metadata should be included in the chunk
};
