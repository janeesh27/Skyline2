import { useState, useEffect } from "react";
import "./app.css";
import MainButton from "./components/MainButton";
import { motion } from "framer-motion";
import ExitButton from "./components/ExitButton";
import Counter from "./components/Counter";

function App() {
  const [password, setPassword] = useState("");
  const [isTimeExpired, setIsTimeExpired] = useState(false);
  const inputHandler = (e) => {
    setPassword(e.target.value);
  };

  const getLoginStatus = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };
  const [isLoggedIn, setIsLoggedIn] = useState(getLoginStatus());

  const setLoginStatus = (status) => {
    localStorage.setItem("isLoggedIn", status.toString());
    setIsLoggedIn(status);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === "skyline" && !isTimeExpired) {
      setLoginStatus(true);
    } else {
      alert(
        isTimeExpired
          ? "Time Exhausted"
          : "Login Failed, Please enter correct password"
      );
    }
  };

  const exitLab = () => {
    setLoginStatus(false);
  };

  const handleTimerEnd = () => {
    setIsTimeExpired(true);
    setLoginStatus(false);
    alert("Time has expired!");
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] overflow-hidden flex flex-row gap-1 bg-black">
        <motion.div
          drag={!isLoggedIn ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          initial={{ x: 0 }}
          animate={{ x: isLoggedIn ? -700 : 0 }}
          transition={{ duration: 1.5 }}
          className="door1 w-[50vw] border-blue-300 border-[2px]"
        ></motion.div>
        <motion.div
          drag={!isLoggedIn ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          initial={{ x: 0 }}
          animate={{ x: isLoggedIn ? 700 : 0 }}
          transition={{ duration: 1.5 }}
          className="door2 w-[50vw] border-blue-300 border-[2px]"
        ></motion.div>
        {isLoggedIn ? (
          <>
            <div className="absolute z-[100]">
              <div className="flex justify-center w-[100vw] text-white flex-row">
                <div className="flex items-center h-[100vh] w-[50vw] justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-[rgb(0,255,255)] text-[44px] font-bold border-[rgb(0,255,255)] border-[2px] rounded-lg py-2 px-4"
                  >
                    <Counter onTimerEnd={handleTimerEnd} />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center h-[100vh] w-[50vw] justify-center"
                >
                  <ExitButton onClick={exitLab} />
                </motion.div>
              </div>
            </div>
          </>
        ) : null}
        <div className=" absolute z-[50] w-[100vw] h-screen">
          <div className="absolute">
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
              <motion.div
                className="login bg-black input w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full  border-blue-300 border-[5px] "
                initial={{ rotateZ: 0, opacity: 1 }} // Initial rotation
                animate={{
                  rotateZ: isLoggedIn ? 360 : 0,
                  opacity: isLoggedIn ? 0 : 1,
                }}
                transition={{ duration: 1 }}
              >
                <div className="flex mt-[20px] sm:mt-[100px] gap-y-2 flex-col">
                  <div className="flex justify-center">
                    <img
                      src="./fingerprint.svg"
                      className="w-[60px] h-[100px]"
                    />
                  </div>
                  <label className="text-blue-300 w-[fit] mx-auto text-[12px] font-bold">
                    Enter Your Password
                  </label>
                  <input
                    className="bg-black border-blue-300 text-center placeholder:text-blue-300 placeholder:text-center rounded-lg p-2 border-[1px] h-[60px] w-[250px] sm:w-[300px] mx-auto"
                    placeholder="Enter Your Password"
                    type="password"
                    value={password}
                    onChange={(e) => inputHandler(e)}
                  />
                  <MainButton
                    onClick={(e) => submitHandler(e)}
                    text="ENTER LAB"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
