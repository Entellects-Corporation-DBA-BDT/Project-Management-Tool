// Client stub for the shared AI gateway (prompts, model calls, usage, eval).
// Edge Function: supabase/functions/ai-gateway

import { isSupabaseConfigured } from "./supabaseClient";
import { aiInsights } from "../data/mockWorkspace";

export async function requestInsight(kind, payload = {}) {
  if (!isSupabaseConfigured) {
    return {
      source: "mock",
      kind,
      payload,
      result: aiInsights,
      note: "Gateway not connected. Returning local preview data.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("/functions/v1/ai-gateway", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, payload }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`AI gateway responded with ${response.status}`);
    }

    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}
