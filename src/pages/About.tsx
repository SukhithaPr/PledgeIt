
import Navigation from '@/components/Navigation';
import { Award, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-secondary mb-6 text-center">
            About PledgeIt
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            PledgeIt is a platform dedicated to connecting passionate volunteers with meaningful opportunities. Our mission is to make volunteering accessible, efficient, and impactful for both individuals and organizations.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-secondary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-gray-600">
                We believe in the power of community service to create lasting positive change in society.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in connecting volunteers with opportunities that match their skills and passions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                We aim to facilitate volunteering opportunities across the globe, breaking down geographical barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              To create a world where volunteering is accessible to everyone, and where organizations can easily find the support they need to make a difference.
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
        </div>
      </section>
    </div>
  );
};

export default About;
