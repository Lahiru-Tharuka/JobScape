# JobScape

JobScape is a full‑stack platform for posting jobs, applying to roles and recommending opportunities to candidates.
It consists of a Node.js/Express backend, a React frontend built with Vite and an optional FastAPI machine‑learning
service for resume analysis and job recommendations.

## Features

- User registration and authentication for job seekers and employers
- Employers can create, view and remove job postings
- Job seekers can browse jobs and submit applications
- Machine‑learning service recommends relevant jobs and suggests missing skills
- Docker Compose configuration to run the full stack locally

## Project structure

```
├── backend/        # Express API and MongoDB models
├── frontend/       # React client built with Vite
├── ml_service/     # FastAPI recommendation service
├── docker-compose.yml
└── package.json    # Root test configuration
```

## Getting started

1. **Install dependencies**
   ```bash
   npm install               # install root dev dependencies
   cd backend && npm install # install backend dependencies
   cd ../frontend && npm install # install frontend dependencies
   ```

2. **Start services**
   ```bash
   # Using Node
   cd backend && npm run dev          # start API on http://localhost:4000
   cd ../frontend && npm run dev      # start client on http://localhost:5173

   # Machine‑learning service
   cd ../ml_service
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8001

   # Or run everything via Docker Compose
   docker-compose up --build
   ```

## Testing

Run unit tests from the repository root:

```bash
npm test
```

This executes the Jest test suite for both server and client code.

## License

This project is provided under the ISC license.
