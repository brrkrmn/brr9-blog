import Image from "next/image";
import Link from "next/link";

export default function About () {
  const projects = [
    {
      title: "Codymate",
      description: "Make your code presentations stand out! Codymate is a code presentation tool that lets you create interactive code scenes with step-by-step typing animations, transforming your code into engaging slides. Perfect for live demos, tutorials, and tech talks.",
      link: "https://www.codymate.com/",
      logo: "/images/projects/codymate.png"
    },
    {
      title: "Code&Line",
      description: "Code&Line is a note-taking app designed for developers to provide a more detailed understanding of their code. Its core feature allows users to target specific code lines with each note, aiming for a line-by-line explanation of the snippet.",
      link: "https://www.codeandline.com/",
      logo: "/images/projects/code-and-line.png"
    },
    {
      title: "ClipHoard",
      description: "Chrome extension to quickly access your most used data.",
      link: "https://chromewebstore.google.com/detail/cliphoard/amgfihockidjlcbhljidpcefieldgljf?hl=en-US&utm_source=ext_sidebar",
      logo: "/images/projects/cliphoard.png"
    },
    {
      title: "Guess the Painting",
      description: "A daily puzzle game where users try to guess the title of a famous painting from zoomed-in screenshots.",
      link: "https://www.guessthepainting.com/",
      logo: "/images/projects/guess-the-painting.png"
    }
  ]

  return (
    <div className="container max-w-[820px] py-6 flex flex-col items-start justify-center gap-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1">
          <h1 className="inline-block font-semibold text-4xl tracking-tight sm:text-[44px]">Projects</h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        {projects.map((project) =>
          <Link target="_blank" href={project.link} key={project.title} className="p-10 w-full flex flex-col items-start justify-center border-[1px] rounded-md shadow hover:shadow-md transition duration-300">
            <div className="flex items-start justify-start gap-4">
              <Image src={project.logo} width={60} height={60} />
              <div className="flex flex-col items-start justify-center gap-2">
                <h2 className="max-sm:text-[20px] text-[22px] font-bold">{project.title}</h2>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}