import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
  github: string;
  website: string;
}

export default function Project({
  title,
  description,
  technologies,
  github,
  website,
}: Project) {
  return (
    <>
      <Card
        key={title}
        className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden group h-full">
        <CardHeader className="p-4 flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
            {title}
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
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-300 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="bg-gray-700/50 text-teal-300 border-gray-600 hover:bg-gray-700">
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
