import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Gavin Farmer
        </motion.h1>
        <p className="text-xl text-gray-300 mb-2">Software Engineer</p>
        <p className="text-lg text-gray-400 mb-6">Solving real world problems, informed by real-world experience.</p>
        <Button asChild>
          <a href="mailto:gavin.farmer1990@gmail.com">Contact Me</a>
        </Button>
        <p className="mt-4 text-blue-400">
          <a href="https://www.integradands.com" target="_blank" rel="noopener noreferrer">
            Visit My Company Website
          </a>
        </p>
      </section>

      {/* About Me Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/Me-no-crop.png" alt="Gavin Farmer" className="w-48 h-48 rounded-2xl object-cover shadow-lg" />
          <p className="text-gray-300 leading-relaxed">
            I am a long time student of technology. Having built my first PC and coded my first HTML, CSS, Javascript stack when I was 16. My curiosity always getting the better of me, I joined the military with IT in mind, self taught Ruby on Rails, created dozens of websites and smaller tools over the years, earned a Bachelors in Visual and Game Programming and have been working with computers ever since. I am now trying to transition from the Support side of IT to the Development side of IT. I am proficient in Python, C#, HTML, CSS and Javascript with beginner to intermediate level proficiencies in several other languages.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      {/* This section will showcase all of your projects.
          - Replace the placeholder project card with your real project info.
          - You can add multiple <Card> elements for each project.
          - Replace the "View Live Demo" href with your deployed project link.
          - Add screenshots or preview images for better visual appeal. */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-700">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">QR Code Display Tool</h3>
                <p className="text-gray-300 mb-4">
                  A web tool that dynamically displays QR codes based on a coordinate table.
                </p>
                <Button asChild>
                  <a href="#">View Live Demo</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {["C#", "C++", "Python", "Ruby on Rails", "HTML/CSS/JS", "Node.js", "Docker", "Google Colab", "VS / VS Code"].map((skill, i) => (
            <div key={i} className="bg-gray-700 py-4 rounded-2xl shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <p className="text-gray-300">
            <strong>Art Institute of Phoenix</strong> — Bachelors in Visual and Game Programming (2020)
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-4">Email: <a href="mailto:gavin.farmer1990@gmail.com" className="text-blue-400">gavin.farmer1990@gmail.com</a></p>
        <p className="text-blue-400">
          <a href="https://www.linkedin.com/in/gavin-farmer-67b610189/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}
