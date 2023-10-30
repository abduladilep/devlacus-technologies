import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const MyFaq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const toggleAnswer = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="main-header">
        <h4>{question}</h4>
        <p onClick={toggleAnswer} style={{ color: "red" }}>
          {show ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </p>

        {show && <p className="answers">{answer}</p>}
      </div>
    </>
  );
};

export default MyFaq;
