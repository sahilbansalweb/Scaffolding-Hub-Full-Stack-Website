import { useEffect, useState } from "react";

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Example image URLs (Replace these with real images from your backend)
        setImages([
            "/images/gallery1.jpg",
            "/images/gallery2.jpg",
            "/images/gallery3.jpg",
            "/images/gallery4.jpg",
            "/images/gallery5.jpg",
            "/images/gallery6.jpg"
        ]);
    }, []);

    return (
        <div className="bg-[#EDE8DF] min-h-screen text-[#263E57]">
            {/* Page Header */}
            <section className="bg-[#263E57] text-white text-center py-16">
                <h1 className="text-4xl font-bold uppercase">Our Work Gallery</h1>
                <p className="mt-2 text-lg max-w-3xl mx-auto">
                    A glimpse of our scaffolding and shuttering projects.
                </p>
            </section>

            {/* Image Grid */}
            <section className="py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg border border-gray-300">
                            <img
                                src={img}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#263E57] text-white text-center py-4 mt-10">
                <p>© 2025 Scaffolding Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
