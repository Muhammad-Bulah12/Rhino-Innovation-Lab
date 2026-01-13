
import Link from "next/link";

const programs = [
  {
    title: "Digital Skills Training",
    description: "Equipping young people with in-demand technical skills ranging from basic computer literacy to advanced programming and data analysis.",
    features: [
      "Web Development Bootcamps",
      "Data Science & Analytics",
      "Mobile App Development",
      "Digital Marketing Fundamentals"
    ],
    icon: "💻"
  },
  {
    title: "Community Innovation",
    description: "Fostering a culture of problem-solving by supporting grassroots solutions to local challenges through technology and design thinking.",
    features: [
      "Innovation Hackathons",
      "Design Thinking Workshops",
      "Community Tech Hubs",
      "Mentorship Programs"
    ],
    icon: "💡"
  },
  {
    title: "Capacity Building",
    description: "Strengthening the capabilities of individuals and organizations to drive sustainable development and economic growth using digital tools.",
    features: [
      "Entrepreneurship Development",
      "Leadership Training",
      "Organizational Digital Transformation",
      "Soft Skills Workshops"
    ],
    icon: "🚀"
  }
];

export default function ProgramsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4 md:px-6">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Programs</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Impactful initiatives designed to transform lives and communities through technology.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Visual Side */}
                <div className="w-full md:w-1/2">
                   <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-9xl shadow-inner">
                      {program.icon}
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-primary">{program.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-secondary text-lg">Key Focus Areas:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                     <Link href="/contact" className="inline-block px-6 py-3 bg-secondary text-white font-bold rounded hover:bg-primary transition-colors">
                        Learn More
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Want to Partner with Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            We are always looking for collaborators to help us expand the reach and impact of our programs.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
