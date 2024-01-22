import { useRef, useState } from "react";
import circle from "../Public/circle.png";
import cross from "../Public/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const App = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'/>`;
      data[num] = "0";
      setCount(++count);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `The winner is: <img src='${cross}'  />`;
    } else {
      titleRef.current.innerHTML = `The winner is: <img src='${circle}'  />`;
    }
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic tac toe game";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="text-center mt-6">
      <div className="flex justify-center ">
        <h1 ref={titleRef} className="text-5xl font-sans items-center flex ">
          Tic tac game.
        </h1>
      </div>
      <div className="flex h-boardH w-boardW m-auto justify-center gap-2 mt-10">
        <div className="gap-2 flex flex-col">
          <div
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
        </div>
        <div className="gap-2 flex flex-col">
          <div
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
            className="h-40 w-40 bg-black/[0.5] hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
        </div>
        <div className="gap-2 flex flex-col">
          <div
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
          <div
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
            className="h-40 w-40 bg-black/[0.5]  hover:border-white/[0.4] hover:border cursor-pointer flex rounded-xl"
          ></div>
        </div>
      </div>
      <button
        onClick={() => {
          reset();
        }}
        className="duration-200 cursor-pointer text-3xl border p-3 rounded-lg hover:text-black hover:bg-white "
      >
        Reset game
      </button>
    </div>
  );
};

export default App;
