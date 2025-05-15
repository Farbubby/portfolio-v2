"use client";

import Project from "@/components/Project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const projectList = [
    <Project
      key="1"
      title="Find My Professors"
      description="A web application that aims to help college students find their professors by searching for the course they plan to take and provides in-depth analysis and relevant data for each professor teaching it."
      technologies={[
        "Go",
        "GraphQL",
        "SQL",
        "PostgreSQL",
        "Nextjs",
        "TailwindCSS",
      ]}
      website=""
      github=""
    />,
    <Project
      key="2"
      title="Handy Dollar"
      description="A financial planning tool application that aims to help users understand and break down their transactions and expenses in order to better manage their finances."
      technologies={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "PostgreSQL",
        "OpenAI",
        "Azure",
        "Supabase",
        "Plaid",
      ]}
      website=""
      github=""
    />,
    <Project
      key="3"
      title="Review Summarizer"
      description="A web application that grabs top positive and negative reviews for a product and generates a pros and cons and a general consensus summary for that product."
      technologies={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "Expressjs",
        "Puppeteer",
        "OpenAI",
      ]}
      website=""
      github=""
    />,
    <Project
      key="4"
      title="Code Clash"
      description="A leetcode style battle game where players get matched against each other to find the fastest solutions to coding problems in the shortest amount of time."
      technologies={[
        "TypeScript",
        "Mithril",
        "TailwindCSS",
        "Expressjs",
        "Socketio",
        "MongoDB",
      ]}
      website=""
      github=""
    />,
    <Project
      key="5"
      title="Overtone"
      description="A small AI chat application which is similar to the ChatGPT but with an extra feature of text-to-speech to bring accessibility and add a more interactive experience."
      technologies={[
        "TypeScript",
        "Nextjs",
        "TailwindCSS",
        "AWS",
        "Go",
        "OpenAI",
      ]}
      website=""
      github=""
    />,
  ];

  return (
    <>
      <h1 className="text-4xl font-bold mb-16 bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text text-glow">
        Projects
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        orientation={"horizontal"}
        className="w-full">
        <CarouselContent>
          {projectList.map((project, index) => {
            return (
              <CarouselItem
                key={index}
                className="lg:basis-1/3 md:basis-1/2 basis-full py-4">
                {project}
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex flex-row justify-between mt-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
