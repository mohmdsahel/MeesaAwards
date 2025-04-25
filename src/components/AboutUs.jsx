import Section from "./Section";
import { motion } from "framer-motion";

import { Gradient } from "./design/Services";
import { service3 } from "../assets";


const AboutUs = () => {
  return (
    <Section crosses id="about">
      <Gradient />
      
      <div className="container px-4 md:px-6 py-8 md:py-16">
        <div className="relative z-1 items-center min-h-[20rem] mb-8 md:mb-12 bg-conic-gradient p-0.25 rounded-[2.5rem] overflow-hidden">
          <div className="relative p-4 md:p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="relative z-1">
              <div className="relative lg:left-40 z-2 mx-auto">
                <motion.div 
                  className="max-w-[50rem] mx-auto text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <motion.h2 
                    className="h2 text-center mb-6 md:mb-8 text-2xl md:text-4xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                  >
                    Enterprise AI Tech Award 2025
                  </motion.h2>
                  <motion.div
                    className="space-y-4 md:space-y-6 px-3 md:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {[0, 1, 2].map((index) => (
                      <p key={index} className="body-2 text-n-2 text-center text-sm md:text-base">
                        {index === 0 && "Are you shaping the future of banking with AI-driven innovation and analytics excellence? Here's your opportunity to gain the recognition you deserve! The Middle East Banking AI and Analytics Summit & Awards 2025 is your platform to showcase your achievements."}
                        {index === 1 && "Scheduled on 1st May 2025 in Riyadh, this event stands as the region's premier platform for showcasing transformative ideas, groundbreaking technologies, and exceptional talent in the banking and financial sectors."}
                        {index === 2 && "We're calling on visionary leaders, trailblazing institutions, and outstanding teams across the Middle East banking and financial sectors to step forward and nominate themselves for one of our prestigious awards. Join us in celebrating excellence and innovation in AI and analytics."}
                      </p>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block">
              <img
                className="w-full h-full object-contain object-left opacity-30"
                width={150}
                height={100}
               
                src={service3}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;