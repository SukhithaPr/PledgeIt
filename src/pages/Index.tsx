
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Heart, Users, UserPlus, Award, Handshake, Flag, Globe, Check } from 'lucide-react';

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-secondary mb-6 animate-fade-up">
              Make a Difference in Your Community
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Connect with meaningful volunteer opportunities and create positive change. Join thousands making an impact every day.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-lg transition-all duration-300 animate-scale-up" style={{ animationDelay: '0.4s' }}>
              Start Volunteering
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-secondary mb-16">
            Why Choose PledgeIt
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="animate-on-scroll opacity-0 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary-light bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center" ref={statsRef}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-secondary mb-16">
            How PledgeIt Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="animate-on-scroll opacity-0 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-secondary mb-16">
            What Our Volunteers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="animate-on-scroll opacity-0 bg-white p-6 rounded-lg shadow-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of volunteers creating positive change in their communities. Start your journey today.
          </p>
          <button className="bg-white text-primary hover:bg-accent-dark px-8 py-3 rounded-full text-lg transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Heart,
    title: "Meaningful Impact",
    description: "Connect with causes that matter to you and make a real difference in your community."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Join a network of passionate volunteers and create lasting connections."
  },
  {
    icon: Globe,
    title: "Local & Global",
    description: "Find opportunities both in your neighborhood and around the world."
  }
];

const stats = [
  { value: "10K+", label: "Active Volunteers" },
  { value: "500+", label: "Partner Organizations" },
  { value: "100K", label: "Hours Pledged" },
  { value: "50+", label: "Cities Covered" }
];

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and tell us about your interests and skills to find the perfect opportunities."
  },
  {
    title: "Browse Opportunities",
    description: "Explore curated volunteer positions that match your preferences and schedule."
  },
  {
    title: "Make an Impact",
    description: "Connect with organizations and start making a difference in your community."
  }
];

const testimonials = [
  {
    text: "PledgeIt made it incredibly easy to find meaningful volunteer opportunities in my area. I've met amazing people and made a real difference.",
    name: "Sarah Johnson",
    role: "Regular Volunteer"
  },
  {
    text: "As a busy professional, I appreciate how PledgeIt helps me find flexible volunteering opportunities that fit my schedule.",
    name: "Michael Chen",
    role: "Weekend Volunteer"
  },
  {
    text: "The platform's user-friendly interface and community focus have made volunteering a regular part of my life.",
    name: "Emma Rodriguez",
    role: "Student Volunteer"
  }
];

export default Index;
