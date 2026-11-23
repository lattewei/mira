import { createMistral } from "@ai-sdk/mistral";
import {
	convertToModelMessages,
	createUIMessageStreamResponse,
	streamText,
	toUIMessageStream,
} from "ai";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { ENV } from "./env.server";

const mistral = createMistral({
	apiKey: ENV.MISTRAL_API_KEY,
});

const app = new Hono();

app.use(logger());
app.use(
	"/*",
	cors({
		origin: ENV.CORS_ORIGIN,
		allowMethods: ["GET", "POST", "OPTIONS"],
	}),
);

app.post("/ai", async (c) => {
	const body = await c.req.json();
	const uiMessages = body.messages || [];
	const result = streamText({
		model: mistral("mistral-small-latest"),
		messages: await convertToModelMessages(uiMessages),
	});

	return createUIMessageStreamResponse({
		stream: toUIMessageStream({ stream: result.stream }),
	});
});

app.get("/", (c) => {
	return c.text("OK");
});

export default app;
