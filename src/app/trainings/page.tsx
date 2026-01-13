
import Link from "next/link";
import PastTrainingsSwiper from "@/components/PastTrainingsSwiper";

const trainings = [
  {
    id: 1,
    title: "Intro to Web Development",
    date: "TBA",
    location: "Rhino Innovation Lab Hub",
    duration: "8 Weeks",
    level: "Beginner",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript. Build your first responsive website from scratch.",
    status: "Open"
  },
  {
    id: 2,
    title: "Data Analysis with Python",
    date: "TBA",
    location: "Online / Hybrid",
    duration: "10 Weeks",
    level: "Intermediate",
    description: "Master the art of data visualization and analysis using Python libraries like Pandas and Matplotlib.",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Digital Entrepreneurship",
    date: "TBA",
    location: "Rhino Innovation Lab Hub",
    duration: "4 Weeks",
    level: "All Levels",
    description: "Learn how to turn your tech ideas into viable business models. Covers branding, marketing, and finance.",
    status: "Waitlist"
  }
];

export default function TrainingsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-secondary text-white py-16 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Trainings</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Expand your skill set with our expert-led workshops and bootcamps.
          </p>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training) => (
              <div key={training.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="p-6 flex-grow space-y-4">
                  <div className="flex justify-between items-start">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        training.status === 'Open' ? 'bg-green-100 text-green-700' : 
                        training.status === 'Coming Soon' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                     }`}>
                        {training.status}
                     </span>
                     <span className="text-sm text-gray-400">{training.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary">{training.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {training.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 text-sm text-gray-500 border-t border-gray-50">
                     <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>{training.date} ({training.duration})</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>{training.location}</span>
                     </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                   <Link href="/contact" className="block w-full text-center py-2 bg-white border border-gray-200 rounded font-medium text-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
                      Register Interest
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Trainings Section */}
      <section className="py-16 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Past Trainings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent training sessions and workshops. 
              We're proud of the impact we've made in empowering youth with digital skills.
            </p>
          </div>
          
          <PastTrainingsSwiper />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Want to be part of our next training session?
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded hover:bg-black/80 transition-colors"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-4">Don't see what you're looking for?</p>
          <Link href="/contact" className="text-primary font-bold hover:underline">
             Contact us to request a custom training →
          </Link>
        </div>
      </section>
    </main>
  );
}
