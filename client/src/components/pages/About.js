import React from "react";
import mePic from "../../assets/images/IMG_3487.jpg";

export default function About() {
  return (
    <section className="m-3 ">
      <h1 className="text-3xl mx-3 my-4 text-center">
        About A Human Named Brendan Borowksi
      </h1>
      <article className="">
    
            <div class="max-w-sm w-full lg:max-w-full lg:flex m-3">
              <div
                id="meCard"
                class=" h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
              ></div>
              <div class="border-r border-b border-l-0 border-gray-400 border-width: 10px lg:border-t lg:border-gray-400 bg-white lg:rounded-tl-none lg:rounded-bl-none  lg:rounded p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2 underline text-center">
                    Who Am I?
                  </div>
                  <p class="text-gray-700 text-base">
                    I am young Full Stack Programmer self-taught and a recent
                    <br />
                    graduate from the University of Denver Full Stack Bootcamp.
                    <br />
                    I come from humble roots in South Florida and at a young age
                    traveled
                    <br />
                    on my own dime all over America seeking out the ways
                    different
                    <br />
                    geographies ebb and flow.
                    <br />
                  </p>
                </div>
              </div>
            </div>
      </article>
      <article>
        <h3>Applicable Skills</h3>
        <h4>Frontend</h4>
        <p>
          React JS, GraphQL, Vue JS, Javascript ES6, CSS3, HTML5, Restful API,
          Bootstrap CSS, Tailwind CSS
        </p>
        <h4>Backend</h4>
        <p>
          Mongoose, Sequelize, MySQL, MongoDB, ExpressJS, GraphQL, Restful API,
          IndexedDB, PWA
        </p>
      </article>
      <article>
        <h3>Oher Projects I am Working On</h3>
        <h5>Altered Table Top Roleplaying Game Application</h5>
        <p>
          This has been my baby for a long time, I am a game designer by nature
          which affords me certain advantages since I work well with complex
          granular systems
        </p>
      </article>
    </section>
  );
}
