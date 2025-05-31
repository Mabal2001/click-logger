# Click Logger API

A simple API to log IP address, browser, OS, and location when users visit a link.

## Endpoint

- `GET /track`

## Response

```json
{
  "ip": "x.x.x.x",
  "userAgent": "...",
  "os": "...",
  "browser": "...",
  "location": {
    "city": "...",
    "region": "...",
    "country": "..."
  }
}
```

## Deploy on Vercel

This project is ready for deployment on [Vercel](https://vercel.com).
