import { useState, useEffect } from 'react';
import { data } from './data.js';
import Rocket from './assets/rocket.svg';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const removeRocket = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => {
      clearTimeout(removeRocket);
    };
  }, []);

  const summaryTitleColor = (category) => {
    const item = data.find((entry) => entry.category === category);
    return item ? item.titleColor : '';
  };

  const summaryBgColor = (category) => {
    const item = data.find((entry) => entry.category === category);
    return item ? item.bgColor : '';
  };

  return (
    <>
      <section className="container">
        <div className="d-grid">
          <div className="result">
            <h1>Your Result</h1>
            <div>
              <div className="score">
                <img className="rocket" src={Rocket} alt="" />
                {isVisible && (
                  <div
                    className={`score-text ${
                      isVisible ? 'score-text-animation' : ''
                    }`}
                  >
                    <p>76</p>
                    <span>of 100</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text">
              {!isVisible ? (
                <h2>Loading...</h2>
              ) : (
                <div className="show-grade">
                  <h2>Great</h2>
                  <p>
                    You Scored higher than 65% of the people who have taken the
                    test
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            {data.map((item, index) => (
              <div
                key={index}
                className={`summary-entry ${summaryBgColor(item.category)}`}
              >
                <div className="flex">
                  <div className="stat">
                    <img src={item.icon} alt="" />
                    <h4 className={summaryTitleColor(item.category)}>
                      {item.category}
                    </h4>
                  </div>

                  <div className="score">
                    <p>
                      <strong>{item.score}</strong> / 100
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button>Continue</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
