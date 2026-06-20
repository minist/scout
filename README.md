# Scout

Scout is a hackathon MVP for validating startup ideas before building. It recommends one experiment, generates the assets to run it, and defines a measurable success threshold.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## OpenAI

The app uses `OPENAI_API_KEY` when available:

```bash
OPENAI_API_KEY=... npm run dev
```

If the key or API call is unavailable, `/api/generate` returns demo-safe mock data using the RoboRoute robotics startup example.
