import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Tevfik Murat Yildirim · Political Science<\/title>/i);
  assert.match(html, /Professor of Political Science/);
  assert.match(html, /Director of Graduate Studies/);
  assert.match(html, /political behavior, legislative politics, and/);
  assert.match(html, /citizens and institutions process political information/);
  assert.match(html, /Beyond these areas of research, I occasionally write about higher education/);
  assert.match(html, /article-length work has been published in various journals/);
  assert.match(html, /American Political Science Review/);
  assert.match(html, /Public Opinion Quarterly<\/em>, among others/);
  assert.doesNotMatch(html, /APSR · BJPS/);
  assert.doesNotMatch(html, /I study political elites and representation/);
  assert.match(html, /Research/);
  assert.match(html, /Publications/);
  assert.match(html, /Teaching/);
  assert.match(html, /Tevfik-Murat-Yildirim-CV\.pdf/);
  assert.match(html, /tevfik-murat-yildirim\.jpg/);
  assert.match(html, /https:\/\/doi\.org\/10\.1093\/poq\/nfag042/);
  assert.match(html, /https:\/\/doi\.org\/10\.7910\/DVN\/W8UKKE/);
  assert.match(html, /https:\/\/www\.comparativeagendas\.net\/project\/turkey\/datasets/);
  assert.match(html, /murat\.yildirim \[at\] uis\.no/);
  assert.doesNotMatch(html, /mailto:|murat\.yildirim@uis\.no/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|codex-preview/i);
  assert.doesNotMatch(html, />TMY<\/a>/);
});
