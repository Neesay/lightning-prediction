# Real‑Time Lightning Now‑Cast

> Rapid‑start scaffold for a 15‑minute lightning now‑cast demo.

## Quick Start

```bash
pnpm install
pnpm dev
```

### Pre‑requisites

* Node 20
* pnpm – `corepack enable`
* `awscli` – `brew install awscli` (for local debugging of S3 downloads)

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your tokens:

```bash
cp .env.example .env.local
```

| Key | Description |
|-----|-------------|
| `GOES_BUCKET` | `noaa-goes19` (East) or `noaa-goes18` (West) |
| `REDIS_REST_URL` | Upstash Redis REST endpoint |
| `REDIS_REST_TOKEN` | Upstash REST token |
| `MAPBOX_TOKEN` | (optional) Mapbox GL token |

Switch to GOES‑18 for the Pacific domain.

### Deployment

1. Push this repo to GitHub.
2. Import to **Vercel**.
3. On **Hobby** plans, delete the `crons` block in `vercel.json` and instead trigger `/api/ingest` from a GitHub Action:

```yaml
name: Lightning ingest
on:
  schedule:
    - cron: '*/2 * * * *'
jobs:
  hit-endpoint:
    runs-on: ubuntu-latest
    steps:
      - name: Curl ingest
        run: curl -s https://<your‑vercel‑domain>/api/ingest
```

### License

Lightning strike data © NOAA, made available under the [U.S. Government Work](https://www.usa.gov/government-works) licence.
