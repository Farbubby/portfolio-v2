"use client";

import Project from "@/components/Project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectList = [
  <Project
    key="1"
    title="Find My Professors"
    description="A web application designed to help college students choose the right professors by searching for their upcoming courses, offering in-depth analysis and data-driven insights on each professor teaching them."
    technologies={[
      "Go",
      "GraphQL",
      "SQL",
      "PostgreSQL",
      "Nextjs",
      "TailwindCSS",
    ]}
    website="https://devpost.com/software/find-my-professors"
  />,
  <Project
    key="2"
    title="Handy Dollar"
    description="A financial planning application that enables users to analyze and break down their transactions and expenses, promoting smarter and more effective financial management."
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
    website="https://devpost.com/software/handydollar"
  />,
  <Project
    key="3"
    title="Review Summarizer"
    description="A web application that extracts the most insightful positive and negative reviews for a product and generates a pros and cons along with an unbiased consensus summary."
    technologies={[
      "TypeScript",
      "Nextjs",
      "TailwindCSS",
      "Expressjs",
      "Puppeteer",
      "OpenAI",
    ]}
    website="https://devpost.com/software/review-generator-9000"
  />,
  <Project
    key="4"
    title="Code Clash"
    description="A LeetCode-style 1v1 battle game where players race to solve coding challenges as quickly and efficiently as possible."
    technologies={[
      "TypeScript",
      "Mithril",
      "TailwindCSS",
      "Expressjs",
      "Socketio",
      "MongoDB",
    ]}
    website="https://github.com/Shi-morrison/CodeClash"
  />,
  <Project
    key="5"
    title="Overtone"
    description="A lightweight ChatGPT-based application enhanced with text-to-speech functionality, delivering greater accessibility and a more interactive user experience."
    technologies={[
      "TypeScript",
      "Nextjs",
      "TailwindCSS",
      "AWS",
      "Go",
      "OpenAI",
    ]}
    website="https://github.com/Bombachicky/TTS-AI"
  />,
  <Project
    key="6"
    title="Lootcode 10"
    description="A problem-solving progression game where players advance through regions of a map by solving coding challenges, guided by an AI-powered assistant whenever they get stuck."
    technologies={[
      "TypeScript",
      "Svelte",
      "SvelteKit",
      "Llama3",
      "Monaco",
      "JSON",
    ]}
    website="https://devpost.com/software/lootcode-10"
  />,
  <Project
    key="7"
    title="Story Sensei"
    description="An AI-powered Japanese learning app that offers a personalized learning experience for a user, through tailored stories and quizzes, smart reviews, and spaced repetition."
    technologies={[
      "TypeScript",
      "Svelte",
      "SvelteKit",
      "OpenRouter",
      "SQL",
      "PostgreSQL",
    ]}
    website="https://storysensei.org/"
  />,
  <Project
    key="8"
    title="LLM Analysis on Biomedical Q&A"
    description="A research project that evaluates the performance of 9 GPT and BERT-based large language models on answering biomedical questions through empirical experiments, providing insights into their capabilities and limitations."
    technologies={["PyTorch", "Python", "Pandas", "HuggingFace"]}
    website="https://github.com/almond5/CAP5510_Final_Project"
  />,
];

export default function ProjectSection() {
  return (
    <>
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
