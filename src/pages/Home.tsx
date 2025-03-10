import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Award,
  MapPin,
  HomeIcon,
  Bell,
  MessageCircle,
  Search,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Reusable FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center bg-gradient-to-r from-red-200 to-orange-200 rounded-md text-center p-6 transition-all duration-300 hover:shadow-md hover:scale-105 min-h-[250px]"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5 text-red-600 mb-3 lg:w-12 lg:h-12" />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-700 text-center lg:text-base">
      {description}
    </p>
  </motion.div>
);

// Reusable StepCard Component
const StepCard = ({ index, title, description }) => (
  <motion.div
    className="text-center bg-white p-6 shadow-lg rounded-lg min-h-[250px]"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
      {index + 1}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Make an Impact",
      description:
        "Contribute to meaningful causes and create positive change in your community",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Connect with like-minded volunteers and grow together",
    },
    {
      icon: Award,
      title: "Earn Recognition",
      description:
        "Get rewarded for your contributions with badges and certificates",
    },
    {
      icon: MapPin,
      title: "Local Focus",
      description:
        "Find opportunities near you in major cities across Sri Lanka",
    },
  ];

  const volunteerSteps = [
    {
      title: "Create Your Profile",
      description:
        "Sign up as a volunteer and share your interests and skills.",
    },
    {
      title: "Find Opportunities",
      description:
        "Browse through various events and choose the ones that match your passion.",
    },
    {
      title: "Start Volunteering",
      description:
        "Join events, contribute, and track your impact with XP points.",
    },
  ];

  const organizationSteps = [
    {
      title: "Register Your Organization",
      description: "Sign up as an organization and create your profile.",
    },
    {
      title: "Post Volunteer Opportunities",
      description: "List your events and attract passionate volunteers.",
    },
    {
      title: "Manage and Track Volunteers",
      description:
        "Use automated attendance and engagement analytics to oversee events.",
    },
  ];

  const [activeTab, setActiveTab] = useState("volunteer");

  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col lg:flex-row items-center px-6 lg:px-10 space-y-8 min-h-screen bg-red-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col justify-center max-w-2xl space-y-6">
          <span className="flex flex-row gap-2 text-lg font-medium text-orange-600">
            <Heart className="w-6 h-6 text-orange-600" />
            Welcome to PledgeIt
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Empowering Change
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
              Across Sri Lanka
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Join a vibrant community of change-makers transforming lives in
            Colombo, Galle, Kandy, and beyond. Your journey to making a
            difference starts here.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/about"
              className="px-6 py-3 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:opacity-80"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="hidden lg:block mx-10 w-1/2 h-full">
          <div className="relative">
            <div className="bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
                alt="Volunteers in Sri Lanka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What is <span className="text-orange-600">PledgeIt</span>?
          </h2>
          <p className="text-gray-600 text-md lg:text-xl font-semibold mb-6">
            "We aim to bridge the gap in accessible volunteer opportunities,
            making it easy for individuals to connect with causes. We are working
            towards a cleaner and healthier society and gaining recognition for
            their efforts."
          </p>
          <p className="text-gray-600 text-lg lg:text-xl mb-8">
            From education initiatives in rural villages to environmental
            conservation in urban centers, our platform facilitates impactful
            volunteer experiences that transform both communities and the
            volunteers themselves.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h1 className="text-3xl text-center text-black font-bold py-10">
          Why Choose Us?
        </h1>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div
        className="bg-red-50 flex flex-col lg:flex-row items-center gap-10 p-10 rounded-3xl shadow-lg mt-20 mx-6 lg:mx-10"
      >
        <div className="flex flex-col max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Serving <span className="text-orange-600">Communities</span> Across
            Sri Lanka
          </h2>
          <p className="text-xl text-center">
            We focus on 3 main cities in Sri Lanka
          </p>
          <p className="text-gray-600 text-lg mt-4 text-justify p-4">
          Join us in driving meaningful change across Colombo, Galle, and Kandy—three vibrant cities at the heart of Sri Lanka's social transformation. Colombo, the bustling capital, is a hub for innovation and outreach initiatives. Galle, with its rich history and coastal charm, thrives on environmental conservation and community-driven projects. Kandy, known for its cultural heritage, is home to numerous educational and social welfare programs. No matter your passion, there’s a place for you to contribute and make a lasting difference in these dynamic communities!
          </p>
        </div>
        <div>
          <img
            src="map.png"
            alt="Map"
            className="w-[80%] h-auto max-w-[400px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Features We Offer Section */}
      <div
        className="mt-10"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-black text-center mb-6 lg:text-4xl">
            Features We Offer
          </h1>

          <div className="md:flex flex-col lg:flex-row items-center justify-center">
            {/* Right Content - Image */}
            <div className="lg:flex flex-col mt-10 w-[10rem] md:w-[20rem] lg:w-[30rem] lg:pl-30 lg:mt-15">
              <img src="Features.png" alt="Features" className="w-full" />
            </div>

            {/* Left Content - Timeline */}
            <div className="w-[20rem] lg:w-[32rem] lg:pl-20">
              <div className="border-l-4 border-orange-600 pl-6 space-y-8 m-10 lg:mt-0">
                {/* XP Points & Leaderboard */}
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-500 text-white rounded-full">
                      <HomeIcon className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      XP Points & Leaderboard
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Gain XP points for every event you participate in! Level up,
                    unlock rewards, and see how you rank among fellow volunteers on
                    our interactive leaderboard.
                  </p>
                </div>

                {/* Automated Attendance */}
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-500 text-white rounded-full">
                      <Bell className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      Automated Attendance for Organizations
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Say goodbye to manual check-ins! Our automated system ensures
                    accurate attendance tracking, making event management seamless
                    for organizers.
                  </p>
                </div>

                {/* Instant Chat Support */}
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-500 text-white rounded-full">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      Instant Chat Support
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Need help? Our chatbot is available 24/7 to assist you with
                    event details, volunteer guidelines, and more.
                  </p>
                </div>

                {/* Easy Searching with Filters */}
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-500 text-white rounded-full">
                      <Search className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      Easy Searching with Filters
                    </p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Find the perfect volunteering opportunity effortlessly! Use our
                    advanced filter options to sort by location, type of event, or
                    causes that matter to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <motion.div
        id="how-it-works"
        className="py-20 bg-red-100 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            How PledgeIt Works
          </h2>
          <div className="flex justify-center gap-8 mb-10">
            <button
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === "volunteer"
                  ? "bg-red-600 text-white"
                  : "bg-red-300 text-gray-700"
              }`}
              onClick={() => setActiveTab("volunteer")}
            >
              For Volunteers
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === "organization"
                  ? "bg-red-600 text-white"
                  : "bg-red-300 text-gray-700"
              }`}
              onClick={() => setActiveTab("organization")}
            >
              For Organizations
            </button>
          </div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {(activeTab === "volunteer" ? volunteerSteps : organizationSteps).map(
              (step, index) => (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <StepCard index={index} {...step} />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;