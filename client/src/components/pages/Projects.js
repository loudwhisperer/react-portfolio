import React from "react";
import { Link } from "react-router-dom";
import markTheMiddle from "../../assets/images/markthemiddle.png";
import theTable from "../../assets/images/the-table.png"
import weather from "../../assets/images/weather.png"
import jate from "../../assets/images/jate.png";
import noteKeeper from "../../assets/images/notes.png";
import scheduler from "../../assets/images/page-intro.png";

export default function Projects() {
  let Item = [
    {
      name: "Mark Me in the Middle",
      link: "https://artiecannv.github.io/mark-me-in-the-middle/",
      description:
        "Uses the Mapbox JS Framework to utilize a map which will create a line between two points and mark the exact center between the two then using the Four Square API returns mulitple locations in that center point",
      image: markTheMiddle,
    },
    {
      name: "The Table",
      link: "https://the-table-app.herokuapp.com/",
      description:
        "The Table gives users a space to create, manage and give details to a board game, video game or tabletop roleplaying game meetup and has emailing built in to notify users attached to a game of thier invite status and the detsails therein. ",
      image: theTable,
    },
    {
      name: "Weather Application",
      link: "https://loudwhisperer.github.io/info-for-the-stormy-folks/",
      description:
        "Allows users to check a five dat forecast of the current weather in their location and saves prior searches so there is no need to query again",
      image: weather,
    },
    {
      name: "JATE",
      link: "https://jate2023bb.herokuapp.com/",
      description:
        "A simple text editor that utilises PWA to allow an indexedDB, Application Download and offline use",
      image: jate,
    },
    {
      name: "Note Keeper",
      link: "https://notekeeper-guide-thingy.herokuapp.com/",
      description:
        "Utilizes Express JS and Sequelize to create API routes that allow users to create, save and a simplfied database (JSON DB) of their previous notes",
      image: noteKeeper,
    },
    {
      name: "Work Day Scheduler",
      link: "https://loudwhisperer.github.io/supreme-couscous-scheduler-ultra/",
      description: "Utilizes Bootstrap CSS, Dayjs, Jquery and Local Storage to give the user the ability to scedule their workday by hour and save those times to local storage by hour.",
      image: scheduler
    },
  ];
  return (
    <>
      <h1 className="text-7xl m-24 text-center underline">Past Projects </h1>
      <section className="flex justify-center align-center flex-wrap ml-44 mr-44 mt-8">
        {Item.map((project) => {
          return (
            <Link to={project.link} target="_blank">
              <div class="max-w-sm rounded overflow-hidden shadow-lg m-4  w-4/5">
                <img class="w-full" src={project.image} alt="App Photo" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{project.name}</div>
                  <p class="text-gray-700 text-base">{project.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
