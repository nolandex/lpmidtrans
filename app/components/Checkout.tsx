"use client";

import React, { useState, ReactNode } from "react";
import { product } from "../libs/product"; // Data produk tetap

// --- Pattern Background ---
const PatternBackground: React.FC<{ children: ReactNode; className?: string; id?: string }> = ({
  children,
  className = "",
  id,
}) => (
  <section id={id} className={`relative bg-white ${className}`}>
    <div className="relative">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div
        className="absolute inset-0 -z-10 h-full w-full 
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] 
        bg-[size:4rem_4rem]"
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  </section>
);

// --- UI Komponen Mandiri ---
interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: string;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl bg-white shadow-md ${className}`}>{children}</div>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className = "" }: CardContentProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = "" }: CardHeaderProps) => (
  <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
);

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = "" }: CardFooterProps) => (
  <div className={`p-6 border-t border-gray-100 ${className}`}>{children}</div>
);

// --- Navbar ---
const Navbar: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">KODEBISNIS</div>

        {/* Button */}
        <Button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={scrollToPricing}
        >
          Daftar Sekarang →
        </Button>
      </div>
    </nav>
  );
};

// --- Komponen FAQ ---
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Apa itu layanan ini?", a: "Ini adalah platform untuk membantu bisnis berkembang lebih cepat." },
    { q: "Bagaimana cara berlangganan?", a: "Pilih paket lalu klik “Checkout Sekarang”. Pembayaran lewat gateway." },
    { q: "Apakah bisa upgrade paket?", a: "Ya, bisa upgrade kapan saja dengan membayar selisih harga paket." },
  ];

  return (
    <PatternBackground className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Pertanyaan Umum
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl bg-white shadow-md border border-gray-200">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-black font-medium"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="ml-2">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <div className="p-4 pt-0 text-gray-600">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </PatternBackground>
  );
};

// --- Komponen Testimoni ---
const TestimonialSection: React.FC = () => {
  const testimonials = Array.from({ length: 9 }).map((_, i) => ({
    name: `User ${i + 1}`,
    profession: "Entrepreneur",
    image: `https://i.pravatar.cc/150?img=${i + 10}`,
  }));

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Apa Kata Mereka
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="flex flex-col items-center text-center p-4 md:p-6 hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full mb-3 object-cover border-2 border-blue-500"
              />
              <h3 className="text-sm md:text-lg font-semibold">{t.name}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{t.profession}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Komponen Quote Owner ---
const QuoteOwner: React.FC = () => (
  <section className="w-full py-20 md:py-32">
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 text-center bg-white shadow-xl">
        <img
          src="https://i.pravatar.cc/150?img=50"
          alt="Owner"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-600 object-cover"
        />
        <blockquote className="text-lg italic text-gray-700 mb-4">
          “Kami percaya teknologi dapat membantu setiap bisnis tumbuh lebih cepat dan lebih cerdas.”
        </blockquote>
        <p className="font-semibold text-gray-900">John Doe</p>
        <p className="text-sm text-gray-500">Founder & CEO, SaaSify</p>
      </Card>
    </div>
  </section>
);

// --- CTA Section ---
const CTASection: React.FC = () => (
  <section className="w-full py-20 md:py-32 bg-blue-600 text-white text-center">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Siap Memulai Perjalanan Bisnis Anda?
      </h2>
      <p className="mb-8 text-lg">
        Bergabung sekarang dan rasakan kemudahan mengelola bisnis dengan teknologi modern.
      </p>
      <Button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
        Daftar Sekarang →
      </Button>
    </div>
  </section>
);

// --- Komponen Utama Checkout ---
const Checkout: React.FC = () => {
  const config = {
    appName: "SaaSify",
    hero: {
      title: "Streamline Your Workflow, Elevate Your Success",
      desc: "Kelola bisnis Anda lebih mudah dengan otomatisasi pintar dan integrasi modern.",
      buttonText: "Get Started Now",
      youtubeEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    pricing: {
      title: product.name,
      price: `Rp ${product.price}`,
      features: [
        "Smart Automation",
        "Advanced Analytics",
        "Team Collaboration",
        "Enterprise Security",
        "Seamless Integration",
        "24/7 Support",
      ],
      buttonText: "Checkout Sekarang",
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "Sign Up", description: "Buat akun dan mulai eksplorasi platform." },
        { title: "Integrate", description: "Hubungkan tools dan workflow dengan integrasi mudah." },
        { title: "Succeed", description: "Otomatisasi tugas dan capai tujuan bisnis." },
      ],
    },
  };

  const features = [
    {
      title: "Smart Automation",
      description: "Otomatisasi tugas berulang agar lebih efisien.",
      image: "https://images.unsplash.com/photo-1589224535384-033b9cfa6c88?q=80&w=800",
    },
    {
      title: "Advanced Analytics",
      description: "Insight dengan visualisasi data real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    },
    {
      title: "Team Collaboration",
      description: "Kolaborasi tim lebih mudah dan produktif.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    },
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  const checkout = async () => {
    const data = { id: product.id, productName: product.name, price: product.price, quantity: 1 };
    try {
      const res = await fetch("/api/tokenizer", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const resData = await res.json();
      if (!resData?.token) throw new Error("Invalid token response");
      (window as any).snap.pay(resData.token);
    } catch (err: any) {
      console.error("Checkout error:", err.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      {/* Hero (Section 1 with Pattern) */}
      <PatternBackground className="w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {config.hero.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{config.hero.desc}</p>
          <Button
            size="lg"
            className="rounded-full h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white mb-8"
            onClick={scrollToPricing}
          >
            {config.hero.buttonText} →
          </Button>
          <div className="flex justify-center">
            <iframe
              width="360"
              height="200"
              src={config.hero.youtubeEmbed}
              title="YouTube video player"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </PatternBackground>

      {/* Features (Section 2 normal) */}
      <section id="features" className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i} className="h-full hover:shadow-xl transition">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Section 3 with Pattern) */}
      <PatternBackground className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            {config.howItWorks.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.howItWorks.steps.map((step, i) => (
              <Card key={i} className="h-full hover:shadow-xl transition">
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </PatternBackground>

      {/* Testimonials (Section 4 normal) */}
      <TestimonialSection />

      {/* Pricing (Section 5 with Pattern) */}
      <PatternBackground className="w-full py-20 md:py-32 bg-gray-50" id="pricing-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card className="bg-white shadow-2xl rounded-3xl p-6">
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">{config.pricing.title}</h2>
                <p className="text-4xl font-extrabold text-blue-600 mt-2">{config.pricing.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  {config.pricing.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
                  onClick={checkout}
                >
                  {config.pricing.buttonText}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </PatternBackground>

      {/* Quote Owner (Section 6 normal) */}
      <QuoteOwner />

      {/* FAQ (Section 7 with Pattern) */}
      <FAQSection />

      {/* CTA (Section 8 normal) */}
      <CTASection />
    </div>
  );
};

export default Checkout;
