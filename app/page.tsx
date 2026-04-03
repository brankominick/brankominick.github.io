import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div id="hero" className="flex flex-col align-items justify-center">
      <Hero
        title="Once, in a forest..."
        ctaText="View My Work"
        imageSrc="/BriKom8_BriKom8-R4-025-11.png"
      />
      <section id="content">
        <Container
          id="about-me"
          title="About Me"
          color="bg-gray-300"
        >
          <p className="text-lg text-gray-700 text-left leading-relaxed">
            I'm Brian, a software engineer and CS grad student. Outside of that,
             I love to practice photography.I enjoy the process of taking a 
            subject that everyone can see and showing it through a unique 
            perspective that conveys a feeling or experience. I cook entirely 
            gluten-free at home and am slowly building a physical recipe collection.
            I like the feeling of holding a recipe in my hand, especially ones that 
            have been passed down. 

            I'm curious about most things, and I try to pay attention.
          </p>
        </Container>
        <Container
          id="projects"
          title="Projects"
          body="Some of my recent projects..."
          color="bg-blue-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
            You can reach me directly at <span>br<span className="hidden">@</span><span>ia<span className="hidden">.example</span>n</span><span></span><span className="hidden">@</span>(at)brian<span className="hidden">.com</span>kominick<span>(dot)</span>com </span>
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
