import { useState } from 'react';

const Test2_React = () => {
  const [show, toggle] = useState(false);


  return (
    <div>테스트2 - 리액ㅡ
    <button onClick={() => toggle(!show) }>Toggle </button>
    <p>{show ? '켜짐' : '꺼짐'}</p>
    </div>

  );

};

export default Test2_React;