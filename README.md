# ROSCARF — Project Structure

Vietnamese traditional scarf fashion brand — full-stack web application.

## Stack
- **Frontend**: React + Vite + plain CSS (no Tailwind)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL *(future)*
- **Infra**: Nginx + Docker *(future)*

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev        # http://localhost:4000
```

## Folder Guide
| Folder | Purpose |
|--------|---------|
| `frontend/` | React app — all UI, components, pages |
| `backend/` | Express API — routes, controllers |
| `database/` | SQL migrations & seeds *(future)* |
| `nginx/` | Web server config *(future)* |
| `docker/` | Docker + compose files *(future)* |
| `docs/` | Notes, API docs, design references |
