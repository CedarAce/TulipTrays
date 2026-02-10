import React, { useState, useEffect } from "react";
import {
  Star,
  ArrowDown,
  Mail,
  GraduationCap,
  Home,
  Briefcase,
  Maximize,
  Hand,
  ShieldCheck,
  Palette,
  Phone,
  MapPin,
  Menu,
  Store,
  Calendar,
  Truck,
  Utensils,
} from "lucide-react";

export default function App() {
  const [activeColor, setActiveColor] = useState("charcoal");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImages = {
    charcoal:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
    sage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop",
    cream:
      "https://images.unsplash.com/photo-1595515106967-14380990a5d0?q=80&w=1974&auto=format&fit=crop",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans overflow-x-hidden selection:bg-sage-500 selection:text-white ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
    >
      {/* --- NAVBAR --- */}
      <Navbar onNavigate={scrollToSection} />

      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-stone-500 uppercase mb-6 block">
              Tulip Tray{" "}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 leading-[1.05] mb-8">
              The One Tray That <br />
              <span className="italic font-light">Does Everything.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up-delay opacity-0">
            <p className="text-lg text-stone-600 max-w-xl mx-auto mb-10 font-light leading-relaxed">
              A premium, oversized surface designed for luxury hospitality,
              organized play, and creative workspaces.
            </p>

            <div className="flex items-center justify-center gap-6 mb-16">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-charcoal-900 text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all hover:scale-105 shadow-xl"
              >
                Request Wholesale Pricing
              </button>
              <button
                onClick={() => scrollToSection("versatility")}
                className="text-charcoal-900 font-medium hover:text-stone-600 flex items-center gap-2 group"
              >
                Explore Uses{" "}
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>
          </div>

          <div
            className="relative w-full max-w-5xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl bg-stone-200">
              <img
                key={activeColor}
                src={heroImages[activeColor]}
                alt="Luxury Tray Lifestyle"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg flex flex-col gap-3 animate-float border border-white/50">
              <ColorBtn
                color="sage"
                bg="#84968B"
                active={activeColor}
                onClick={setActiveColor}
              />
              <ColorBtn
                color="charcoal"
                bg="#2D2D2D"
                active={activeColor}
                onClick={setActiveColor}
              />
              <ColorBtn
                color="cream"
                bg="#F5F5F4"
                active={activeColor}
                onClick={setActiveColor}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- VERSATILITY GRID --- */}
      <section id="versatility" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">
              Endless Possibilities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3">
              One Design,{" "}
              <span className="italic text-stone-500">Infinite Uses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Utensils}
              title="Fine Dining & Service"
              subtitle="Culinary Elegance"
              delay="0s"
              desc="Designed for high-end food serving, from breakfast in bed to sophisticated hors d'oeuvres. The spill-proof rim ensures a flawless presentation."
              img="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Palette}
              title="Creative & Sensory Play"
              subtitle="Montessori Approved"
              delay="0.1s"
              desc="The ultimate workspace for kids' activities. Contains lego, sand, and art supplies, making cleanup effortless while defining a clear creative zone."
              img="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1974&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Home}
              title="Curated Home Decor"
              subtitle="Aesthetic Organization"
              delay="0.2s"
              desc="A sophisticated foundation for your coffee table or ottoman. Organize books, candles, and botanicals into a cohesive, stylish display."
              img="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Briefcase}
              title="Executive Workspace"
              subtitle="Professional Clarity"
              delay="0.3s"
              desc="Instantly create a focused work environment. Spacious enough for your laptop and essentials, keeping your workflow organized and mobile."
              img="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* --- NEW: CRAFTED FOR EXCELLENCE SECTION --- */}
      <section id="specs" className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Dimension Tags */}
            <div className="relative group">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop"
                  alt="Tray Dimensions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Dimension Badges */}
              <div
                className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="block text-4xl font-serif text-charcoal-900">
                  24"
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500">
                  Width
                </span>
              </div>
              <div
                className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="block text-4xl font-serif text-charcoal-900">
                  18"
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500">
                  Depth
                </span>
              </div>
            </div>

            {/* Right: Specs Grid */}
            <div>
              <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">
                Product Details
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3 mb-6">
                Crafted for <span className="italic">Excellence</span>
              </h2>
              <p className="text-stone-500 text-lg mb-12 leading-relaxed">
                Every detail has been carefully considered to deliver a product
                that exceeds expectations in both form and function.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <SpecCard
                  badge="40% LARGER"
                  icon={Maximize}
                  title="Oversized Footprint"
                  desc="Significantly larger than standard trays, providing ample surface area."
                />
                <SpecCard
                  badge="ERGONOMIC"
                  icon={Hand}
                  title="Easy-Grip Handles"
                  desc="Ergonomically integrated handles ensure comfortable, secure carrying."
                />
                <SpecCard
                  badge="COMMERCIAL GRADE"
                  icon={ShieldCheck}
                  title="Premium Durability"
                  desc="Crafted from high-quality materials built to withstand daily use."
                />
                <SpecCard
                  badge="12+ COLORS"
                  icon={Palette}
                  title="Color Options"
                  desc="Available in a curated palette of sophisticated colors to complement any aesthetic."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHOLESALE SECTION (UPDATED: No Testimonial) --- */}
      <section
        id="wholesale"
        className="py-24 bg-charcoal-900 text-cream-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">
              For Business
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6 leading-tight">
              Bulk & Custom <br />{" "}
              <span className="italic text-stone-400">Orders</span>
            </h2>
            <p className="text-stone-400 text-lg mb-10 leading-relaxed">
              We partner with businesses of all sizes to provide premium trays
              at competitive wholesale pricing. Custom colors and branding
              options available for qualifying orders.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Retailers", icon: Store },
                { label: "Event Planners", icon: Calendar },
                { label: "Schools", icon: GraduationCap },
                { label: "Distributors", icon: Truck },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-stone-700 rounded-lg p-3 text-sm text-stone-300 flex items-center gap-3 hover:bg-stone-800 transition-colors cursor-default"
                >
                  <item.icon size={18} className="text-cream-50" />
                  {item.label}
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full md:w-auto bg-white text-charcoal-900 px-8 py-4 rounded-lg font-bold hover:bg-stone-200 transition-colors"
            >
              Get Wholesale Pricing
            </button>
          </div>

          <div className="relative">
            <div className="bg-charcoal-800 rounded-3xl p-10 border border-stone-800 text-center relative z-10">
              <div className="grid grid-cols-2 gap-12">
                <Stat val="500+" label="Partners" />
                <Stat val="12" label="Colors" />
                <Stat val="48h" label="Dispatch" />
                <Stat val="100" label="Min Order" />
              </div>
            </div>
            {/* Testimonial Removed as requested */}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-24 bg-white border-t border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">
                Wholesale Pricing
                <br />
                <span className="italic text-stone-500">& Color Catalog</span>
              </h2>
              <p className="text-stone-500 text-lg mb-10 leading-relaxed">
                Complete the form to receive our wholesale pricing sheet and
                full color catalog. Our team typically responds within 48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stone-50 rounded-full">
                    <Mail className="text-charcoal-900" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="text-charcoal-900">
                      sales@tuliptrays.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stone-50 rounded-full">
                    <Phone className="text-charcoal-900" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      Phone
                    </div>
                    <div className="text-charcoal-900">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-stone-50 rounded-full">
                    <MapPin className="text-charcoal-900" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      Headquarters
                    </div>
                    <div className="text-charcoal-900">Ottawa, ON, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all"
                      placeholder="Company Inc."
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Business Type *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all appearance-none">
                      <option value="" disabled selected>
                        Select type
                      </option>
                      <option value="retailer">Retailer</option>
                      <option value="distributor">Distributor</option>
                      <option value="event">Event Planner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Estimated Quantity
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all appearance-none">
                      <option value="" disabled selected>
                        Select range
                      </option>
                      <option value="100-500">100 - 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white transition-all resize-none"
                    placeholder="Tell us about your needs, preferred colors, or any questions..."
                  ></textarea>
                </div>

                <button className="w-full bg-charcoal-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl mt-2">
                  Request Pricing & Catalog
                </button>
                <p className="text-xs text-stone-400 text-center mt-4">
                  By submitting, you agree to receive communications from our
                  team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-charcoal-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif text-white font-bold">Tulip</div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-sm">© 2026 Tulip Tray. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className="text-2xl font-serif text-charcoal-900 font-bold cursor-pointer"
          onClick={() => onNavigate("hero")}
        >
          Tulip Tray
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate("versatility")}
            className="hover:text-charcoal-900 transition-colors"
          >
            Uses
          </button>
          <button
            onClick={() => onNavigate("specs")}
            className="hover:text-charcoal-900 transition-colors"
          >
            Specs
          </button>
          <button
            onClick={() => onNavigate("wholesale")}
            className="hover:text-charcoal-900 transition-colors"
          >
            Wholesale
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-charcoal-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition-all"
          >
            Get Catalog
          </button>
        </div>
        <button className="md:hidden text-charcoal-900">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const ColorBtn = ({ color, bg, active, onClick }) => (
  <button
    onClick={() => onClick(color)}
    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${active === color ? "border-charcoal-900 scale-110" : "border-stone-200 hover:scale-110"}`}
    style={{ backgroundColor: bg }}
    title={color.charAt(0).toUpperCase() + color.slice(1)}
  />
);

const FeatureCard = ({ icon: Icon, title, subtitle, desc, img, delay }) => (
  <div className="group bg-white rounded-2xl p-3 pb-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-stone-100 ease-out">
    <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-lg z-10 shadow-sm">
        <Icon size={20} className="text-charcoal-900" />
      </div>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="px-3">
      <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">
        {subtitle}
      </div>
      <h3 className="text-2xl font-serif text-charcoal-900 mb-2 group-hover:text-sage-500 transition-colors">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SpecCard = ({ badge, icon: Icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-stone-50 p-3 rounded-full">
        <Icon className="text-charcoal-900" size={20} />
      </div>
      <span className="bg-charcoal-900 text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-widest uppercase">
        {badge}
      </span>
    </div>
    <h3 className="text-lg font-bold text-charcoal-900 mb-2">{title}</h3>
    <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
  </div>
);

const Stat = ({ val, label }) => (
  <div className="group">
    <div className="text-4xl md:text-5xl font-serif text-white mb-2 group-hover:scale-110 transition-transform duration-300 ease-out inline-block">
      {val}
    </div>
    <div className="text-xs uppercase tracking-widest text-stone-500">
      {label}
    </div>
  </div>
);
