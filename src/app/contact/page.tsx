import ContactSection from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="py-30 px-6 sm:px-16 md:px-20 lg:px-30 xl:px-50 flex flex-col justify-center items-center h-screen gap-8 animate-fade-in">
        <ContactSection />
      </div>
    </>
  );
}
