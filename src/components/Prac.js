import React, { useState } from "react";

const Prac = () => {
  const [message, setMessage] = useState("");
  const [password, setPassWord] = useState("");
  const onChangeMessage = (e) => setMessage(e.target.value); //온체인지에 변경될 값
  const onChangePassWord = (e) => setPassWord(e.target.value); //패스워드에 변경될 값

  const onClick = (e) => {
    if (message.length > 8 && password.length > 8) {
      alert("로그인성공");
    } else {
      alert("로그인실패 아이디와 패스워드를 확인해주세요");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form>
        <fieldset>
          <ul>
            <li>
              <lable for="id"></lable>
              <input
                type="text"
                id="'id"
                placeholder="id 6글자이상"
                value={message} // e.target 이 벨류를 가르킨다
                onChange={onChangeMessage}
              />
            </li>
            <li>
              <lable for="fassword"></lable>
              <input
                type="password"
                id="Password"
                placeholder="비밀번호입력 8글자이상"
                value={password}
                onChange={onChangePassWord}
              />
            </li>
          </ul>
          <button onClick={onClick}>로그인</button>
        </fieldset>
      </form>
      <button>회원가입</button>
      <button>아이디찾기</button>
    </div>
  );
};

export default Prac;

/*6글자 이하로 아이디를 입력했을시 로그인창을 눌렀을때 6글자이상 입력해주세요 
 6글자 이상눌럿을대 로그인성공 메세지
 
*/
