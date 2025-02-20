
import Navigation from '@/components/Navigation';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-secondary mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Have questions about PledgeIt? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a href="mailto:contact@pledgeit.com" className="text-gray-600 hover:text-primary transition-colors duration-300">
                contact@pledgeit.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-600">
                123 Volunteer Street<br />
                Community City, ST 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform CTA */}
      <section className="py-20 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our platform to discover volunteering opportunities or post your organization's needs.
          </p>
          <a 
            href="https://app.pledgeit.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Visit Our Platform
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
