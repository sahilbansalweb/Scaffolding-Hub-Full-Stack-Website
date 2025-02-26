import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:5000/api/blogs").then((res) => res.json()),
            fetch("http://localhost:5000/api/products").then((res) => res.json())
        ])
        .then(([blogsData, productsData]) => {
            console.log("Fetched Blogs:", blogsData);
            console.log("Fetched Products:", productsData);
    
            setBlogs(Array.isArray(blogsData) ? blogsData : []);
            setProducts(Array.isArray(productsData) ? productsData : []);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
    
    return (
        <div className="bg-[#EDE8DF] min-h-screen text-[#263E57]">
            {/* Hero Section */}
            <section className="relative bg-[#263E57] text-white text-center py-20">
                <h1 className="text-5xl font-extrabold uppercase tracking-wide">Scaffolding & Shuttering Solutions</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">Reliable & Cost-effective Scaffolding Services in India</p>
                <button className="mt-6 bg-[#FFDE57] text-[#263E57] px-8 py-3 font-bold rounded-lg hover:bg-yellow-500">
                    Get a Free Quote
                </button>
                <div className="absolute bottom-0 left-0 w-full h-10 bg-[#FFDE57]"></div>
            </section>

            {/* Products Section */}
                <section className="py-16 px-6">
                    <h2 className="text-3xl font-semibold text-center uppercase">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-700 mt-2">{product.description}</p>
                                    <button className="mt-4 bg-[#263E57] text-white px-6 py-2 rounded-lg hover:bg-[#1C2C47]">
                                        Enquire Now
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No products available</p>
                        )}
                    </div>
                </section>


            {/* Why Choose Us Section */}
            <section className="bg-[#263E57] text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-[#FFDE57] text-[#263E57] font-bold rounded-lg">
                        ✅ Durable & Safe Equipment
                    </div>
                    <div className="p-6 bg-[#FFDE57] text-[#263E57] font-bold rounded-lg">
                        ✅ Competitive Pricing
                    </div>
                    <div className="p-6 bg-[#FFDE57] text-[#263E57] font-bold rounded-lg">
                        ✅ Timely Delivery
                    </div>
                </div>
            </section>

             {/* Blog Section */}
             <section className="py-10 px-6">
                <h2 className="text-3xl font-semibold text-center">Latest Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div key={blog.id} className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold">{blog.title}</h3>
                                <p className="text-gray-700 mt-2">{blog.content.substring(0, 100)}...</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No blogs available</p>
                    )}
                </div>
            </section>
            
            {/* Contact Section */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Get in Touch</h2>
                <p className="text-lg text-gray-700 mt-2">Call us at <strong>+91 9876543210</strong> or fill the form below</p>
                <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border mb-4"/>
                    <input type="text" placeholder="Your Phone" className="w-full p-3 rounded-lg border mb-4"/>
                    <button className="bg-[#263E57] text-white px-8 py-3 font-bold rounded-lg hover:bg-[#1C2C47]">
                        Submit Inquiry
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-[#263E57] text-white text-center py-4">
                <p>© 2025 Scaffolding Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
