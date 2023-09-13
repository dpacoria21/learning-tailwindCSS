export const Card = ({product}) => {

    return(
        <div className="h-48 w-96 bg-stone-700 rounded-md">
            <p className="hyphens-auto">
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.price_descount}</p>
            </p>
        </div>
    )
}