import { Card } from "./Card"

export const CardsGallery = () => {
    
    const products = [
        {
            id: 1,
            name: 'Zapatillas Puma',
            price: 255.50,
            price_descount: 215,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos fuga quo molestias esse maxime? Eius laborum doloremque maiores quisquam, assumenda, omnis obcaecati asperiores eum, itaque laboriosam consequatur magnam accusantium?',
            stock: 20,
            starts: 4.5
        }
    ]

    return(
        <>
        
            <div className="h-screen w-full bg-pink-500 flex justify-center items-center p-10">
                <div className="bg-indigo-600/70  w-full h-full rounded-md p-5">
                    {
                        products.map((product) => (
                            <Card key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>
        
        </>
    )
}