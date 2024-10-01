import { $ } from "bun";
import { minify } from "terser";

// script
await compress("src/q.js", "dist/q.min.js");

// helpers
// The plan is to switch to Bun.build when it's stable
async function compress(inFile: string, outFile: string) {
  const content = await Bun.file(inFile).text();
  const result = await minify(content, {
    compress: true,
    toplevel: true,
    mangle: true,
  });
  await Bun.write(outFile, result.code!);
  await logResult(Buffer.from(result.code!).length, outFile);
}

async function logResult(size: number, file: string) {
  const gzip = (await $`gzip -c -9 ${file} | wc -c`.text()).trim();
  console.log(`${file}: ${size}B - ${gzip}B gz`);
}
