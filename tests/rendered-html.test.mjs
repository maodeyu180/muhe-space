import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

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

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<title>于木禾 · YUMUHE · AI 全栈开发者<\/title>/i);
  assert.doesNotMatch(html, /\u4e8e\u5fb7\u6d77/);
  assert.match(html, /AI 全栈开发者 \/ 产品构建者/);
  assert.match(html, /喵的 AI/);
  assert.match(html, /RunningHub AIGC Platform/);
  assert.match(html, /href="mailto:maodeyu180@gmail\.com"/);
  assert.match(html, /alt="一只举起爪子打招呼的橘白猫"/);
  assert.match(
    html,
    /property="og:image" content="http:\/\/localhost(?::3000)?\/og\.png"/,
  );
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("removes starter preview code and keeps portfolio assets", async () => {
  const [page, layout, navigation, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ScrollSpyNav.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /id="about"/);
  assert.match(page, /id="work"/);
  assert.match(page, /id="journey"/);
  assert.match(page, /id="contact"/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(navigation, /requestAnimationFrame\(updateActiveSection\)/);
  assert.match(navigation, /aria-current=\{isActive \? "location"/);
  assert.match(navigation, /\{ id: "stack", label: "能力" \}/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/cats/hello.png", import.meta.url)),
    access(new URL("../public/cats/peek.png", import.meta.url)),
    access(new URL("../public/cats/jump.png", import.meta.url)),
    access(new URL("../public/cats/heart.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});
