import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering the Next Generation of Innovators
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Rhino Innovation Lab is dedicated to capacity building, youth development, and community innovation through technology and digital skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors text-center">
                Get Involved
              </Link>
              <Link href="/programs" className="px-8 py-3 border border-white text-white font-bold rounded hover:bg-white/10 transition-colors text-center">
                Our Programs
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
             <Image
                src="/hero.jpeg"
                alt="Rhino Innovation Lab Hero"
                fill
                className="object-cover"
                priority
             />
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our initiatives are designed to bridge the digital divide and foster a culture of innovation across communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 transition-all hover:shadow-xl border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-secondary transition-colors">
                 💻
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Digital Skills</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Equipping youth with cutting-edge coding, data analysis, and AI skills to prepare them for the future of work.
              </p>
              <Link href="/programs" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group p-8 transition-all hover:shadow-xl border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-secondary transition-colors">
                 💡
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Community Innovation</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Supporting grassroots solutions to local challenges through hackathons, incubation, and mentorship.
              </p>
              <Link href="/programs" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group p-8 transition-all hover:shadow-xl border border-gray-100 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-secondary transition-colors">
                 🚀
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Capacity Building</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Developing leadership and entrepreneurial talent to drive sustainable development and economic growth.
              </p>
              <Link href="/programs" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                Learn more <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
                <p className="text-gray-400">Youth Trained</p>
             </div>
             <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
                <p className="text-gray-400">Projects Launched</p>
             </div>
             <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">20+</p>
                <p className="text-gray-400">Partners</p>
             </div>
             <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">5</p>
                <p className="text-gray-400">Years Active</p>
             </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-2xl font-bold mb-8 text-primary">Our Partners & Donors</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-70">
              {/* Partner Logo Placeholders */}
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 1</div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 2</div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 3</div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 4</div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 5</div>
           </div>
        </div>
      </section>
    </div>
  );
}
