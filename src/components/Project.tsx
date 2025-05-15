import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  website: string;
}

export default function Project({
  title,
  description,
  technologies,
  website,
}: Project) {
  return (
    <>
      <Card
        key={title}
        className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(15,244,198,0.15)] hover:border-[#0ff4c6]/50 transition-all duration-300 overflow-hidden group h-full">
        <CardHeader className="p-4 flex flex-row items-center justify-between">
          <CardTitle>
            <div className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text text-glow-subtle">
              {title}
            </div>
          </CardTitle>
          {/* <div className="flex gap-2">
            <a
              href={github}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Repository">
              <div>GitHub</div>
            </a>
            <a
              href={website}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Live Website">
              <div>Website</div>
            </a>
          </div> */}
          {website}
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-300 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="bg-gray-700/50 text-teal-300 border-gray-600 hover:bg-gray-700 transition-all duration-150">
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
