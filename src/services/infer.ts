import { Context } from "./options";

export function inferRegex(context: Context = Context.Character) {
	let regex;
	switch (context) {
		case Context.Character:
			regex = "\n\n";
			break;
		case Context.Sentence:
			regex = "([.!?\\n])\\s*";
			break;
		case Context.Paragraph:
			regex = "\\n{2,}";
			break;
		default:
			regex = " ";
			break;
	}
	return regex;
}
