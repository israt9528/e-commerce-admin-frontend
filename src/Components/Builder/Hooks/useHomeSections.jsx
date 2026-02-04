import {
  Menu,
  Sparkles,
  Grid3x3,
  MessageCircle,
  Target,
  Minus,
  Shield,
  Zap,
  Globe,
  Users,
  Star,
  Award,
  TrendingUp,
  Heart,
  Clock,
  Check,
  CheckSquare,
  Edit,
  Briefcase,
  Code,
  BarChart3,
  Mail,
  Send,
  Bell,
  User,
  Quote,
  Crown,
  Play,
  Rocket,
  Twitter,
  Linkedin,
  Facebook,
  Github,
} from "lucide-react";

export const useHomeSections = {
  navbar: {
    id: "navbar",
    label: "Navbar",
    category: "Navigation",
    icon: <Menu className="w-4 h-4" />,
    allowMultiple: false, // Set to true to allow multiple instances
    variations: [
      {
        id: "navbar-minimal",
        name: "Minimal Light",
        description: "Clean light navigation",
        tags: ["Light", "Minimal"],
        Component: () => (
          <nav className="bg-white border-b border-gray-200 py-3 px-8 flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-500" />
              <span className="font-bold text-lg text-gray-900">Brand</span>
            </div>
            <div className="flex gap-7">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <span
                  key={l}
                  className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-colors">
                  {l}
                </span>
              ))}
            </div>
            <button className="bg-gray-900 text-white border-none rounded px-4 py-2 text-sm cursor-pointer hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </nav>
        ),
      },
      {
        id: "navbar-dark",
        name: "Dark Solid",
        description: "Elegant dark theme",
        tags: ["Dark", "Elegant"],
        Component: () => (
          <nav className="bg-gray-900 py-3.5 px-8 flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="font-bold text-lg text-white">SecureBrand</span>
            </div>
            <div className="flex gap-7">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <span
                  key={l}
                  className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">
                  {l}
                </span>
              ))}
            </div>
            <button className="bg-red-500 text-white border-none rounded px-4 py-2 text-sm cursor-pointer hover:bg-red-600 transition-colors">
              Sign Up
            </button>
          </nav>
        ),
      },
      {
        id: "navbar-glassmorphism",
        name: "Glassmorphism",
        description: "Modern glass effect",
        tags: ["Glass", "Modern"],
        Component: () => (
          <nav className="bg-gradient-to-r from-teal-700 to-emerald-800 backdrop-blur-md border border-teal-500 py-3.5 px-8 flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-200" />
              <span className="font-bold text-lg text-teal-50">
                GradientBrand
              </span>
            </div>
            <div className="flex gap-7">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <span
                  key={l}
                  className="text-sm text-teal-300 cursor-pointer hover:text-teal-100 transition-colors">
                  {l}
                </span>
              ))}
            </div>
            <button className="bg-teal-600 text-teal-50 border border-teal-400 rounded px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 transition-colors">
              Login
            </button>
          </nav>
        ),
      },
      {
        id: "navbar-centered",
        name: "Centered Logo",
        description: "Centered navigation layout",
        tags: ["Centered", "Balanced"],
        Component: () => (
          <nav className="bg-white border-b border-gray-200 py-4 px-8 flex flex-col items-center font-sans">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-amber-500" />
              <span className="font-bold text-xl text-gray-900">
                PremiumBrand
              </span>
            </div>
            <div className="flex gap-8">
              {["Home", "Features", "Pricing", "Blog", "Contact"].map((l) => (
                <span
                  key={l}
                  className="text-sm text-gray-600 cursor-pointer hover:text-teal-500 transition-colors">
                  {l}
                </span>
              ))}
            </div>
          </nav>
        ),
      },
    ],
  },
  hero: {
    id: "hero",
    label: "Hero Section",
    category: "Content",
    icon: <Sparkles className="w-4 h-4" />,
    allowMultiple: true, // Allow multiple hero sections
    variations: [
      {
        id: "hero-centered",
        name: "Centered Clean",
        description: "Simple centered hero",
        tags: ["Centered", "Clean"],
        Component: () => (
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 py-24 px-8 text-center font-sans">
            <Zap className="w-12 h-12 text-white mx-auto mb-4" />
            <h1 className="text-white text-4xl font-bold mb-4">
              Build Something Amazing
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mx-auto mb-8">
              The fastest way to launch your next big idea with beautiful,
              modern pages.
            </p>
            <button className="bg-white text-purple-600 border-none rounded-lg py-3.5 px-9 text-base font-semibold cursor-pointer hover:shadow-lg transition-all">
              Get Started Free
            </button>
          </div>
        ),
      },
      {
        id: "hero-split",
        name: "Split Layout",
        description: "Content and visual split",
        tags: ["Split", "Visual"],
        Component: () => (
          <div className="flex bg-gray-900 font-sans min-h-[400px]">
            <div className="flex-1 py-16 px-12 flex flex-col justify-center">
              <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
              <h1 className="text-gray-100 text-3xl font-bold mb-3.5 leading-tight">
                The Future
                <br />
                Starts Here
              </h1>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                Innovative solutions for modern teams that need speed and
                reliability.
              </p>
              <div className="flex gap-3">
                <button className="bg-cyan-400 text-gray-900 border-none rounded-lg py-3 px-7 text-sm font-semibold cursor-pointer hover:bg-cyan-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Learn More
                  </div>
                </button>
                <button className="bg-transparent text-gray-100 border border-gray-700 rounded-lg py-3 px-7 text-sm cursor-pointer hover:border-gray-600 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
              <div className="relative">
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 opacity-60" />
                <Globe className="w-16 h-16 text-white absolute inset-0 m-auto" />
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "hero-minimal",
        name: "Minimal White",
        description: "Clean minimal design",
        tags: ["Minimal", "White"],
        Component: () => (
          <div className="bg-gradient-to-br from-gray-50 to-white py-24 px-8 text-center font-sans border-b border-gray-200">
            <Target className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h1 className="text-gray-900 text-5xl font-extrabold mb-3">
              Hello, World.
            </h1>
            <p className="text-gray-500 text-base mx-auto mb-8 max-w-md">
              Simple. Clean. Effective. The page you have been waiting to build.
            </p>
            <button className="bg-gray-900 text-white border-none rounded-lg py-3.5 px-10 text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>
        ),
      },
      {
        id: "hero-stats",
        name: "With Stats",
        description: "Hero with statistics",
        tags: ["Stats", "Data"],
        Component: () => (
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 px-8 font-sans">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-white text-4xl font-bold mb-4">
                    Data-Driven Results
                  </h1>
                  <p className="text-white/80 text-lg mb-8 max-w-lg">
                    Analytics platform that delivers real-time insights for
                    growing businesses.
                  </p>
                  <button className="bg-white text-blue-600 border-none rounded-lg py-3.5 px-9 text-base font-semibold cursor-pointer hover:shadow-lg transition-all">
                    Start Free Trial
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {[
                    {
                      label: "Active Users",
                      value: "10K+",
                      icon: <Users className="w-5 h-5" />,
                    },
                    {
                      label: "Growth",
                      value: "48%",
                      icon: <TrendingUp className="w-5 h-5" />,
                    },
                    {
                      label: "Uptime",
                      value: "99.9%",
                      icon: <Clock className="w-5 h-5" />,
                    },
                    {
                      label: "Satisfaction",
                      value: "4.9",
                      icon: <Star className="w-5 h-5" />,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-2 text-white/80 mb-1">
                        {stat.icon}
                        <span className="text-xs">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  features: {
    id: "features",
    label: "Features",
    category: "Content",
    icon: <Grid3x3 className="w-4 h-4" />,
    allowMultiple: true,
    variations: [
      {
        id: "features-grid",
        name: "3-Column Grid",
        description: "Icon grid layout",
        tags: ["Grid", "Icons"],
        Component: () => {
          const items = [
            {
              title: "Fast",
              desc: "Lightning speed built in.",
              icon: <Zap className="w-6 h-6 text-amber-500" />,
            },
            {
              title: "Secure",
              desc: "Enterprise-grade safety.",
              icon: <Shield className="w-6 h-6 text-green-500" />,
            },
            {
              title: "Scalable",
              desc: "Grows with your needs.",
              icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Global",
              desc: "Worldwide coverage.",
              icon: <Globe className="w-6 h-6 text-purple-500" />,
            },
          ];
          return (
            <div className="bg-white py-16 px-8 font-sans">
              <div className="text-center mb-12">
                <Award className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h2 className="text-gray-900 text-3xl font-bold mb-3">
                  Why Choose Us
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Comprehensive features designed for modern businesses
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                {items.map((i) => (
                  <div
                    key={i.title}
                    className="text-left p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-300 transition-colors group">
                    <div className="mb-4">{i.icon}</div>
                    <h3 className="text-gray-800 text-lg font-semibold mb-2">
                      {i.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        },
      },
      {
        id: "features-list",
        name: "Checklist Style",
        description: "Feature checklist",
        tags: ["List", "Checklist"],
        Component: () => {
          const items = [
            "Unlimited projects & pages",
            "Real-time collaboration tools",
            "Custom domain support",
            "Advanced analytics dashboard",
            "24/7 priority support",
            "Monthly performance reports",
          ];
          return (
            <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-8 font-sans">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <CheckSquare className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-gray-100 text-2xl font-bold">
                    Everything You Need
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                  A complete toolkit in one place for your success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3.5 py-3.5">
                      <Check className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        },
      },
      {
        id: "features-steps",
        name: "Step-by-Step",
        description: "Process flow steps",
        tags: ["Steps", "Process"],
        Component: () => (
          <div className="bg-white py-16 px-8 font-sans border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center text-gray-900 text-2xl font-bold mb-12">
                How It Works
              </h2>
              <div className="flex justify-between relative">
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
                {[
                  {
                    step: 1,
                    title: "Sign Up",
                    desc: "Create your account",
                    icon: <User className="w-6 h-6" />,
                  },
                  {
                    step: 2,
                    title: "Customize",
                    desc: "Design your pages",
                    icon: <Edit className="w-6 h-6" />,
                  },
                  {
                    step: 3,
                    title: "Launch",
                    desc: "Go live instantly",
                    icon: <Rocket className="w-6 h-6" />,
                  },
                  {
                    step: 4,
                    title: "Grow",
                    desc: "Scale your business",
                    icon: <TrendingUp className="w-6 h-6" />,
                  },
                ].map((step) => (
                  <div
                    key={step.step}
                    className="flex flex-col items-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs text-center">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  testimonials: {
    id: "testimonials",
    label: "Testimonials",
    category: "Content",
    icon: <MessageCircle className="w-4 h-4" />,
    allowMultiple: true,
    variations: [
      {
        id: "testimonials-cards",
        name: "Card Row",
        description: "Testimonial cards",
        tags: ["Cards", "Reviews"],
        Component: () => {
          const items = [
            {
              name: "Sarah K.",
              role: "Product Manager",
              company: "TechCorp",
              text: "Absolutely game-changing. Our launch time dropped by 60%.",
              rating: 5,
              icon: <Briefcase className="w-4 h-4" />,
            },
            {
              name: "James L.",
              role: "CTO",
              company: "StartupXYZ",
              text: "The cleanest builder I've ever used. No bloat, just results.",
              rating: 5,
              icon: <Code className="w-4 h-4" />,
            },
            {
              name: "Maria S.",
              role: "Marketing Director",
              company: "BrandCo",
              text: "Our conversion rates improved dramatically. Highly recommended!",
              rating: 5,
              icon: <BarChart3 className="w-4 h-4" />,
            },
          ];
          return (
            <div className="bg-gray-50 py-16 px-8 font-sans">
              <div className="text-center mb-12">
                <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h2 className="text-gray-900 text-2xl font-bold mb-3">
                  What People Say
                </h2>
                <p className="text-gray-500 text-base max-w-lg mx-auto">
                  Trusted by thousands of teams worldwide
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                {items.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-6">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-800 font-semibold text-sm">
                            {t.name}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400">
                            {t.icon}
                            <span className="text-xs">{t.role}</span>
                          </div>
                        </div>
                        <span className="text-gray-400 text-xs">
                          {t.company}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        },
      },
      {
        id: "testimonials-slider",
        name: "Quote Slider",
        description: "Rotating testimonials",
        tags: ["Slider", "Quotes"],
        Component: () => (
          <div className="bg-gradient-to-br from-gray-900 to-black py-20 px-8 font-sans">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-12 h-12 text-gray-400 mx-auto mb-8" />
              <h2 className="text-white text-2xl font-bold mb-6 italic">
                This platform transformed how we build products. The speed and
                quality are unmatched.
              </h2>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                <div>
                  <div className="text-white font-semibold">Alex Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, InnovateCo</div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-white" : "bg-gray-700"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "testimonials-social",
        name: "Social Proof",
        description: "Social media testimonials",
        tags: ["Social", "Proof"],
        Component: () => (
          <div className="bg-white py-16 px-8 font-sans">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-gray-900 text-2xl font-bold mb-2">
                    Loved by the Community
                  </h2>
                  <p className="text-gray-500">Real feedback from real users</p>
                </div>
                <div className="flex items-center gap-4">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <Facebook className="w-5 h-5 text-blue-800" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    platform: "Twitter",
                    handle: "@designer",
                    text: "Best tool for rapid prototyping!",
                    likes: "2.4K",
                  },
                  {
                    platform: "LinkedIn",
                    handle: "Product Lead",
                    text: "Our team's productivity doubled",
                    likes: "856",
                  },
                ].map((item) => (
                  <div
                    key={item.platform}
                    className="border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {item.platform}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.handle}
                          </div>
                        </div>
                      </div>
                      <Heart className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.text}</p>
                    <div className="text-xs text-gray-400">
                      {item.likes} likes
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  cta: {
    id: "cta",
    label: "Call to Action",
    category: "Content",
    icon: <Target className="w-4 h-4" />,
    allowMultiple: true,
    variations: [
      {
        id: "cta-banner",
        name: "Full Banner",
        description: "Full-width CTA",
        tags: ["Banner", "Wide"],
        Component: () => (
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 py-16 px-8 text-center font-sans">
            <div className="max-w-3xl mx-auto">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-white text-3xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using our platform to build
                faster and smarter.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-cyan-400 text-gray-900 border-none rounded-lg py-3.5 px-10 text-base font-bold cursor-pointer hover:bg-cyan-300 transition-colors">
                  Start Free Trial
                </button>
                <button className="bg-transparent text-white border border-gray-600 rounded-lg py-3.5 px-10 text-base cursor-pointer hover:border-gray-500 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "cta-simple",
        name: "Simple Centered",
        description: "Minimal CTA",
        tags: ["Simple", "Clean"],
        Component: () => (
          <div className="bg-white py-16 px-8 text-center font-sans border-t border-gray-200">
            <Mail className="w-12 h-12 text-gray-700 mx-auto mb-6" />
            <h2 className="text-gray-900 text-2xl font-bold mb-3">
              Let us work together
            </h2>
            <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
              Get in touch and we will create something amazing for your
              business.
            </p>
            <button className="bg-gray-900 text-white border-none rounded-lg py-3 px-10 text-sm font-semibold cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-2">
                Contact Us
                <Send className="w-4 h-4" />
              </div>
            </button>
          </div>
        ),
      },
      {
        id: "cta-newsletter",
        name: "Newsletter Signup",
        description: "Email collection CTA",
        tags: ["Newsletter", "Form"],
        Component: () => (
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 py-16 px-8 text-center font-sans">
            <div className="max-w-xl mx-auto">
              <Bell className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-white text-2xl font-bold mb-3">
                Stay Updated
              </h2>
              <p className="text-white/90 text-base mb-8">
                Subscribe to our newsletter for the latest updates and tips.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
                />
                <button className="bg-white text-purple-600 border-none rounded-lg px-6 py-3 font-semibold cursor-pointer hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-xs mt-4">
                No spam ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  footer: {
    id: "footer",
    label: "Footer",
    category: "Navigation",
    icon: <Minus className="w-4 h-4" />,
    allowMultiple: false,
    variations: [
      {
        id: "footer-simple",
        name: "Simple Dark",
        description: "Minimal footer",
        tags: ["Simple", "Dark"],
        Component: () => (
          <footer className="bg-gray-900 py-8 px-8 text-center font-sans">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span className="text-white font-bold text-lg">Brand</span>
              </div>
              <p className="text-gray-400 text-xs mb-4">
                © 2025 Brand. All rights reserved.
              </p>
              <div className="flex gap-6 justify-center text-gray-500 text-xs">
                <span className="cursor-pointer hover:text-white transition-colors">
                  Privacy
                </span>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Terms
                </span>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Cookies
                </span>
              </div>
            </div>
          </footer>
        ),
      },
      {
        id: "footer-columns",
        name: "4-Column",
        description: "Detailed footer",
        tags: ["Columns", "Detailed"],
        Component: () => (
          <footer className="bg-gray-900 pt-12 px-8 pb-8 font-sans">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 gap-8 mb-12">
                {["Product", "Company", "Resources", "Connect"].map((col) => (
                  <div key={col}>
                    <h4 className="text-gray-100 text-sm font-semibold mb-4 uppercase tracking-wider">
                      {col}
                    </h4>
                    {["Link one", "Link two", "Link three", "Link four"].map(
                      (l) => (
                        <p
                          key={l}
                          className="text-gray-400 text-xs mb-3 cursor-pointer hover:text-white transition-colors">
                          {l}
                        </p>
                      ),
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
                <p className="text-gray-500 text-xs">
                  © 2025 Brand Inc. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Twitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </footer>
        ),
      },
      {
        id: "footer-modern",
        name: "Modern with Logo",
        description: "Contemporary footer design",
        tags: ["Modern", "Logo"],
        Component: () => (
          <footer className="bg-gradient-to-br from-gray-900 to-black py-12 px-8 font-sans">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-6 h-6 text-teal-400" />
                    <span className="text-white font-bold text-xl">
                      GlobalBrand
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Building the future of web development, one component at a
                    time.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-12">
                  {["Solutions", "Support", "Legal"].map((col) => (
                    <div key={col}>
                      <h5 className="text-white text-sm font-semibold mb-4">
                        {col}
                      </h5>
                      {["Pricing", "Documentation", "Contact"].map((link) => (
                        <div
                          key={link}
                          className="text-gray-400 text-sm mb-2 cursor-pointer hover:text-white transition-colors">
                          {link}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
                Designed with ❤️ for developers worldwide
              </div>
            </div>
          </footer>
        ),
      },
    ],
  },
};

// Group sections by category
export const getGroupedSections = () => {
  const grouped = {};
  Object.values(useHomeSections).forEach((section) => {
    const category = section.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(section);
  });
  return grouped;
};

export const HomeOrder = [
  "navbar",
  "hero",
  "features",
  "testimonials",
  "cta",
  "footer",
];
