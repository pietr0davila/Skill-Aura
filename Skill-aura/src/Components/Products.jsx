import Product from './Product.jsx'

export default function Products() {
    return (
        <section className="productsSection">
            <h2 style={{color: "var(--color-primary)", marginBottom: "20px"}}>Conheça nossos produtos</h2>
            <div className="products">
                <Product 
                    name="Encontre empregos em qualquer área!" 
                    image="/public/capa e-book.png"
                />
            </div>
        </section>
    )
} 