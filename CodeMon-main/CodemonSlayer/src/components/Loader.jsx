import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

function Loader() {
  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
  }, []);
  return (
    <div className="h-screen w-screen overflow-hidden fixed top-0 left-0 z-[1000] bg-black">
      <div className="relative grid grid-cols-2 justify-center items-center h-full loader_container">
        <div className=" ml-3 flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-5xl font-jersey loader_mainText">
            There is a Solution Waiting for you
          </h1>

          <div className="pt-12 flex justify-center items-center gap-x-12 loader_btnContainer">
            <button className="text-xl font-mukta excite_btn pl-12 pr-12 loader_button">
              Show me what you got.
            </button>

            <button className="bg-grey text-xl font-mukta loader_button">
              Skip This
            </button>
          </div>
        </div>

        <div className="w-full h-full bg-blue-500">

        </div>
      </div>
    </div>
  );
}

export default Loader;
