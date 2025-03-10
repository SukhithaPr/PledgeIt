import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div>
            {/* Footer / CTA Section */}
            <footer className="py-5 bg-primary text-white mt-10">
                <div className="container mx-auto px-6 text-center">
                    {/* CTA Heading */}
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-white text-opacity-90 mb-8 max-w-xl mx-auto">
                        Join our platform to discover meaningful volunteer opportunities or connect with dedicated volunteers for your cause.
                    </p>

                    {/* Contact Info */}
                    <p className="mb-4 text-lg">Have questions? Reach out to us at:</p>
                    <a
                        href="mailto:pledgeit6@gmail.com"
                        className="text-white font-medium flex justify-center items-center gap-2 hover:text-gray-300 transition-all duration-300"
                    >
                        <Mail size={20} /> pledgeit6@gmail.com
                    </a>

                    {/* Social Media Links */}
                    <div className="flex justify-center items-center gap-6 mt-6">
                        <a
                            href="https://www.instagram.com/pledge_it"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-all duration-300"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/pledgeit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-all duration-300"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white border-opacity-20 mt-12 pt-6 text-center text-sm text-white text-opacity-80">
                    © {new Date().getFullYear()} PledgeIt. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
export default Footer;