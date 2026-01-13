import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rhino Innovation Lab</h3>
            <p className="text-sm text-gray-300">
              Empowering the next generation of innovators through technology, skills, and community.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-200">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Digital Skills</Link></li>
              <li><Link href="#" className="hover:text-white">Youth Development</Link></li>
              <li><Link href="#" className="hover:text-white">Community Innovation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@rhinolab.ng</li>
              <li>+234 703 686 6566</li>
              <li className="flex gap-4 mt-2 items-center">
                <Link href="#" className="hover:text-primary transition-colors text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f text-xl" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="hover:text-primary transition-colors text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin-in text-xl" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="hover:text-primary transition-colors text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="hover:text-primary transition-colors text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rhino Innovation Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
