import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper for lazy GenAI
  let aiClient: GoogleGenAI | null = null;
  function getGenAI(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // API: Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", aiAvailable: !!process.env.GEMINI_API_KEY });
  });

  // API: AI Concierge Chat
  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const { messages, userPreferences } = req.body;
      const ai = getGenAI();

      if (!ai) {
        // Return structured intelligent spiritual guidance fallback if no key is configured
        return res.json({
          reply: `Peace be with you. I have tailored your spiritual inquiry with serene pacing and reverent focus. For your journey, I recommend exploring early morning prayer or meditation windows, wheelchair-friendly temple corridors, and dedicated reflection periods. How can I further refine your pilgrimage steps?`,
          suggestedItineraryChanges: null
        });
      }

      const systemInstruction = `You are the Divine Guide AI Concierge for Divine Journey AI, a revered and deeply knowledgeable spiritual travel companion.
Your tone is peaceful, welcoming, respectful of all faiths and sacred traditions (Hinduism, Buddhism, Christianity, Islam, Sikhism, Shinto, Judaism, etc.), articulate, and mindful of travel pacing (especially senior-friendly access, rest periods, serene timings like dawn or dusk).

When responding to travelers:
1. Greet them with serenity ("Peace be with you", "Namaste", "Blessings on your path").
2. Answer their question with rich theological, cultural, and practical travel insight (best times like Amrit Vela, Aarti timings, calm corridors, accessibility).
3. If they ask about planning a trip or modifying an itinerary, propose specific day-by-day sacred stops, timing, and accommodations.
4. Keep answers concise, beautiful, and inspiring.`;

      const contents = (messages || []).map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }]
      }));

      if (contents.length === 0) {
        contents.push({
          role: "user",
          parts: [{ text: "Hello! I am looking for guidance on planning a spiritual journey." }]
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({
        reply: response.text || "Peace be with you. May your path be illuminated with serenity and grace.",
      });
    } catch (err: any) {
      console.error("Error in /api/gemini/chat:", err);
      res.status(500).json({
        error: err.message || "Failed to generate spiritual guidance",
        reply: "Peace be with you. I am here to guide your sacred journey. We will pace every sacred site and rest period with utmost care."
      });
    }
  });

  // API: AI Itinerary Generator
  app.post("/api/gemini/plan", async (req, res) => {
    try {
      const { destination, tradition, duration, preferences } = req.body;
      const ai = getGenAI();

      if (!ai) {
        return res.json({
          itinerary: {
            title: `${destination || "Sacred Trail"} Pilgrimage`,
            tradition: tradition || "Interfaith",
            duration: duration || "5 Days",
            summary: `A harmonious spiritual expedition through ${destination || "sacred grounds"}, balancing revered temple darshans, quiet contemplation, and restful accommodations.`,
            days: [
              {
                day: 1,
                date: "Day 1",
                title: "Arrival & Sacred Inception",
                theme: "Settlement & Evening Prayer",
                activities: [
                  { time: "Morning", title: `Arrival in ${destination || "the Holy City"}`, description: "Transfer to heritage lodging with gentle rest.", icon: "flight_land" },
                  { time: "Evening", title: "Sunset River / Temple Aarti", description: "Witness the evening lamps and devotional hymns.", icon: "flame" }
                ]
              },
              {
                day: 2,
                date: "Day 2",
                title: "Dawn Meditation & Sanctum Visit",
                theme: "Inner Stillness",
                activities: [
                  { time: "Dawn", title: "Early Morning Reflection", description: "Quiet darshan before crowds gather.", icon: "sparkles" },
                  { time: "Afternoon", title: "Heritage Walk & Sacred Texts", description: "Guided theological walkthrough.", icon: "book_open" }
                ]
              }
            ]
          }
        });
      }

      const prompt = `Create a structured spiritual pilgrimage itinerary for:
Destination: ${destination || "Varanasi"}
Tradition: ${tradition || "Hinduism"}
Duration: ${duration || "4-7 Days"}
Preferences/Notes: ${preferences || "Senior-friendly pace, gentle walking, peaceful reflection"}.

Return ONLY valid JSON matching this structure:
{
  "title": "string",
  "tradition": "string",
  "duration": "string",
  "summary": "string",
  "days": [
    {
      "day": 1,
      "date": "Day 1",
      "title": "Title of Day",
      "theme": "Theme of the day",
      "activities": [
        {
          "time": "Morning/Afternoon/Evening",
          "title": "Activity name",
          "description": "Details with accessibility and spiritual note",
          "type": "transport" | "accommodation" | "darshan" | "meditation"
        }
      ]
    }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.4,
        }
      });

      let parsed = JSON.parse(response.text || "{}");
      res.json({ itinerary: parsed });
    } catch (err: any) {
      console.error("Error in /api/gemini/plan:", err);
      res.status(500).json({ error: err.message || "Failed to generate itinerary" });
    }
  });

  // Vite middleware for development vs static for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Divine Journey AI server running on http://localhost:${PORT}`);
  });
}

startServer();
