import { useFormContext } from '../FormContext';
import { progressData } from '../data/ProgressData';

const ProgressBar = ({ page, setPage }) => {
  const handleStepClick = async (index) => {
    let isValid = false;

    // Validate based on the current step index
    switch (index) {
      case 0:
        isValid;
        break;
      case 1:
        isValid;

        break;
      case 2:
        isValid;
        break;
      case 3:
        isValid;
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      setPage(index);
    }
  };
  return (
    <div className="progressbar">
      <div className="progressbar__steps">
        {progressData.map((progress, index) => (
          <div
            key={index}
            className="progressbar__step-info"
            onClick={() => handleStepClick(index)}
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
