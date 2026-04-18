// FUTURE: replace this in-memory array with real DB queries (PostgreSQL via pg or Prisma)
const products = [
  { id: 1, name: 'Chàm Indigo',  material: 'Hand-dyed silk, Bắc Ninh',     price: 1200000, currency: 'VND', image: 'https://placehold.co/600x800/2c1810/d4956a?text=.' },
  { id: 2, name: 'Ngọc Bích',   material: 'Linen & raw silk blend',         price: 980000,  currency: 'VND', image: 'https://placehold.co/600x800/1c2818/8aac7a?text=.' },
  { id: 3, name: 'Hoa Hồng',    material: 'Pure Mã Châu silk',              price: 1450000, currency: 'VND', image: 'https://placehold.co/600x800/201018/c47a9a?text=.' },
  { id: 4, name: 'Đêm Đen',     material: 'Woven charcoal silk, Vạn Phúc', price: 1100000, currency: 'VND', image: 'https://placehold.co/600x800/181818/888888?text=.' },
  { id: 5, name: 'Vàng Lúa',    material: 'Golden silk, hand-embroidered',  price: 1680000, currency: 'VND', image: 'https://placehold.co/600x800/281c10/c49a5a?text=.' },
  { id: 6, name: 'Biển Xanh',   material: 'Silk chiffon, coastal dye',      price: 890000,  currency: 'VND', image: 'https://placehold.co/600x800/10181c/5a8aa4?text=.' },
]

export function getAllProducts(req, res) {
  res.json({ success: true, data: products })
}

export function getProductById(req, res) {
  const product = products.find(p => p.id === Number(req.params.id))
  if (!product) return res.status(404).json({ success: false, error: 'Product not found' })
  res.json({ success: true, data: product })
}
