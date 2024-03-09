export function parseDescription(string) {
	return string.split("\n").filter(Boolean);
}
