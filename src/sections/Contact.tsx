export default function ContactSection() {
  return (
    <>
      <p className="text-lg text-[#0ff4c6] text-glow-subtle">
        I am always eager to learn and grow. Whether you have an opportunity in
        mind or just want to connect, I would love to hear from you. If you have
        any questions or would like to get in touch, please contact me through
        email. I will be happy to respond as soon as I am available.
      </p>
      <a
        href="mailto:farhanmahbub88@gmail.com"
        className={
          "bg-gray-900/50 border-gray-700 border backdrop-blur-sm hover:shadow-[0_0_20px_rgba(15,244,198,0.15)] hover:border-[#0ff4c6]/50 transition-all duration-300 overflow-hidden group px-4 py-2 text-[#0ff4c6] text-glow rounded-lg"
        }>
        Contact me
      </a>
    </>
  );
}
