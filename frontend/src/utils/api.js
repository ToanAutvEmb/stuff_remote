// Central API utility — all fetch calls go through here
// FUTURE: add auth token headers, error interceptors

const BASE_URL = import.meta.env.VITE_API_URL || '/api'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function subscribeNewsletter(email) {
  const res = await fetch(`${BASE_URL}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  if (!res.ok) throw new Error('Subscription failed')
  return res.json()
}

// FUTURE: getProduct(id), createOrder(), processPayment()
