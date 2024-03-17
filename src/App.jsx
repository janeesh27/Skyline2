import { useState } from "react";
import "./app.css";
import MainButton from "./components/MainButton";

function App() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-row bg-black">
        <div className="w-[50vw] border-blue-300 border-[2px]"></div>
        <div className="w-[50vw] border-blue-300 border-[2px]"></div>
        <div className=" absolute z-[50] w-[100vw] h-screen">
          <div className="absolute">
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
              <div className="bg-black input w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full  border-blue-300 border-[5px]">
                <div className="flex mt-[200px] gap-y-2 flex-col">
                  <label className="text-blue-300 w-[fit] mx-auto text-[12px] font-bold">
                    Enter Your Password
                  </label>
                  <input
                    className="bg-black border-blue-300  placeholder:text-blue-300 placeholder:text-center rounded-lg p-2 border-[1px] h-[60px] w-[300px] mx-auto"
                    placeholder="Enter Your Password"
                    type="password"
                  />
                  <MainButton text="ENTER LAB" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
