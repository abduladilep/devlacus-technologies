import { useState } from "react";
import { questions } from "./api";
import MyFaq from "./MyFaq";
import "./faq.css";
import logo from "../assets/logo.png";

function Faq() {
  const [data, setData] = useState(questions);
  return (
    <>
      <div className="main-main">
        <div className="hero">
          <div className="hero-left">
            <h2> Innovate</h2>
            <div>
              <div className="hero-hand-icon"></div>
              <p>Frequently</p>
              <p>Asked question</p>
            </div>

            <div className="hero-latest-btn">
              <div>Ask Me </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={logo} alt="faq" />
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-row">
            {data.map((curElem) => (
              <MyFaq
                key={curElem.id}
                question={curElem.question}
                answer={curElem.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
