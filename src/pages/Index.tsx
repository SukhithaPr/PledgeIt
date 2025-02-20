
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Heart, Users, UserPlus, Award, Handshake, Flag, Globe, Check, Linkedin } from 'lucide-react';

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
              Connect Volunteers with Meaningful Opportunities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Whether you're looking to volunteer or an organization seeking help, PledgeIt brings together passionate people and impactful causes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-lg transition-all duration-300">
                Join as Volunteer
              </button>
              <button className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-full text-lg transition-all duration-300">
                Register Organization
              </button>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-secondary mb-6">
            How PledgeIt Works
          </h2>
          <div className="flex justify-center gap-8 mb-16">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors duration-300">
              For Volunteers
            </button>
            <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full transition-colors duration-300">
              For Organizations
            </button>
          </div>
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-secondary mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Dedicated professionals committed to making volunteering accessible and impactful for everyone.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="animate-on-scroll opacity-0 bg-accent rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover border-4 border-primary-light"
                  />
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-primary hover:bg-primary-hover text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
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
            Join PledgeIt today - whether you're looking to volunteer or an organization seeking support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-accent-dark px-8 py-3 rounded-full text-lg transition-all duration-300">
              Start Volunteering
            </button>
            <button className="bg-secondary text-white hover:bg-secondary-hover px-8 py-3 rounded-full text-lg transition-all duration-300">
              Post Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: UserPlus,
    title: "Easy Registration",
    description: "Simple sign-up process for both volunteers and organizations to join our community."
  },
  {
    icon: Handshake,
    title: "Perfect Matching",
    description: "Organizations post opportunities while volunteers find the perfect match for their skills and interests."
  },
  {
    icon: Globe,
    title: "Widespread Impact",
    description: "Connect with local and global opportunities, making a difference wherever you choose."
  }
];

const stats = [
  { value: "10K+", label: "Active Volunteers" },
  { value: "500+", label: "Partner Organizations" },
  { value: "1000+", label: "Active Opportunities" },
  { value: "50+", label: "Cities Covered" }
];

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up as a volunteer or organization. Tell us about your interests or the opportunities you offer."
  },
  {
    title: "Connect & Engage",
    description: "Organizations post opportunities while volunteers browse and find their perfect match."
  },
  {
    title: "Make an Impact",
    description: "Start volunteering or receive help from passionate volunteers in your community."
  }
];

const teamMembers = [
  {
    name: "Sarah Williams",
    role: "Founder & CEO",
    description: "Former non-profit executive with 15 years of experience in community organizing and social impact.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Michael Chang",
    role: "Head of Partnerships",
    description: "Strategic leader focusing on building meaningful relationships with organizations worldwide.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    description: "Passionate about creating engaging volunteer experiences and fostering community connections.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Kumar",
    role: "Tech Lead",
    description: "Experienced developer dedicated to building accessible and user-friendly platforms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Lisa Chen",
    role: "Operations Director",
    description: "Expert in scaling volunteer initiatives and optimizing organizational processes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256",
    linkedin: "https://linkedin.com"
  },
  {
    name: "James Wilson",
    role: "Marketing Strategist",
    description: "Creative professional focused on spreading our mission and impact story.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256",
    linkedin: "https://linkedin.com"
  }
];

export default Index;
