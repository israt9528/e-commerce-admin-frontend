
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
import MinimalLight from "../PageComponents/Navigation/MinimalLight";
import HeroCentered from "../PageComponents/HeroSection/SplitLayout";
import DarkSolid from "../PageComponents/Navigation/DarkSolid";
import Glassmorphism from "../PageComponents/Navigation/Glassmorphism";
import CenteredLogo from "../PageComponents/Navigation/CenteredLogo";
import CenteredClean from "../PageComponents/HeroSection/CenteredClean";
import SplitLayout from "../PageComponents/HeroSection/SplitLayout";
import MinimalWhite from "../PageComponents/HeroSection/MinimalWhite";
import WithStats from "../PageComponents/HeroSection/WithStats";
import ThreeColumnGrid from "../PageComponents/Features/ThreeColumnGrid";
import ChecklistStyle from "../PageComponents/Features/ChecklistStyle";
import StepbyStep from "../PageComponents/Features/StepbyStep";
import CardRaw from "../PageComponents/Testimonials/CardRaw";
import QuoteSlider from "../PageComponents/Testimonials/QuoteSlider";
import SocialProof from "../PageComponents/Testimonials/SocialProof";
import FullBanner from "../PageComponents/CalltoAction/FullBanner";
import SimpleCentered from "../PageComponents/CalltoAction/SimpleCentered";
import NewsletterSignup from "../PageComponents/CalltoAction/NewsletterSignup";
import SimpleDark from "../PageComponents/Footer/SimpleDark";
import FourColumn from "../PageComponents/Footer/FourColumn";
import ModernWithLogo from "../PageComponents/Footer/ModernWithLogo";

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
        Component: MinimalLight,
      },
      {
        id: "navbar-dark",
        name: "Dark Solid",
        description: "Elegant dark theme",
        tags: ["Dark", "Elegant"],
        Component: DarkSolid
      },
      {
        id: "navbar-glassmorphism",
        name: "Glassmorphism",
        description: "Modern glass effect",
        tags: ["Glass", "Modern"],
        Component: Glassmorphism
      },
      {
        id: "navbar-centered",
        name: "Centered Logo",
        description: "Centered navigation layout",
        tags: ["Centered", "Balanced"],
        Component: CenteredLogo
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
        Component: CenteredClean
      },
      {
        id: "hero-split",
        name: "Split Layout",
        description: "Content and visual split",
        tags: ["Split", "Visual"],
        Component: SplitLayout
      },
      {
        id: "hero-minimal",
        name: "Minimal White",
        description: "Clean minimal design",
        tags: ["Minimal", "White"],
        Component: MinimalWhite
      },
      {
        id: "hero-stats",
        name: "With Stats",
        description: "Hero with statistics",
        tags: ["Stats", "Data"],
        Component: WithStats
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
        Component: ThreeColumnGrid
      },
      {
        id: "features-list",
        name: "Checklist Style",
        description: "Feature checklist",
        tags: ["List", "Checklist"],
        Component: ChecklistStyle
      },
      {
        id: "features-steps",
        name: "Step-by-Step",
        description: "Process flow steps",
        tags: ["Steps", "Process"],
        Component: StepbyStep
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
        Component: CardRaw
      },
      {
        id: "testimonials-slider",
        name: "Quote Slider",
        description: "Rotating testimonials",
        tags: ["Slider", "Quotes"],
        Component: QuoteSlider
      },
      {
        id: "testimonials-social",
        name: "Social Proof",
        description: "Social media testimonials",
        tags: ["Social", "Proof"],
        Component: SocialProof
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
        Component: FullBanner
      },
      {
        id: "cta-simple",
        name: "Simple Centered",
        description: "Minimal CTA",
        tags: ["Simple", "Clean"],
        Component: SimpleCentered
      },
      {
        id: "cta-newsletter",
        name: "Newsletter Signup",
        description: "Email collection CTA",
        tags: ["Newsletter", "Form"],
        Component: NewsletterSignup
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
        Component: SimpleDark
      },
      {
        id: "footer-columns",
        name: "4-Column",
        description: "Detailed footer",
        tags: ["Columns", "Detailed"],
        Component: FourColumn
      },
      {
        id: "footer-modern",
        name: "Modern with Logo",
        description: "Contemporary footer design",
        tags: ["Modern", "Logo"],
        Component: ModernWithLogo
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
