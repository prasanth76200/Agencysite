'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tabs = [
  {
    title: 'How much do your services cost?',
    description:
      'Our pricing depends on the project’s scope and complexity. Contact us at prasanth76200@gmail.com for a free consultation to discuss your needs.',
  },
  {
    title: 'How long does it take to complete a project?',
    description:
      'The timeline depends on the project’s scope and complexity. We provide a clear timeline after discussing your requirements.',
  },
  {
    title: 'Do you offer responsive and mobile-friendly designs?',
    description:
      'Yes, we prioritize creating responsive and mobile-friendly designs to ensure an optimal user experience on all devices.',
  },
  {
    title: 'Do you offer post-project support?',
    description:
      'Yes, we provide ongoing support and maintenance to ensure your application remains up-to-date and performs optimally.',
  },
  {
    title: 'What technologies do you specialize in?',
    description:
      'We specialize in the MERN/MEAN stacks, ReactNative, Java, Spring Boot, Go, MySQL, and modern front-end frameworks.',
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl dark:text-white text-black font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border shadow-xl shadow-purple-400 rounded-lg p-2 border-black dark:bg-[#111111] bg-[#ffffff]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${index !== tabs.length - 1 ? 'border-b' : ''}`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black flex gap-2`}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0'
                  } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faqs;
