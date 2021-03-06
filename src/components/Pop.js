import React, { useState } from "react";


function Pop() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
     if(showPopup===false){
         setShowPopup(true)
     }else{
    setShowPopup(false)
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      {/* 버튼을 클릭했을 때 Pop up 의 open/close 가 작동하도록
          button tag를 완성하세요. */}
      <button className="open">Open me</button>
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

export default Pop