# Database — PostgreSQL

## Setup (future)
```bash
createdb roscarf
psql roscarf < migrations/001_init.sql
psql roscarf < seeds/products.sql
```

## Planned tables
- `products`      — scarf catalog
- `subscribers`   — newsletter signups
- `orders`        — customer orders (Stripe integration)
- `order_items`   — line items per order
- `users`         — admin accounts
