import Image from "next/image";

const Myhero = () => {
  return (
    <section
      className="relative bg-no-repeat text-white py-32 px-6 md:px-16 
             bg-[url('/images/mobile-hero.jpg')] 
             md:bg-[url('/images/hero2.jpeg')] 
             bg-cover bg-center"
    >
      {/* Your content here */}

      {/* Smoke Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-orange-600">Take</span> your dream{" "}
            <span className="text-orange-600">physique</span> to reality
          </h1>
          <p className="text-xl font-semibold text-gray-300 max-w-md">
            Unlock your full potential with expert guidance and world-class
            training equipment. Start your transformation journey today.
          </p>
          <button className="bg-orange-700 text-white hover:bg-orange-800 transition my-10 p-4 rounded-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Myhero;
