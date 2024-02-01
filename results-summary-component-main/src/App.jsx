import { data } from './data.js';

const App = () => {
  return (
    <>
      <div className="app">
        <section className="container">
          <div className="d-grid">
            <div className="result">
              <h1>Your Result</h1>
              <div>
                <div className="score">
                  <p>76</p>
                  <span>of 100</span>
                </div>
              </div>

              <div className="text">
                <h2>Great</h2>
                <p>
                  You Scored higher than 65% of the people who have taken the
                  test
                </p>
              </div>
            </div>
            <div className="summary">
              <h3>Summary</h3>
              {data.map((item, index) => (
                <div key={index} className="entry">
                  <div className="flex">
                    <div className="stat">
                      <img src={item.icon} alt="" />
                      <h4>{item.category}</h4>
                    </div>

                    <div className="score">
                      <p>{item.score}/100</p>
                    </div>
                  </div>
                </div>
              ))}

              <p></p>

              <button>Continue</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
