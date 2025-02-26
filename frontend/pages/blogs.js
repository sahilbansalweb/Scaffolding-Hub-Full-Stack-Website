import { useEffect, useState } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(Array.isArray(data) ? data : []))
            .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <div className="bg-[#EDE8DF] min-h-screen text-[#263E57]">
            {/* Page Header */}
            <section className="bg-[#263E57] text-white text-center py-16">
                <h1 className="text-4xl font-bold uppercase">Latest Blogs</h1>
                <p className="mt-2 text-lg max-w-3xl mx-auto">
                    Stay updated with our latest insights on scaffolding, safety, and construction trends.
                </p>
            </section>

            {/* Blog List */}
            <section className="py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                                <h3 className="text-xl font-semibold text-[#263E57]">{blog.title}</h3>
                                <p className="text-gray-700 mt-2">
                                    {blog.content.length > 100 ? blog.content.substring(0, 100) + "..." : blog.content}
                                </p>
                                <button className="mt-4 bg-[#263E57] text-white px-4 py-2 rounded-lg hover:bg-[#1C2C47]">
                                    Read More
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 w-full">No blogs available</p>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#263E57] text-white text-center py-4 mt-10">
                <p>© 2025 Scaffolding Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
