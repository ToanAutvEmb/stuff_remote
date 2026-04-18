# Development Setup

## Prerequisites
- Node.js 18+
- npm 9+

## 1. Clone & install

```bash
cd D:\99_Stuff\Personal\lumos\project1

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
cp .env.example .env
```

## 2. Run (two terminals)

**Terminal 1 — Backend**
```bash
cd backend
npm run dev
# → http://localhost:4000
```

**Terminal 2 — Frontend**
```bash
cd frontend
npm run dev
# → http://localhost:5173
```

## 3. Build for production

```bash
cd frontend
npm run build
# Output in frontend/dist/
```
