import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: `url('/europeanbirch.com/assets/source-image-01.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            The Established Importer
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
            of European Birch Plywood
          </h2>
          <Link to={createPageUrl('Contact')}>
            <Button 
              className="bg-[#C9A962] hover:bg-[#b8944d] text-white px-8 py-6 text-lg rounded-sm"
            >
              Contact
            </Button>
          </Link>
        </div>
      </section>

      {/* Plywood Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <img 
                src="/europeanbirch.com/assets/source-image-02.png" 
                alt="Plywood Boards" 
                className="w-64 h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Lasting Baltic Birch plywood for Furniture and Flooring
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Known for its amazing strength, longevity, and toughness, European Birch is the top choice for furniture and flooring. RPL International offers a wide range of imported plywood panels and plywood sizes that meet the needs of wood product manufacturers and distributors everywhere. Our selection includes the highest caliber of plywood available on the market today.
              </p>
              <Link to={createPageUrl('Plywood')}>
                <Button className="bg-[#1a1a1a] hover:bg-[#333] text-white px-6 py-2 rounded-sm">
                  Plywood Boards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C9A962] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-lg md:text-xl mb-4">
            Contact RPL International to receive a free quote for your next order of European plywood.
          </p>
          <div className="border-t border-white/40 w-24 mx-auto my-4"></div>
          <a 
            href="tel:+18008456001" 
            className="inline-flex items-center gap-2 text-white text-2xl md:text-3xl font-bold hover:text-white/90 transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call (800) 845-6001
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since 1969, RPL International has been the lead importer and distributor of European Birch plywood products in the United States. What sets us apart is our high level of service when it comes to supplying furniture and flooring grade plywood to manufacturers on time. As members of the International Wood Products Association™, National Wood Flooring Association™, and Forest Stewardship Council® (FSC-C014156), you may rest assured that all our plywood products are certified for durability and reliability. Ask about our FSC certified materials.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            With more than 40 years of experience in the field, our company has built a long-term relationship with manufacturers throughout the United States and Canada. We work to exceed your expectations with superior service whether you are a new or established client.
          </p>
          <Link to={createPageUrl('AboutUs')}>
            <Button variant="outline" className="border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-white px-8 py-2 rounded-sm">
              Learn More About RPL International
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-16 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/europeanbirch.com/assets/source-image-03.png')`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-6">Contact</h2>
              <p className="mb-6 text-gray-300">
                Thank you for your interest. For questions or comments, please use the information listed here. We look forward to hearing from you soon.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <a href="tel:+18008456001" className="text-[#C9A962] hover:underline">(800) 845-6001</a>
                </div>
                
                <div>
                  <p className="font-semibold">Hours of Operation</p>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-300">6:00 a.m. - 5:00 p.m.</p>
                </div>
                
                <div>
                  <p className="font-semibold">Headquarters and West Coast Sales Office:</p>
                  <p className="text-gray-300">1851 Whitney Mesa Drive</p>
                  <p className="text-gray-300">Henderson, NV 89014</p>
                </div>
                
                <div>
                  <p className="font-semibold">East Coast Sales Office:</p>
                  <p className="text-gray-300">20 Central Street, Suite 105</p>
                  <p className="text-gray-300">Salem, MA 01970</p>
                </div>
                
                <p className="italic text-gray-400">Serving Customers Nationwide</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    clientNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white text-sm mb-1">Name</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <span className="text-gray-300 text-xs">First Name*</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <span className="text-gray-300 text-xs">Last Name*</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-white text-sm mb-1">Email*</label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-white text-sm mb-1">Phone Number*</label>
        <input
          type="tel"
          required
          className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-white text-sm mb-1">Comments*</label>
        <textarea
          required
          rows={4}
          className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900 resize-none"
          value={formData.comments}
          onChange={(e) => setFormData({...formData, comments: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-white text-sm mb-1">Client number</label>
        <input
          type="text"
          className="w-full px-3 py-2 bg-white/90 border-0 rounded-sm text-gray-900"
          value={formData.clientNumber}
          onChange={(e) => setFormData({...formData, clientNumber: e.target.value})}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1a1a1a] hover:bg-[#333] text-white py-3 rounded-sm transition-colors"
      >
        Submit
      </button>
    </form>
  );
}