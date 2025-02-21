
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
              Whether you're looking to volunteer or an organization seeking help, PledgeIt brings together passionate people and impactful causes.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="Team.jpg"
                alt="PledgeIt Team"
                className="rounded-lg shadow-lg w-full max-w-lg md:max-w-xl" // Increased image size
              />
            </div>
            <div className="md:pr-8">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-12">
                About Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-align: justify">
                In Sri Lanka, volunteerism plays a vital role in supporting communities through initiatives like
                <span className="font-semibold"> environmental conservation, beach clean-ups, and disaster response. </span>
                However, traditional volunteer management systems are outdated, making coordination inefficient.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-align: justify">
                <span className="font-semibold text-primary">PledgeIt</span> transforms the way volunteering works by
                providing an intuitive, centralized platform that connects passionate individuals with meaningful
                opportunities. Our goal is to make volunteering not only accessible but also engaging, rewarding, and impactful.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-align: justify">
                Whether you are an individual looking to contribute or an organization seeking volunteers,
                <span className="font-semibold text-secondary"> PledgeIt ensures seamless collaboration, efficient management, and real impact.</span>
              </p>
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
      <section id="how-it-works" className="py-20 bg-accent">
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
    name: "Sukhitha Saparamadu",
    role: "Back-End Developer",
    description: "Backend engineer passionate about building scalable and efficient systems.",
    image: "/Sukhitha.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Dulansa Navindee",
    role: "Front-End Developer",
    description: "Creative front-end developer focused on crafting intuitive and engaging user interfaces.",
    image: "/Dulansa.jpg",
    linkedin: "https://www.linkedin.com/in/dulansanavindee/"
  },
  {
    name: "Anjula Samaranayake",
    role: "Machine Learning Engineer",
    description: "AI enthusiast exploring data-driven solutions to enhance volunteer experiences.",
    image: "/Anjula.jpg",
    linkedin: "https://www.linkedin.com/in/anjula-samaranayake/"
  },
  {
    name: "Aruniga Gnanasegaran",
    role: "Back-End Developer",
    description: "Expert in scaling volunteer initiatives and optimizing organizational processes.",
    image: "/Default.jpg",
    linkedin: "https://www.linkedin.com/in/aruniga-gnanasegaran/"
  },
  {
    name: "Lochana Methsiluni",
    role: "Front-End Developer",
    description: "Experienced developer dedicated to building accessible and user-friendly platforms.",
    image: "/Lochana.jpg",
    linkedin: "https://www.linkedin.com/in/lochana-methsiluni/"
  },
  {
    name: "Mishal Ayubkhan",
    role: "Machine Learning Engineer",
    description: "Passionate about leveraging AI to drive innovation and efficiency in volunteering.",
    image: "/Mishal.jpg",
    linkedin: "https://www.linkedin.com/in/mishalayubkhan102/"
  }
];

export default Index;
