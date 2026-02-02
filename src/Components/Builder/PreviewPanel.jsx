import React, { useState } from 'react';
import {
  Layout,
  Eye,
  EyeOff,
  Smartphone,
  Monitor,
  Tablet,
  Maximize2,
  Grid,
  Layers,
  Copy,
  Download,
  RefreshCw,
  Code,
  Palette,
  Type,
  Image as ImageIcon,
  Move,
  Trash2,
  Plus,
  Settings,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const PreviewPanel = () => {
  const [previewMode, setPreviewMode] = useState('desktop');
  const [zoom, setZoom] = useState(100);
  const [showGrid, setShowGrid] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const sections = [
    {
      id: 'hero',
      title: 'Hero Section',
      type: 'hero',
      content: {
        title: 'Welcome to Our Platform',
        subtitle: 'Build amazing websites with our drag & drop builder',
        button: 'Get Started'
      },
      styles: {
        background: 'gradient',
        padding: 'large'
      },
      order: 1
    },
    {
      id: 'features',
      title: 'Features',
      type: 'grid',
      content: {
        items: [
          { title: 'Easy to Use', icon: '🚀' },
          { title: 'Responsive', icon: '📱' },
          { title: 'Fast Loading', icon: '⚡' }
        ]
      },
      styles: {
        columns: 3,
        spacing: 'medium'
      },
      order: 2
    },
    {
      id: 'content',
      title: 'Content Block',
      type: 'content',
      content: {
        heading: 'Why Choose Us?',
        text: 'Our platform offers the best tools for creating stunning websites without any coding knowledge.'
      },
      styles: {
        alignment: 'center',
        maxWidth: 'medium'
      },
      order: 3
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      type: 'testimonials',
      content: {
        testimonials: [
          { name: 'John Doe', role: 'Web Developer', text: 'Amazing tool!' },
          { name: 'Jane Smith', role: 'Designer', text: 'Very intuitive' }
        ]
      },
      styles: {
        background: 'light',
        layout: 'carousel'
      },
      order: 4
    },
    {
      id: 'cta',
      title: 'Call to Action',
      type: 'cta',
      content: {
        title: 'Ready to Start?',
        button: 'Join Now'
      },
      styles: {
        background: 'accent',
        rounded: true
      },
      order: 5
    },
    {
      id: 'footer',
      title: 'Footer',
      type: 'footer',
      content: {
        copyright: '© 2024 Your Company. All rights reserved.',
        links: ['Home', 'About', 'Contact', 'Privacy']
      },
      styles: {
        dark: true,
        compact: true
      },
      order: 6
    }
  ];

  const renderSection = (section) => {
    const isActive = activeSection === section.id;

    switch (section.type) {
      case 'hero':
        return (
          <div
            className={`
              relative min-h-[400px] rounded-xl transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              bg-gradient-to-br from-blue-500 to-purple-600
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-4">
                  {section.content.title}
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  {section.content.subtitle}
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                  {section.content.button}
                </button>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Hero
            </div>
          </div>
        );

      case 'features':
        return (
          <div
            className={`
              bg-white p-8 rounded-xl shadow-lg transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
              <p className="text-gray-600 mt-2">Everything you need to succeed</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.content.items.map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Features
            </div>
          </div>
        );

      case 'content':
        return (
          <div
            className={`
              bg-gray-50 p-8 rounded-xl transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {section.content.heading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {section.content.text} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Content
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div
            className={`
              bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.content.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Testimonials
            </div>
          </div>
        );

      case 'cta':
        return (
          <div
            className={`
              bg-gradient-to-r from-green-500 to-emerald-600 p-12 rounded-xl text-center transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {section.content.title}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their online presence.
            </p>
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors">
              {section.content.button}
            </button>
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              CTA
            </div>
          </div>
        );

      case 'footer':
        return (
          <div
            className={`
              bg-gray-900 text-white p-8 rounded-xl transition-all duration-200
              ${isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
            `}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold mb-2">YourBrand</div>
                <p className="text-gray-400">Building the future of web design</p>
              </div>
              <div className="flex space-x-6">
                {section.content.links.map((link, index) => (
                  <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>{section.content.copyright}</p>
            </div>
            <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
              Footer
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getPreviewDimensions = () => {
    switch (previewMode) {
      case 'mobile':
        return { width: '375px', height: '667px', scale: 'scale-75' };
      case 'tablet':
        return { width: '768px', height: '1024px', scale: 'scale-90' };
      case 'desktop':
      default:
        return { width: '100%', maxWidth: '1200px', scale: '' };
    }
  };

  const dimensions = getPreviewDimensions();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Layout className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Page Builder Preview</h1>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Live Preview</span>
              <span>{sections.length} sections</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">


        {/* Main Preview Area */}
        <div className="flex-1 overflow-auto p-4 md:p-4">
          <div className="flex items-center justify-center min-h-full">
            {/* Preview Container */}
            <div
              className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-auto transition-all duration-300"
              style={{
                width: dimensions.width,
                maxWidth: dimensions.maxWidth,
                height: dimensions.height,
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center'
              }}
            >
              {/* Browser Frame */}
              <div className="sticky top-0 z-10 bg-gray-100 border-b border-gray-300 p-3">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                    preview.yoursite.com
                  </div>
                </div>
              </div>

              {/* Page Content */}
              <div className="p-4 space-y-6">
                {showGrid && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="grid grid-cols-12 h-full">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-gray-200/50"></div>
                      ))}
                    </div>
                  </div>
                )}

                {sections
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <div key={section.id} className="relative">
                      {renderSection(section)}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PreviewPanel;