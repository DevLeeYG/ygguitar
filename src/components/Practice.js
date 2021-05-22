import React, { useState } from "react";

function Practice() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit) => {    //옵션스 안에 과일들이 들어있다
    return <option value={fruit}>{fruit}</option>;
  });

  const handleFruit = (event) => {
    setChoice(event.target.value); //변경값을 벨류에 저장한다
  };

  return (
    <div className="App">
      <select value={choice} onChange={handleFruit}> {/* 과일의 값을 바꿔준다 */}
        {options}
      </select>
      <h3>You choose "{choice}"</h3>   {/* 기본값 apple*/}
    </div>
  );
}

export default Practice;



import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    if (showPopup === true) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      {/* 버튼을 클릭했을 때 Pop up 의 open/close 가 작동하도록
          button tag를 완성하세요. */}
      <button className="open" onClick={togglePopup}>
        Open me
      </button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;