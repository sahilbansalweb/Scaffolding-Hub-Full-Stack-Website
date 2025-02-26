import Link from "next/link";

export default function About() {
    return (
        <div className="bg-[#EDE8DF] min-h-screen text-[#263E57]">
            {/* Hero Section */}
            <section className="relative bg-[#263E57] text-white text-center py-20">
                <h1 className="text-5xl font-extrabold uppercase tracking-wide">About Scaffolding Hub</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    5+ Years of Excellence in Scaffolding & Shuttering Solutions.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-10 bg-[#FFDE57]"></div>
            </section>

            {/* Company Overview */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Who We Are</h2>
                <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                    Established 5 years ago, <strong>Scaffolding Hub</strong> has been a leading provider of high-quality scaffolding and shuttering materials across India. 
                    We take pride in supporting construction projects with **safe, reliable, and cost-effective solutions**.
                </p>
                <div className="mt-8">
                    <img src="/images/construction.jpg" alt="Scaffolding Hub" className="max-w-3xl mx-auto rounded-lg shadow-lg"/>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="bg-[#263E57] text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Our Mission</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    <strong>For a better future and a more peaceful environment</strong> where everyone has an office to go to and a home to live in. 
                    We aim to contribute to the infrastructure development of India with world-class scaffolding solutions.
                </p>
            </section>

            {/* Location */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Our Location</h2>
                <p className="mt-4 text-gray-700">📍 <strong>Pataudi Road, Gurugram</strong></p>
                <div className="mt-6">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8762.060574589873!2d76.92215780000001!3d28.435911399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzE5LjMiTiA3NsKwNTUnMjAuMiJF!5e0!3m2!1sen!2sin!4v1647348375287!5m2!1sen!2sin" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* Contact Details */}
            <section className="bg-[#263E57] text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold uppercase">Get in Touch</h2>
                <p className="mt-4 text-lg">📞 Call us at: <strong>+91 7678601694, 87500-84518, 92669-56001</strong></p>
                <p className="mt-2 text-lg">📧 Email: <strong>thescaffoldinghub@gmail.com</strong></p>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-semibold text-center uppercase">Frequently Asked Questions</h2>
                <div className="mt-8 max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">What types of scaffolding do you provide?</h3>
                        <p className="text-gray-700 mt-2">We offer a wide range of **scaffolding and shuttering materials**, including **cuplock systems, H-frame scaffolding, steel props, and MS plates**.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">How can I get a quote?</h3>
                        <p className="text-gray-700 mt-2">You can **call us directly** at our contact numbers or **fill out the inquiry form** on our website.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">Do you offer delivery services?</h3>
                        <p className="text-gray-700 mt-2">Yes, we provide **on-time delivery** services across India for bulk orders.</p>
                    </div>
                </div>
            </section>

            {/* Back to Home Button */}
            <section className="text-center py-8">
                <Link href="/">
                    <button className="bg-[#FFDE57] text-[#263E57] px-8 py-3 font-bold rounded-lg hover:bg-yellow-500">
                        Back to Home
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <footer className="bg-[#263E57] text-white text-center py-4">
                <p>© 2025 Scaffolding Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
