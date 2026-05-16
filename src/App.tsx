/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  ArrowRight,
  Beef,
  Fish,
  ShoppingBag,
  Store,
  Wind
} from "lucide-react";

// --- SVG Decorations ---

const PineBranch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 90 Q30 70 50 80 T90 10" />
    <path d="M20 75 L15 65" /><path d="M25 70 L22 60" /><path d="M30 68 L28 58" />
    <path d="M45 78 L48 68" /><path d="M50 75 L55 65" /><path d="M55 72 L62 62" />
    <path d="M75 35 L85 45" /><path d="M80 30 L90 40" />
  </svg>
);

const Mushroom = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <path d="M20 5 C10 5 2 12 2 18 C2 21 5 22 10 22 L10 35 C10 38 15 38 15 35 L15 22 L25 22 L25 35 C25 38 30 38 30 35 L30 22 C35 22 38 21 38 18 C38 12 30 5 20 5 Z" />
  </svg>
);

const FernFrond = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M10 90 C10 50 50 10 90 10" />
    {[...Array(10)].map((_, i) => (
      <g key={i}>
        <path d={`M${20 + i * 6} ${80 - i * 7} Q${10 + i * 5} ${60 - i * 7} ${5 + i * 5} ${70 - i * 7}`} />
        <path d={`M${20 + i * 6} ${80 - i * 7} Q${35 + i * 5} ${75 - i * 7} ${45 + i * 5} ${85 - i * 7}`} />
      </g>
    ))}
  </svg>
);

const SmokeWisp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 100" className={className} opacity="0.3">
    <path d="M10 100 Q15 75 5 50 T15 25 T10 0" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// --- Components ---

const SectionTitle = ({ label, title, light = false }: { label: string; title: string; light?: boolean }) => (
  <div className="mb-12">
    <span className={`section-label ${light ? 'text-moss-pale' : 'text-moss'}`}>{label}</span>
    <h2 className={`text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-text'}`}>{title}</h2>
  </div>
);

const ProductCard = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white/80 backdrop-blur-sm p-8 rounded-[14px] shadow-sm border-t-4 border-moss relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 opacity-5 -mr-12 -mt-12">
      <Icon size={160} />
    </div>
    <div className="bg-moss/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-moss" size={24} />
    </div>
    <h3 className="text-2xl mb-2 font-display">{title}</h3>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[90vh] bg-bg-dark flex items-center p-6 md:p-12 overflow-hidden">
        {/* Background Wood Grain */}
        <div className="absolute inset-0 bg-texture-wood opacity-40"></div>
        
        {/* Decorative Elements */}
        <PineBranch className="absolute -top-10 -left-10 text-moss/30 w-64 h-64 rotate-45" />
        <PineBranch className="absolute bottom-20 -right-20 text-moss/20 w-80 h-80 -rotate-12" />
        <SmokeWisp className="absolute bottom-0 left-1/4 text-white/20 w-12 h-64 animate-smoke" />
        <SmokeWisp className="absolute bottom-40 right-1/3 text-white/20 w-12 h-64 animate-smoke [animation-delay:2s]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-white mb-8 leading-[1.1]">
              <span className="block text-[clamp(2.5rem,6vw,5rem)] font-display italic font-normal text-amber-light">Wędzarnia Smażalnia</span>
              <span className="block text-[clamp(4rem,9vw,8rem)] -mt-4">22</span>
            </h1>
            
            <p className="text-text-light/80 text-xl md:text-2xl font-subheading italic mb-10 max-w-lg leading-relaxed">
              Smak tradycji hartowany w olchowym dymie.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#sklep" className="px-8 py-4 bg-moss hover:bg-moss-light text-white rounded-full font-display flex items-center gap-2 transition-all">
                Nasze Wyroby <ArrowRight size={18} />
              </a>
              <a href="tel:511158794" className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-full font-display transition-all">
                Zadzwoń do nas
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border-4 border-bg-dark">
              <img 
                src="https://i.postimg.cc/28BRLD7T/684682222-1507600180877219-4892252172914481895-n.jpg" 
                alt="Wędzarnia Smażalnia 22" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- PRODUCTS SECTION --- */}
      <main id="sklep" className="relative bg-bg bg-texture-linen py-24 px-6">
        {/* Rough divider top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#1C2118">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.44,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,0V0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-12">
          <SectionTitle label="NASZA OFERTA" title="Nasze Wyroby" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              icon={Beef} 
              title="Wędliny" 
            />
            <ProductCard 
              icon={Fish} 
              title="Ryby" 
            />
            <ProductCard 
              icon={ShoppingBag} 
              title="Przetwory" 
            />
            <ProductCard 
              icon={Store} 
              title="Grzyby" 
            />
          </div>

          <div className="divider-twine"></div>

          {/* Gallery Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-start">
            <div className="rounded-[14px] overflow-hidden shadow-lg group">
              <img 
                src="https://i.postimg.cc/tCVQnjNk/687027307-1507600204210550-2146485238113372125-n.jpg" 
                alt="Nasze wyroby" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-[14px] overflow-hidden shadow-lg group">
              <img 
                src="https://i.postimg.cc/GhswTCxq/687037133-1507600177543886-698557191844647750-n.jpg" 
                alt="Wędzarnia" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </main>

      {/* --- LOCATION SECTION --- */}
      <section className="bg-bg-section py-24 px-6 relative overflow-hidden">
        <FernFrond className="absolute -bottom-20 -left-10 text-moss/10 w-96 h-96 -rotate-45" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <SectionTitle label="KONTAKT I DOJAZD" title="Odwiedź nas w Człopie" />
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-earth/10 p-4 rounded-full h-fit">
                  <MapPin className="text-earth" />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-display">Adres</h4>
                  <p className="text-text-muted font-subheading">ul. Kolejowa 30<br />78-630 Człopa</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-moss/10 p-4 rounded-full h-fit">
                  <Phone className="text-moss" />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-display">Telefon</h4>
                  <p className="text-text-muted font-subheading">511 158 794</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-amber/10 p-4 rounded-full h-fit">
                  <Mail className="text-amber" />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-display">E-mail</h4>
                  <p className="text-text-muted font-subheading">sklep@lasboreko.pl</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://www.facebook.com/profile.php?id=61560535127141" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-all font-mono"
              >
                <Facebook /> Obserwuj nas na Facebooku
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-white rounded-[24px] shadow-xl overflow-hidden border-8 border-white p-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.3396594874216!2d16.116965777144024!3d53.086134594160825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47014944a98eefad%3A0xa45d13732d697138!2sKolejowa%2030%2C%2078-630%20Cz%C5%82opa!5e0!3m2!1spl!2spl!4v1778937820562!5m2!1spl!2spl" 
              className="w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-bg-dark py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-wood opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
               <span className="text-amber-light font-display text-2xl italic">Wędzarnia Smażalnia 22</span>
            </div>
            <p className="text-white/40 text-sm font-mono tracking-widest">
              © {new Date().getFullYear()} LASBOREKO · CZŁOPA
            </p>
          </div>



          <div className="text-center md:text-right">

            <div className="flex justify-center md:justify-end gap-4 text-white/30">
               <span className="w-1 h-1 bg-amber rounded-full"></span>
               <span className="w-1 h-1 bg-amber rounded-full"></span>
               <span className="w-1 h-1 bg-amber rounded-full"></span>
            </div>
          </div>
        </div>


      </footer>
    </div>
  );
}
