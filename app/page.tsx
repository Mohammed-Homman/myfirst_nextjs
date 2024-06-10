import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Top Menu Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-8 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Welcome to My Website</h1>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li className="text-lg">Home</li>
              <li className="text-lg">About</li>
              <li className="text-lg">Services</li>
              <li className="text-lg">Contact</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-20 container mx-auto">
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
          <p className="text-lg text-gray-700 max-w-lg text-center">
            We are excited to have you here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
