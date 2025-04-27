import { motion } from "framer-motion";
import Section from "./Section";
import { Gradient } from "./design/Services";
import FaqItem from "./design/FaqItem";

const faq = [
  {
    id: 1,
    question: "Why to Attend?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold">• Be recognized as a leader:</p>
          <p>Position your organization as a pioneer in AI and analytics, showcasing your impact on the banking sector.</p>
        </div>
        <div>
          <p className="font-semibold">• Celebrate your achievements:</p>
          <p>Highlight your innovative projects, solutions, or initiatives that have set benchmarks for excellence.</p>
        </div>
        <div>
          <p className="font-semibold">• Inspire the industry:</p>
          <p>Share your success story and inspire others to embrace the transformative power of AI and analytics.</p>
        </div>
        <div>
          <p className="font-semibold">• Network with the best:</p>
          <p>Join an elite gathering of industry leaders, innovators, and decision-makers shaping the future of banking.</p>
        </div>
      </div>
    )
  },
  
  {
    id: 2,
    question: "How to Nominate?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold">• Submit your entry online:</p>
          <p>Submit your nominations digitally showcasing innovation and significant achievements.</p>
        </div>
        <div>
          <p className="font-semibold">• Share your success story:</p>
          <p>Attach a document and provide compelling details of your project initiative highlighting the problem statement, solutions and measurable impact.</p>
        </div>
        <div>
          <p className="font-semibold">• Meet the deadline:</p>
          <p>Ensure you submit your nomination by TBA to be considered.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    question: "Who Can Apply?",
    answer: "Banks, financial institutions and individuals making significant contributions to the advancement of AI and analytics in banking are encouraged to apply. Open to organizations and individuals operating in the Middle East region, contributing to the advancement of AI and analytics in the banking and financial services sector."
  },
  {
    id: 4,
    question: "What is the eligibility criteria?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold">• Regional Focus:</p>
          <p>Open to organizations and individuals operating in the Middle East region, contributing to the advancement of AI and analytics in the banking and financial services sector.</p>
        </div>
        <div>
          <p className="font-semibold">• Relevance:</p>
          <p>Nominations must demonstrate a clear impact on the banking or financial services industry, showcasing innovation, efficiency, customer experience, or operational improvements enabled by AI or data analytics.</p>
        </div>
        <div>
          <p className="font-semibold">• Demonstrated Results:</p>
          <p>Projects, initiatives, or contributions must have been implemented and yielded measurable outcomes in recent past.</p>
        </div>
        <div>
          <p className="font-semibold">• Innovation and Originality:</p>
          <p>Submissions should highlight originality and creative use of AI and analytics to address industry challenges, improve processes, or introduce groundbreaking solutions.</p>
        </div>
        <div>
          <p className="font-semibold">• Multiple Entries:</p>
          <p>Organizations or individuals may submit nominations for multiple categories, provided each submission meets the specific requirements for that category.</p>
        </div>
      </div>
    )
  }
];

const Faq = () => {
  const halfLength = Math.ceil(faq.length / 2);

  return (
    <Section crosses id="agenda">
      <Gradient />
      
      <div className="container relative  ">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-purple-500 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
         FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            {faq.slice(0, halfLength).map((item) => (
              <FaqItem key={item.id} item={item}  />
            ))}
          </div>

          <div className="relative">
            {faq.slice(halfLength).map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="container relative z-2 px-4 md:px-6 py-8 md:py-16">
        <div className="relative z-1 items-center min-h-[20rem] mb-8 md:mb-12 bg-conic-gradient p-0.25 rounded-[2.5rem] overflow-hidden">
          <div className="relative p-8 md:p-12 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="relative z-1">
              <motion.div 
                className="max-w-[55rem] mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl text-n-1 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  Don't miss this opportunity to shine a spotlight on your leadership, innovation, and commitment to excellence.
                </motion.h2>

                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-purple-500 mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Mark your calendar!
                </motion.h1>

                <div className="space-y-6">
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-n-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    Event date: 4<sup>st</sup> September 2025
                  </motion.div>

                  <motion.div
                    className="text-2xl md:text-4xl text-n-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    Location: Hyatt Regency Riyadh Olaya
                  </motion.div>
                </div>

                <motion.p
                  className="text-n-2 text-lg md:text-xl mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  Let the region know how you're revolutionizing the banking industry. Nominate now and take the stage to celebrate your success!
                </motion.p>
              </motion.div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-50 bg-radial-gradient blur-[6rem]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;