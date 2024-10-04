const server = Bun.serve({
  port: 3215,
  fetch: async (req) => new Response(Bun.file("." + new URL(req.url).pathname)),
  error: () => new Response(null, { status: 404 }),
});

console.log(`Visit ${server.url}test/index.html`);
