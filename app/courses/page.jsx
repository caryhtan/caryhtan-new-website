"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "COMS 1004",
    title: "Introduction to Computer Science and Programming in Java",
    description: `I took an introductory computer science course focused on fundamental concepts for science and engineering students.
  
  The course covered the basics of algorithm design, teaching me how to break down problems and create efficient solutions.
    
  I also gained hands-on experience with Java programming, learning about variables, control structures, functions, and object-oriented programming principles.
    
  This course gave me a solid foundation in computational thinking and programming, which I continue to build on in more advanced computer science studies.`,
    href: "",
  },  
  {
    num: "COMS 3134",
    title: "Data Structures in Java",
    description: `I took a course that focused on foundational data types and structures essential for computer science.
    
    The course covered arrays, stacks, queues, singly and doubly linked lists, trees, sets, and graphs, providing hands-on experience in implementing and utilizing these structures.
    
    I also learned programming techniques such as sorting and searching algorithms, hashing, and garbage collection, all taught using Java.
    
    Additionally, the course introduced me to storage management concepts and the basics of algorithm analysis, enabling me to evaluate the efficiency and performance of different solutions.
    
    This course strengthened my understanding of how data is organized, processed, and optimized in software applications.`,
    href: "",
  },
  
];

import { motion } from "framer-motion";

const Courses = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
