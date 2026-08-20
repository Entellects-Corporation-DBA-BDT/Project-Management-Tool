-- Notification dispatch stub (in-app / email / mobile).

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json().catch(() => ({}));

  return Response.json({
    source: "notify",
    status: "queued_locally",
    channel: body.channel ?? "in_app",
    note: "Provider integration is not connected.",
  });
});
