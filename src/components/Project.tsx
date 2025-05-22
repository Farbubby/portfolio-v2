import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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
            <div className="text-xl font-bold text-[#0ff4c6] text-glow-subtle">
              {title}
            </div>
          </CardTitle>
          <div className="flex gap-2">
            <Link
              target="_blank"
              href={website}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Live Website">
              <svg
                className="w-6 h-6 fill-[#0ff4c6] hover:fill-white transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
              </svg>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-300 text-sm text-glow-subtle">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="bg-gray-700/50 text-teal-300 border-gray-600 hover:bg-gray-700 transition-all duration-150">
              <div className="text-glow-subtle">{tech}</div>
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
