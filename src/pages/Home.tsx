import Hero from "@components/Hero";
import Container from "@components/Container";
import Card from "@components/Card";

export default function Home() {
  return (
    <div id="hero" className="flex flex-col align-items justify-center">
      <Hero
        title="Exploring code, cognition, and the space between."
        ctaText="View My Work"
        imageSrc="BriKom8_BriKom8-R4-025-11.png"
      />
      <section id="content">
        <Container
          id="about-me"
          title="About Me"
          color="bg-gray-300"
        >
          <p className="text-lg text-gray-700 text-left leading-relaxed">
            I’m Brian, a software engineer and computer science graduate student
            focused on furthering accessibility and sustainability in computation. 
            My professional experience spans software development and test automation
            across embedded, mobile, and web applications, where I’ve learned to 
            combine conceptual practices with a user-focused perspective, 
            making complex systems more transparent and dependable.
          </p>
          <p className="text-lg text-gray-700 text-left leading-relaxed mt-4">
            As a researcher, I’m interested in both how foundational practices like 
            compiler and language design can deliver discipline-wide impacts 
            and how emerging technologies like generative AI shape the way people 
            learn, create, and collaborate. I particularly enjoy exploring questions 
            at the intersection of software engineering and human-computer interaction.
          </p>
          <p className="text-lg text-gray-700 text-left leading-relaxed mt-4">
            Outside of professional and academic pursuits, I like practicing photography,
            reading (usually non-fiction), recreating fun meals for my gluten-intolerant spouse, 
            and gaming. I believe good engineering starts with empathy and curiosity, 
            and I try to bring both into everything I build.
          </p>
          <div className="mt-2 flex justify-center">
            <button id="download-resume" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition">
              <a href="/BrianKominick-Resume.pdf" download>
                Download my resume
              </a>
            </button>
          </div>
        </Container>
        <Container
          id="projects"
          title="Projects"
          body="Coming soon!"
          color="bg-blue-300"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4">
              <Card
              title="Project 1"
              excerpt="Project details"
              path=""
              slug=""
              img=""
              />
            </div>
            <div className="p-4">
              <Card
              title="Project 2"
              excerpt="Project details"
              path=""
              slug=""
              img=""
              />
            </div>
          </div>
        </Container>
        <Container
          id="contact"
          title="Get in Touch"
          color="bg-gray-300"
        >
          <p className="text-lg text-gray-700 mb-4">
            If you see anything that resonates with you, whether you’re building tools, exploring research, or interested in similar creative hobbies like photography and cooking, I’d love to connect!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You can reach me directly at <div>br<span className="hidden">@</span><span>ia<p className="hidden">.example</p>n.</span>kom<span>in</span>ick<span className="hidden">@</span>(at)tu<span className="hidden">.com</span>tan<span>ota(dot)</span>com</div>
            or find me on{" "}
            <a href="https://www.linkedin.com/in/briankominick" className="text-blue-600 hover:underline">
              LinkedIn
            </a>{" "}
            and{" "}
            <a href="https://github.com/brankominick" className="text-blue-600 hover:underline">
              GitHub
            </a>.
          </p>
          <p className="text-gray-600 text-sm">
            Looking forward to talking!
          </p>
        </Container>
      </section>
    </div>
    
  );
}
