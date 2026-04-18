# Roscarf API Reference

Base URL: `http://localhost:4000/api`

## Endpoints

### GET /products
Returns all products.

**Response**
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Chàm Indigo", "material": "...", "price": 1200000, "currency": "VND", "image": "..." }
  ]
}
```

### GET /products/:id
Returns a single product.

### POST /newsletter
Subscribe an email.

**Body**
```json
{ "email": "you@example.com" }
```

**Response**
```json
{ "success": true, "message": "Subscribed successfully" }
```

### GET /health
Health check.

---

## Planned (future)
- `POST /orders` — create order
- `POST /payments/checkout` — Stripe checkout session
- `GET /admin/products` — admin product management
