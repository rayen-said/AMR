import type { ReactNode } from "react";

type ListItem = {
  indent: number;
  text: string;
};

function safeHref(value: string) {
  const href = value.trim();
  if (href.startsWith("/") || href.startsWith("#")) return href;

  try {
    const url = new URL(href);
    return ["http:", "https:", "mailto:"].includes(url.protocol) ? href : undefined;
  } catch {
    return undefined;
  }
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|\[[^\]]+\]\([^)]+\)|\*[^*\n]+\*|_[^_\n]+_)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const token = match[0];
    const key = `${keyPrefix}-${match.index}`;

    if (token.startsWith("`")) {
      nodes.push(<code key={key} className="border border-[#198049]/20 bg-[#e4eadc] px-1.5 py-0.5 font-mono text-[0.88em] text-[#198049]">{token.slice(1, -1)}</code>);
    } else if (token.startsWith("**") || token.startsWith("__")) {
      nodes.push(<strong key={key} className="font-bold text-[#050b08]">{renderInline(token.slice(2, -2), `${key}-strong`)}</strong>);
    } else if (token.startsWith("~~")) {
      nodes.push(<del key={key}>{renderInline(token.slice(2, -2), `${key}-del`)}</del>);
    } else if (token.startsWith("[")) {
      const link = /^\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)$/.exec(token);
      const href = link ? safeHref(link[2]) : undefined;

      nodes.push(href ? (
        <a key={key} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="font-semibold text-[#198049] underline decoration-[#198049]/35 underline-offset-4 transition-colors hover:text-[#11683a]">
          {renderInline(link![1], `${key}-link`)}
        </a>
      ) : token);
    } else {
      nodes.push(<em key={key}>{renderInline(token.slice(1, -1), `${key}-em`)}</em>);
    }

    cursor = match.index + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function isTableDivider(line: string) {
  return /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function tableCells(line: string) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function listMatch(line: string) {
  const match = /^(\s*)([-*+]|\d+[.)])\s+(.+)$/.exec(line);
  if (!match) return null;

  return {
    indent: Math.min(3, Math.floor(match[1].replace(/\t/g, "    ").length / 2)),
    ordered: /^\d/.test(match[2]),
    text: match[3],
  };
}

function beginsBlock(lines: string[], index: number) {
  const line = lines[index] ?? "";
  return /^\s*$/.test(line)
    || /^\s{0,3}#{1,6}\s+/.test(line)
    || /^\s*```/.test(line)
    || /^\s*>/.test(line)
    || /^\s*(?:[-*_]\s*){3,}$/.test(line)
    || Boolean(listMatch(line))
    || (line.includes("|") && isTableDivider(lines[index + 1] ?? ""));
}

function renderBlocks(lines: string[], keyPrefix: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const key = `${keyPrefix}-${index}`;
    const fence = /^\s*```([^\s`]*)\s*$/.exec(line);
    if (fence) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !/^\s*```/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) index += 1;
      blocks.push(
        <pre key={key} className="my-8 overflow-x-auto border border-[#050b08]/18 bg-[#e4e9de] p-5 text-sm leading-6 text-[#050b08]">
          <code className="font-mono">{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    const heading = /^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const classes = level === 1
        ? "mb-5 mt-14 font-display text-3xl font-semibold leading-tight tracking-[-.045em] text-[#050b08] sm:text-4xl"
        : level === 2
          ? "mb-4 mt-12 font-display text-2xl font-semibold leading-tight tracking-[-.04em] text-[#050b08] sm:text-3xl"
          : "mb-3 mt-9 font-display text-xl font-semibold leading-snug text-[#050b08] sm:text-2xl";
      const content = renderInline(heading[2], `${key}-heading`);

      if (level === 1) blocks.push(<h2 key={key} className={classes}>{content}</h2>);
      else if (level === 2) blocks.push(<h2 key={key} className={classes}>{content}</h2>);
      else blocks.push(<h3 key={key} className={classes}>{content}</h3>);
      index += 1;
      continue;
    }

    if (/^\s*(?:[-*_]\s*){3,}$/.test(line)) {
      blocks.push(<hr key={key} className="my-12 border-[#050b08]/20" />);
      index += 1;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quoteLines: string[] = [];
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      blocks.push(
        <blockquote key={key} className="my-8 border-l-4 border-[#198049] bg-[#e4eadc] px-6 py-4 text-[#465249]">
          {renderBlocks(quoteLines, `${key}-quote`)}
        </blockquote>,
      );
      continue;
    }

    const firstListItem = listMatch(line);
    if (firstListItem) {
      const ordered = firstListItem.ordered;
      const items: ListItem[] = [];
      while (index < lines.length) {
        const item = listMatch(lines[index]);
        if (!item || item.ordered !== ordered) break;
        items.push({ indent: item.indent, text: item.text });
        index += 1;
      }
      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List key={key} className={`my-6 space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"}`}>
          {items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`} style={{ marginLeft: `${item.indent * 1.25}rem` }} className="pl-1 leading-8 text-[#26342b] marker:text-[#198049]">
              {renderInline(item.text, `${key}-item-${itemIndex}`)}
            </li>
          ))}
        </List>,
      );
      continue;
    }

    if (line.includes("|") && isTableDivider(lines[index + 1] ?? "")) {
      const headers = tableCells(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      blocks.push(
        <div key={key} className="my-9 overflow-x-auto border border-[#050b08]/20">
          <table className="w-full min-w-lg border-collapse text-left text-sm">
            <thead className="bg-[#e4e9de]">
              <tr>{headers.map((cell, cellIndex) => <th key={cellIndex} className="border-b border-[#050b08]/20 px-4 py-3 font-bold text-[#050b08]">{renderInline(cell, `${key}-th-${cellIndex}`)}</th>)}</tr>
            </thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-[#050b08]/12 last:border-0">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top text-[#26342b]">{renderInline(cell, `${key}-td-${rowIndex}-${cellIndex}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraph: string[] = [line.trim()];
    index += 1;
    while (index < lines.length && !beginsBlock(lines, index)) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(
      <p key={key} className="my-6 text-base leading-8 text-[#26342b] sm:text-lg sm:leading-9">
        {renderInline(paragraph.join(" "), `${key}-paragraph`)}
      </p>,
    );
  }

  return blocks;
}

export default function MarkdownArticle({ content }: { content: string }) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  return <div className="min-w-0">{renderBlocks(lines, "article")}</div>;
}
