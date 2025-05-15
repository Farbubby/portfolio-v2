import AboutSection from "@/sections/About";

export default function Home() {
  return (
    <>
      <div className="py-30 gap-20 px-6 sm:px-16 md:px-20 lg:px-30 xl:px-50 flex lg:flex-row justify-center items-center animate-fade-in flex-col-reverse">
        <AboutSection />
      </div>
    </>
  );
}
