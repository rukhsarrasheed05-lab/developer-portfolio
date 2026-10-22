// //import { motion } from "framer-motion";
// // import StarsCanvas from "./canvas/StarsCanvas";
// // import CoreCanvas from "./canvas/CoreCanvas";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen w-full items-center overflow-hidden"
//     >
//       <StarsCanvas />

//       <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 pt-24 sm:px-10 md:grid-cols-2 md:pt-0">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative z-10"
//         >
        
          
//           <span className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#00e5c7]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#00e5c7]" />
//             Available for new roles
//           </span>
//           <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
//             Hi, I'm <span className="hero-heading-gradient">Rukhsar</span>.
//             <br />I turn data into
//             <br />intelligent solutions.
//           </h1>
//           <p className="mt-6 max-w-md text-base text-[#8c89a6]">
//             Data Analyst and AI & Data Science enthusiast focused on transforming
//             complex data into meaningful insights, interactive dashboards, and
//             intelligent applications.
//           </p>
//           <div className="mt-9 flex flex-wrap gap-4">
//             <a
//               href="#work"
//               className="rounded-full bg-[#8452ff] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#9666ff]"
//             >
//               View my work
//             </a>
//             <a
//               href="#contact"
//               className="rounded-full border border-[#211c48] px-6 py-3 text-sm font-medium text-[#f1efff] transition-colors hover:border-[#00e5c7] hover:text-[#00e5c7]"
//             >
//               Get in touch
//             </a>
//           </div>
//         </motion.div>

//         <div className="relative h-[380px] sm:h-[460px] md:h-[560px]">
//           <CoreCanvas />
//         </div>
//       </div>

//       <a
//         href="#about"
//         className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8c89a6]"
//       >
//         Scroll
//         <span className="flex h-8 w-5 justify-center rounded-full border border-[#211c48] pt-1.5">
//           <span className="h-1.5 w-1 animate-bounce rounded-full bg-[#00e5c7]" />
//         </span>
//       </a>
//     </section>
//   );
// };

// export default Hero;


//NEW CODE
import profileImage from "../profile.png";
import { motion } from "framer-motion";
import StarsCanvas from "./canvas/StarsCanvas";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <StarsCanvas />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-24 sm:px-10 md:grid-cols-2 md:pt-0">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#00e5c7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00e5c7]" />
            Available for new roles
          </span>

          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="hero-heading-gradient">Rukhsar</span>.
            <br />
            I turn data into
            <br />
            intelligent solutions.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#8c89a6]">
            Data Analyst and AI & Data Science enthusiast focused on
            transforming complex data into meaningful insights,
            interactive dashboards, and intelligent applications.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-[#8452ff] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#9666ff]"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#211c48] px-6 py-3 text-sm font-medium text-[#f1efff] transition-colors hover:border-[#00e5c7] hover:text-[#00e5c7]"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - PROFILE PICTURE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 flex h-[380px] items-center justify-center sm:h-[460px] md:h-[520px]"
        >
          <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#8452ff]/20 blur-3xl" />

            {/* Profile Image */}
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-2 border-[#00e5c7]/40 shadow-2xl sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px]">

              <img
                src={profileImage}
                alt="Rukhsar Rasheed"
                className="h-full w-full object-cover"
              />

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8c89a6]"
      >
        Scroll

        <span className="flex h-8 w-5 justify-center rounded-full border border-[#211c48] pt-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-[#00e5c7]" />
        </span>
      </a>
    </section>
  );
};

export default Hero;