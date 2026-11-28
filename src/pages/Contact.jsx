import React from 'react';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/europeanbirch.com/assets/source-image-03.png')`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>
              <p className="mb-6 text-gray-200">
                Thank you for your interest. For questions or comments, please use the information listed here. We look forward to hearing from you soon.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#C9A962]">Phone Number</p>
                  <a href="tel:+18008456001" className="text-white hover:text-[#C9A962] transition-colors">(800) 845-6001</a>
                </div>
                
                <div>
                  <p className="font-semibold text-[#C9A962]">Hours of Operation</p>
                  <p className="text-gray-200">Monday - Friday</p>
                  <p className="text-gray-200">6:00 a.m. - 5:00 p.m.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#C9A962]">Headquarters and West Coast Sales Office:</p>
                  <p className="text-gray-200">1851 Whitney Mesa Drive</p>
                  <p className="text-gray-200">Henderson, NV 89014</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#C9A962]">East Coast Sales Office:</p>
                  <p className="text-gray-200">20 Central Street, Suite 105</p>
                  <p className="text-gray-200">Salem, MA 01970</p>
                </div>
                
                <p className="italic text-gray-300">Serving Customers Nationwide</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/95 p-6 rounded-lg shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#C9A962] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-lg font-semibold mb-2">Are you looking for wholesale plywood products?</p>
          <p className="text-lg mb-2">Contact us in Henderson, NV for all plywood sizes and styles.</p>
          <p className="text-lg">Such as, European Birch Plywood, Baltic Birch Plywood and more!</p>
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
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <span className="text-gray-500 text-xs">First Name*</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <span className="text-gray-500 text-xs">Last Name*</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Email*</label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number*</label>
        <input
          type="tel"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Comments*</label>
        <textarea
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
          value={formData.comments}
          onChange={(e) => setFormData({...formData, comments: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Client number</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
          value={formData.clientNumber}
          onChange={(e) => setFormData({...formData, clientNumber: e.target.value})}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1a1a1a] hover:bg-[#333] text-white py-3 rounded-sm transition-colors font-medium"
      >
        Submit
      </button>
    </form>
  );
}