import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import { Heart, Users, UserPlus, Award, Handshake, Flag, Globe, Check, Linkedin, Link, Mail, Instagram } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

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
              <p className="text-lg text-gray-700 leading-relaxed">
                In Sri Lanka, volunteerism plays a vital role in supporting communities through initiatives like
                <span className="font-semibold"> environmental conservation, beach clean-ups, and disaster response. </span>
                However, traditional volunteer management systems are outdated, making coordination inefficient.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                <span className="font-semibold text-primary">PledgeIt</span> transforms the way volunteering works by
                providing an intuitive, centralized platform that connects passionate individuals with meaningful
                opportunities. Our goal is to make volunteering not only accessible but also engaging, rewarding, and impactful.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Whether you are an individual looking to contribute or an organization seeking volunteers,
                <span className="font-semibold text-secondary"> PledgeIt ensures seamless collaboration, efficient management, and real impact.</span>
              </p>
            </div>
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
      <Footer/>
    </div>
  );
};

const teamMembers = [
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
    image: "/Aruniga.jpg",
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

const faq = [
  {
    question: "How do I sign up for PledgeIt?",
    answer: "You can sign up by visiting our platform and creating a profile as a volunteer or an organization. It's quick and easy!"
  },
  {
    question: "Is PledgeIt free to use?",
    answer: "Yes, PledgeIt is completely free for volunteers. Organizations may have premium features available at an additional cost."
  },
  {
    question: "How can I find volunteer opportunities?",
    answer: "Simply browse through our platform and filter opportunities based on your interests, skills, and location."
  }
];


export default Index;