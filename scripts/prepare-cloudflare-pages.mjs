import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const openNextDir = ".open-next";
const assetsDir = join(openNextDir, "assets");

const requiredPaths = [
  join(openNextDir, "worker.js"),
  join(openNextDir, "cloudflare"),
  join(openNextDir, "middleware"),
  join(openNextDir, "server-functions"),
  join(openNextDir, ".build"),
];

for (const path of requiredPaths) {
  if (!existsSync(path)) {
    throw new Error(`Missing OpenNext build output: ${path}`);
  }
}

mkdirSync(assetsDir, { recursive: true });

for (const path of [
  "_worker.js",
  "cloudflare",
  "middleware",
  "server-functions",
  ".build",
]) {
  rmSync(join(assetsDir, path), { force: true, recursive: true });
}

cpSync(join(openNextDir, "worker.js"), join(assetsDir, "_worker.js"));
cpSync(join(openNextDir, "cloudflare"), join(assetsDir, "cloudflare"), {
  recursive: true,
});
cpSync(join(openNextDir, "middleware"), join(assetsDir, "middleware"), {
  recursive: true,
});
cpSync(
  join(openNextDir, "server-functions"),
  join(assetsDir, "server-functions"),
  { recursive: true },
);
cpSync(join(openNextDir, ".build"), join(assetsDir, ".build"), {
  recursive: true,
});

const routes = {
  version: 1,
  include: ["/*"],
  exclude: [
    "/_next/static/*",
    "/favicon.ico",
    "/footer-bg.png",
  ],
};

writeFileSync(
  join(assetsDir, "_routes.json"),
  `${JSON.stringify(routes, null, 2)}\n`,
);
