import React from 'react';

// Placeholder components for your images.
// You'll replace the content/styling of these with your actual imported images
// which include the design elements (like the tape).
const Image4 = () => (
    <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
        Image 4 (Top Main Image)
    </div>
);
const Image5 = () => (
    <div className="w-full h-96 bg-gray-200 relative">
        <div className="absolute top-0 right-0 p-2 bg-white border-2 border-yellow-500 text-xl font-bold">10</div>
        <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">
            Image 5 (Left Image in "Who we are" section)
        </div>
    </div>
);
const Image6 = () => (
    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
        Image 6 (Left Image in "Flexible Marketing Solutions" section)
    </div>
);
const Image7 = () => (
    <div className="w-full h-96 bg-gray-200 relative">
        <div className="absolute bottom-0 right-0 p-2 bg-white border-2 border-yellow-500 text-xl font-bold">1000+</div>
        <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">
            Image 7 (Left Image in "Empowering Brands" section)
        </div>
    </div>
);

// Placeholder for the main navigation/header (only the 'About Us' part is relevant here)
const Header = () => (
    <div className="text-center py-20 bg-white">
        <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-2">
            <span>Prices</span>
            <span>Services</span>
            <span className="font-bold text-gray-800">About Us</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
            FocusOne Digital Marketing helps brands stand out with creative strategies. Gain, drive
            traffic, and increase sales.
        </p>
        <button className="absolute top-6 right-6 bg-blue-700 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-800">
            Contact Us
        </button>
    </div>
);

const Footer = () => (
    <div className="bg-gray-900 text-white text-center py-10 mt-20">
        <div className="flex justify-center space-x-6 text-sm mb-4">
            <span>Services</span>
            <span>Teams</span>
            <span>About Us</span>
        </div>
        <div className="flex justify-center space-x-4 text-xl">
            {/* Replace with actual social icons */}
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-twitter"></i></span>
            <span><i className="fab fa-linkedin"></i></span>
        </div>
    </div>
);

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            <main className="container mx-auto px-4 md:px-12">
                {/* Top Main Image Section */}
                <section className="mb-20">
                    <Image4 /> {/* Corresponds to About page (1).jpg top image */}
                </section>

                <hr className="border-gray-100 my-10" />

                {/* Who we are at prelusive Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column (Image) */}
                    <div className="order-2 md:order-1">
                        <Image5 /> {/* Corresponds to About page (1).jpg middle left image */}
                    </div>
                    {/* Right Column (Text) */}
                    <div className="order-1 md:order-2">
                        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">About us</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Who we are at <span className="text-blue-700">prelusive</span>
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            FocusOne Digital Marketing works with you to help
                            brands stand out with creative strategies. Gain,
                            drive traffic, and increase sales. We blend the
                            creativity of strategy to execution. We're gaining
                            extended expertise in developing innovative marketing
                            strategies tailored to modern business needs.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We use cutting-edge technologies and data-driven
                            insights to deliver outstanding results. Whether
                            you're an emerging startup or an established enterprise,
                            we have the solutions to propel your brand forward.
                        </p>
                        <button className="bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-blue-800 transition duration-300">
                            Read More
                        </button>
                    </div>
                </section>

                <hr className="border-gray-100 my-10" />

                {/* Offer Flexible Marketing Solutions Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column (Text) */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Offer Flexible Marketing Solutions That Help Your Business Run Smoother.
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            FocusOne innovative digital marketing solutions that help business
                            achieve marketing goals. We provide customized, effective
                            strategy, and technology to drive measurable results in
                            advertising and media.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We use cutting-edge technologies and data-driven
                            insights to deliver outstanding results.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Image6 /> {/* Corresponds to About page (1).jpg bottom left image of a person */}
                            <div className="w-full h-64 bg-gray-900 flex items-center justify-center">
                                {/* This is the dark-colored image on the right of this section */}
                                <span className="text-white font-bold">Dark Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column (Image/Dark Space) - This section appears to be a large dark image */}
                    <div className="hidden md:block">
                        <div className="w-full h-full max-h-[600px] bg-gray-900 flex items-center justify-center">
                            {/* This is the large dark image on the right of the section */}
                            <span className="text-white font-bold">Large Dark Image Placeholder</span>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-100 my-10" />

                {/* Empowering Brands, Driving Growth Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column (Image) */}
                    <div className="order-2 md:order-1">
                        <Image7 /> {/* Corresponds to About page (1).jpg bottom left-most image */}
                    </div>
                    {/* Right Column (Text) */}
                    <div className="order-1 md:order-2">
                        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">About us</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Empowering Brands, Driving Growth
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We believe that success comes from driving measurable
                            results, increasing customer engagement, and ensuring
                            sustainable growth.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Every project we take on results-driven, measurable, and
                            aligned with your goals. We're committed to helping you
                            achieve your business objectives and deliver innovative and
                            effective solutions every time.
                        </p>
                        <button className="bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-blue-800 transition duration-300">
                            Read More
                        </button>
                    </div>
                </section>

                {/* Request More Information Banner */}
                <section className="bg-gray-900 text-white text-center py-20 rounded-md -mx-4 md:-mx-12 mb-0">
                    <p className="text-sm font-semibold text-yellow-500 uppercase tracking-widest mb-2">STEP UP TO THE MARKET DEMANDS WITH PRELUSIVE</p>
                    <h3 className="text-4xl font-bold mb-4">Request More Information</h3>
                    <p className="text-gray-400 max-w-lg mx-auto mb-8">
                        Our team is a dedicated group of creative individuals, specializing in digital
                        solutions and dedicated to providing value support to clients.
                    </p>
                    <button className="bg-yellow-500 text-gray-900 px-8 py-3 text-sm font-bold rounded-md hover:bg-yellow-400 transition duration-300">
                        Talk To Us
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default AboutPage;