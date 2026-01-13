
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Abdullahi Muh'd Abdul-Fatah",
    role: "Founder / CEO",
    image: "/team/Abdullahi Abdul-Fatah.jpg",
    bio: "Visionary leader dedicated to driving innovation and empowering the next generation of tech leaders.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammad Saleh Bulah",
    role: "Chief Operating Officer (COO)",
    image: "/team/Muhammad Saleh Bulah.jpg",
    bio: "Operational expert ensuring smooth execution of strategies and organizational excellence.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammad Musbahu Goni",
    role: "Chief Technology Officer (CTO)",
    image: "/team/Muhammad Musbahu Goni.jpg",
    bio: "Tech strategist leading the development of cutting-edge solutions and digital infrastructure.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Hasana Ibrahim Alkali Esq",
    role: "Secretary and Legal Officer",
    image: "/team/Hasana Ibrahim Alkali.jpg",
    bio: "Ensuring legal compliance and corporate governance while facilitating seamlessly smooth operations.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Aisha Umar Gimba",
    role: "Program Manager I",
    image: "/team/Aisha Umar Gimba.jpg",
    bio: "Dedicated to managing impactful programs and driving community engagement initiatives.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Abdussalam Abubakar Maina-Kaina",
    role: "Program Manager II",
    image: "/team/Abdussalam Abubakar Maina-Kaina.jpg",
    bio: "Focused on executing strategic projects and fostering growth within the innovation ecosystem.",
    socials: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header content */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The passionate individuals behind Rhino Innovation Lab, working together to build a better future through technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-96 w-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Social Overlay - Visible on Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                   <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {/* Social Icons */}
                      <Link href={member.socials.twitter} className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </Link>
                      <Link href={member.socials.linkedin} className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </Link>
                      <Link href={member.socials.facebook} className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </Link>
                      <Link href={member.socials.instagram} className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </Link>
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center flex-grow flex flex-col justify-between relative z-10 bg-white">
                <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
