
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Rhino Innovation Lab</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between potential and opportunity through technology and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower young people and communities with the digital skills, resources, and mentorship needed to solve local challenges and drive economic growth.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A digitally inclusive society where every young person has the capacity to innovate and contribute to a sustainable future.
                </p>
              </div>
            </div>
            
             {/* Image Placeholder - A team or workshop image would go here */}
            <div className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
               <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                  <span className="text-gray-400 font-medium">About Image Placeholder</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every program, partnership, and project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">We believe in finding new, effective solutions to old problems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Collaboration</h3>
              <p className="text-gray-600">We achieve more when we work together with partners and communities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3>
              <p className="text-gray-600">We are committed to leaving no one behind in the digital revolution.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
