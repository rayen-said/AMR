export function markdownToPlainText(markdown: string) {
  return markdown
    .replace(/```[^\n]*\n?/g, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\s*(?:[-*+] |\d+[.)] )/gm, "")
    .replace(/^\s*\|?(?:\s*:?-+:?\s*\|)+\s*$/gm, "")
    .replace(/[|*_~`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
