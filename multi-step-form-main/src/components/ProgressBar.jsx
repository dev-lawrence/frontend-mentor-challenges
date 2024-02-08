import { progressData } from '../data/ProgressData';

const ProgressBar = ({ page, setPage }) => {
  return (
    <div className="progressbar">
      <div className="progressbar__steps">
        {progressData.map((progress, index) => (
          <div
            key={index}
            className="progressbar__step-info"
            onClick={() => setPage(index)}
          >
            <ol className={`${page === index ? 'active' : ''}`}>
              {progress.step}
            </ol>
            <div className="progressbar__step-text">
              <span>{progress.title}</span>
              <h5>{progress.info}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
