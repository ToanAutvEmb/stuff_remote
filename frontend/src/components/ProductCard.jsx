import './ProductCard.css'

// FUTURE: onClick -> navigate to /product/:id
// FUTURE: onAddToCart -> dispatch to CartContext
export default function ProductCard({ name, material, price, image, delay = 0 }) {
  return (
    <div className={`product-card reveal reveal-delay-${delay}`}>
      <div className="product-img-wrap">
        <img src={image} alt={name} />
      </div>
      <div className="product-add">+</div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-material">{material}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  )
}
