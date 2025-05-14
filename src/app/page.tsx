import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="w-1/3 h-screen">
      <Project
        title="My Project"
        description="This is a description of my project."
        technologies={["React", "Next.js", "Tailwind CSS"]}
        github=""
        website="https://example.com"
      />
    </div>
  );
}
