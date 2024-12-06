"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Exploring Airbnb Market Trends",
    title: "project 1",
    description:
      "New York is one of the most-visited cities in the world, and Airbnb plays a significant role in meeting the high demand for temporary lodging. In this analysis, I explored 2019 Airbnb data to uncover insights into pricing, room types, and reviews.",
    stack: [{ name: "Python" }, { name: "Numpy" }, { name: "Pandas" }],
    image: "/assets/projects/proj1.jpg",
    live: "",
    github: "https://github.com/caryhtan/Exploring-Airbnb-Market-Trends",
  },
  {
    num: "02",
    category: "Modeling Car Insurance Claim Outcomes",
    title: "project 2",
    description:
      "Machine learning is transforming the data-driven insurance industry. I analyzed On the Road car insurance dataset to identify the most predictive feature for forecasting claims by training and evaluating logistic regression models for each feature.",
    stack: [{ name: "Python" }, { name: "Numpy" }, { name: "Pandas" }, { name: "Statsmodels" }, { name: "Machine Learning" }],
    image: "/assets/projects/proj2.jpg",
    live: "",
    github: "https://github.com/caryhtan/Modeling-car-insurance-claim-outcomes",
  },
  {
    num: "03",
    category: "Reducing Traffic Mortality in the USA",
    title: "project 3",
    description:
      "I analyzed U.S. traffic accident data to uncover patterns and key factors like speeding and alcohol use. Using Python, I applied PCA and KMeans clustering to group states and prioritize safety interventions.",
    stack: [{ name: "Python" }, { name: "Seaborn" }, { name: "Matplotlib" }, { name: "Scikit-learn" }, { name: "PCA" }, { name: "KMeans" }],
    image: "/assets/projects/proj3.jpg",
    live: "",
    github: "https://github.com/caryhtan/Reducing-Traffic-Mortality-in-the-USA",
  },
  {
    num: "04",
    category: "Word Frequency in Classic Novels",
    title: "project 4",
    description:
      "I explored the most frequent words in Herman Melville's Moby Dick by scraping and analyzing its text using Python. Leveraging tools like requests, BeautifulSoup, and nltk, I cleaned and processed the data to remove metadata, punctuation, and stopwords. I then calculated word frequencies and visualized the results, uncovering prominent themes like \"whale,\" \"sea,\" and \"man\" that reflect the novel's focus and style.",
    stack: [{ name: "Python" }, { name: "BeautifulSoup" }, { name: "NLP" }],
    image: "/assets/projects/proj4.jpg",
    live: "",
    github: "https://github.com/caryhtan/Word-Frequency-in-Classic-Novels",
  },
  {
    num: "05",
    category: "Analyzing Unicorn Companies",
    title: "project 5",
    description:
      "I investigated the rise of unicorn companies to uncover trends in high-growth industries between 2019 and 2021. Using SQL, I identified technology, healthcare, and finance as the top-performing industries based on the number of new unicorns. I examined their growth timelines, average valuations (over $2 billion), and dominance in driving innovation, providing insights into emerging market opportunities for strategic investments.",
    stack: [{ name: "SQL" }],
    image: "/assets/projects/proj5.jpg",
    live: "",
    github: "https://github.com/caryhtan/Analyzing-Unicorn-Companies",
  }
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.realIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60 text-justify">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              loop={true}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
