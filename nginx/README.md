# Nginx

## Purpose
- Reverse proxy: routes `/api/*` to backend:4000 and `/*` to frontend:5173 (or built static files)
- SSL termination
- Gzip compression
- Static file serving for `frontend/dist`

## Setup (future)
Place `roscarf.conf` here and mount it in docker-compose.
