-- TeamFlow Manager AI gateway (shared orchestration stub).
-- Deploy later as a Supabase Edge Function. Does not call a live model yet.

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json().catch(() => ({}));

  return Response.json({
    source: "ai-gateway",
    status: "stubbed",
    kind: body.kind ?? "unknown",
    note: "Prompt versioning, usage caps, and model routing are not live.",
  });
});
