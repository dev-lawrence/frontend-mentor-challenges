import { useState } from 'react';
import Star from './assets/images/icon-star.svg';
import IconPlus from './assets/images/icon-plus.svg';
import IconMinus from './assets/images/icon-minus.svg';
import { faqData } from './faqData';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      setIsClicked(true);
    }

    setIsClicked(index);
  };

  return (
    <>
      <div className="container">
        <div className="bg-img"></div>

        <div className="faq-container">
          <div className="title">
            <img className="star" src={Star} alt="" />
            <h1>FAQs</h1>
          </div>
          {faqData.map((item, index) => (
            <div className="faq" key={index} onClick={() => toggleFaq(index)}>
              <div className="question">
                <h2>{item.question}</h2>

                {isClicked === index ? (
                  <img className="icon" src={IconMinus} alt="" />
                ) : (
                  <img className="icon" src={IconPlus} alt="" />
                )}
              </div>

              <div className={`content ${isClicked === index ? 'show' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
