import React from "react";

/**
 * Markdown mínimo das páginas legais (renderizado no build, sem dependência nova):
 * títulos (## com âncora opcional {#id}), parágrafos, listas, tabelas, **negrito**, `código` e [links](url).
 * O MarkdownRenderer do chat não serve aqui: não tem tabela e é estilizado para balão de mensagem.
 */

function inline(text: string, keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] !== undefined) {
      out.push(<strong key={key} className="font-semibold text-white">{inline(m[1], key)}</strong>);
    } else if (m[2] !== undefined) {
      out.push(<code key={key} className="rounded bg-white/10 px-1 py-0.5 text-[0.85em] text-gray-200">{m[2]}</code>);
    } else {
      out.push(<a key={key} href={m[4]} className="text-brand-300 underline underline-offset-2 hover:text-brand-200">{m[3]}</a>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const splitRow = (line: string) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

export default function LegalMarkdown({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    const key = `b${i}`;

    if (!line) { i++; continue; }

    const heading = line.match(/^(#{2,3})\s+(.*?)(?:\s+\{#([\w-]+)\})?$/);
    if (heading) {
      const Tag = heading[1].length === 2 ? "h2" : "h3";
      blocks.push(
        <Tag key={key} id={heading[3]} className={Tag === "h2" ? "mt-10 mb-3 scroll-mt-24 text-xl font-semibold text-white" : "mt-6 mb-2 text-lg font-semibold text-white"}>
          {inline(heading[2], key)}
        </Tag>,
      );
      i++;
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!/^\|[\s|:-]+\|$/.test(lines[i].trim())) rows.push(splitRow(lines[i]));
        i++;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key} className="my-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-white/[0.04] text-gray-200">
              <tr>{head.map((c, j) => <th key={j} className="px-4 py-2.5 font-semibold">{inline(c, `${key}h${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className="border-t border-white/5 align-top">
                  {r.map((c, j) => <td key={j} className="px-4 py-2.5 text-gray-400">{inline(c, `${key}r${ri}c${j}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={key} className="my-3 list-disc space-y-1.5 pl-5 text-gray-400 marker:text-gray-600">
          {items.map((it, j) => <li key={j}>{inline(it, `${key}-${j}`)}</li>)}
        </ul>,
      );
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|\||[-*]\s)/.test(lines[i].trim())) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push(<p key={key} className="my-3 leading-relaxed text-gray-400">{inline(para.join(" "), key)}</p>);
  }

  return <>{blocks}</>;
}
