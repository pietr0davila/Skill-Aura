import './Product.css'

export default function Product(props) {
    return (
        <div className="productsSection">
            <h4>{ props.name }</h4>
            <img src={ props.image } alt="" style={{width: "200px"}}/>
            <button>Compre agora</button>
        </div>
    )
}