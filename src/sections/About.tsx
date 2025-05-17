import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <p className="text-lg text-[#0ff4c6] w-full text-glow-subtle">
          I recently graduated from the University of Central Florida with a
          Bachelor&apos;s degree in Computer Science with Magna Cum Laude honors
          and now pursuing a Master&apos;s degree in Computer Science at the
          same university.
        </p>
        <p className="text-lg text-[#0ff4c6] w-full text-glow-subtle">
          I am passionate about software engineering, artificial intelligence,
          and machine learning. My industry experiences, coursework, personal
          projects, and hackathon experiences have allowed me to develop my
          skills in collaboration, communication, problem-solving, and building
          user-centric products.
        </p>
        <p className="text-lg text-[#0ff4c6] w-full text-glow-subtle">
          In my free time, I enjoy traveling, food, cars, video games, anime,
          and spending time with my friends and family.
        </p>
      </div>
      <Image
        src="/Farbubby.jpg"
        alt="Farbubby"
        width={325}
        height={325}
        className="rounded-xl shadow-lg shadow-[#0ff4c6] w-auto h-auto"
        priority
      />
    </>
  );
}
