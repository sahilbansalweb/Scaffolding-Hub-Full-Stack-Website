import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((response) => response.json()) 
            .then((data) => {
                console.log("Fetched Products:", data); // ✅ Debugging
                
                if (Array.isArray(data)) { // Ensure data is an array
                    setProducts(data);
                } else {
                    console.error("API did not return an array:", data);
                    setProducts([]); // Set empty array to avoid errors
                }
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    

    return (
        <div className="bg-[#EDE8DF] text-[#263E57] min-h-screen">
            <header className="bg-[#FFDE57] text-[#263E57] py-16 text-center">
                <h1 className="text-4xl font-bold">Our Products</h1>
                <p className="text-lg mt-2">Top-quality scaffolding & shuttering equipment</p>
            </header>

            <section className="py-10 px-6">
                <h2 className="text-3xl font-semibold text-center">Available Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="bg-[#FFDE57] p-6 rounded-lg shadow-lg border-l-4 border-[#263E57]">
                                <h3 className="text-xl font-bold text-[#263E57]">{product.name}</h3>
                                <p className="text-[#263E57] mt-2">{product.description}</p>
                                <p className="text-[#263E57] font-semibold mt-2">₹{product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No products available</p>
                    )}
                </div>
            </section>
        </div>
    );
}
