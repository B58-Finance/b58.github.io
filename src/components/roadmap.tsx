import React, { useState, useEffect, useRef } from "react";
import RoadmapBody from "./roadmap-body"

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState("lovelace");

  return (
    <section id="roadmap" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
        <div className="flex flex-wrap content-center lg:mr-10 p-6">
          <h1 className="text-3xl lg:text-6xl font-medium leading-tight">
            Our Roadmap to the future of finance
          </h1>
        </div>
        <div className="lg:ml-6 p-6 pt-2 lg:pt-6">
          <p className="text-base text-justify lg:text-left lg:mr-8">
            Here you can find our roadmap of work in progress and also planned work.
            <br /><br />
            Our phases are inspired by pioneers of computer science, which without their work it wouldn't be possible today.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 md:col-gap-6 row-gap-10 md:row-gap-6 mb-10">
        <div id="lovelace" 
          className="group mx-auto item-center text-center relative cursor-pointer"
          onClick={() => setActiveTab((v) => "lovelace")}
        >
          <div className="absolute w-16 h-full left-0 bg-blue-light group-hover:bg-blue-medium z-0">
            <p className="text-2xl font-bold text-white group-hover:text-blue-light transition-text-color duration-200">
              01
            </p>
          </div>
          <div className="relative ml-8 mr-8 mt-10 z-10">
            <img src="/images/ada_lovelace.jpeg" className="w-40 h-40 inline-block object-cover shadow-small dark:shadow-smallDark hover:shadow-medium dark:hover:shadow-mediumDark transition-shadow duration-200" />
            <div className="text-left mt-2 mb-2 ml-10">
              <p className="font-bold">Lovelace</p>
              <small>Foundation</small>
            </div>
          </div>
        </div>
        <div id="martin" className="group mx-auto item-center text-center relative cursor-pointer"
          onClick={() => setActiveTab((v) => "martin")}
        >
          <div className="absolute w-16 h-full left-0 bg-blue-light group-hover:bg-blue-medium z-0">
            <p className="text-2xl font-bold text-white group-hover:text-blue-light transition-text-color duration-200">
              02
            </p>
          </div>
          <div className="relative ml-8 mr-8 mt-10 z-10">
            <img src="/images/per_martin.jpeg" className="w-40 h-40 inline-block object-cover shadow-small dark:shadow-smallDark hover:shadow-medium dark:hover:shadow-mediumDark transition-shadow duration-200" />
            <div className="text-left mt-2 mb-2 ml-10">
              <p className="font-bold">Martin-Löf</p>
              <small>Smart Contracts</small>
            </div>
          </div>
        </div>
        <div id="frege" className="group mx-auto item-center text-center relative cursor-pointer"
          onClick={() => setActiveTab((v) => "frege")}
        >
          <div className="absolute w-16 h-full left-0 bg-blue-light group-hover:bg-blue-medium z-0">
            <p className="text-2xl font-bold text-white group-hover:text-blue-light transition-text-color duration-200">
              03
            </p>
          </div>
          <div className="relative ml-8 mr-8 mt-10 z-10">
            <img src="/images/gottlob_frege.jpeg" className="w-40 h-40 inline-block object-cover shadow-small dark:shadow-smallDark hover:shadow-medium dark:hover:shadow-mediumDark transition-shadow duration-200" />
            <div className="text-left mt-2 mb-2 ml-10">
              <p className="font-bold">Frege</p>
              <small>Adoption</small>
            </div>
          </div>
        </div>
        <div id="holberton" className="group mx-auto item-center text-center relative cursor-pointer"
          onClick={() => setActiveTab((v) => "holberton")}
        >
          <div className="absolute w-16 h-full left-0 bg-blue-light group-hover:bg-blue-medium z-0">
            <p className="text-2xl font-bold text-white group-hover:text-blue-light transition-text-color duration-200">
              04
            </p>
          </div>
          <div className="relative ml-8 mr-8 mt-10 z-10">
            <img src="/images/betty_holberton.jpeg" className="w-40 h-40 inline-block object-cover shadow-small dark:shadow-smallDark hover:shadow-medium dark:hover:shadow-mediumDark transition-shadow duration-200" />
            <div className="text-left mt-2 mb-2 ml-10">
              <p className="font-bold">Holberton</p>
              <small>Exchange</small>
            </div>
          </div>
        </div>
      </div>
      <RoadmapBody activeTab={activeTab}/>
    </section>
  )
}

export default Roadmap
