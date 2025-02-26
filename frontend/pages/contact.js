import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert("Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        }
    };
    

    return (
        <div className="bg-[#EDE8DF] min-h-screen text-[#263E57]">
            {/* Page Header */}
            <section className="bg-[#263E57] text-white text-center py-16">
                <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
                <p className="mt-2 text-lg max-w-3xl mx-auto">
                    Get in touch with us for any inquiries related to scaffolding & shuttering.
                </p>
            </section>

            {/* Contact Information */}
            <section className="py-12 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl font-semibold">Our Contact Details</h2>
                <p className="mt-4 text-lg">
                    📍 **Location:** Pataudi Road, Gurugram  
                    📞 **Call Us:** +91 7678601694, 87500-84518, 92669-56001  
                    📧 **Email:** thescaffoldinghub@gmail.com  
                </p>
            </section>

            {/* Contact Form */}
            <section className="py-12 px-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-center">Send Us a Message</h2>
                <form className="mt-6 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-[#FFDE57]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-[#FFDE57]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Your Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-[#FFDE57]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#263E57] text-white py-2 rounded-lg hover:bg-[#FFDE57] transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Google Map */}
            <section className="py-12 px-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Find Us on Google Maps</h2>
                <iframe
                    src="https://g.co/kgs/v3zYqB7"
                    className="w-full h-80 rounded-lg shadow-lg"
                    allowFullScreen
                ></iframe>
            </section>

            {/* Footer */}
            <footer className="bg-[#263E57] text-white text-center py-4 mt-10">
                <p>© 2025 Scaffolding Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
