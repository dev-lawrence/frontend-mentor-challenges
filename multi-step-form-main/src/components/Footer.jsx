import { progressData } from '../data/ProgressData';
import { useFormContext } from '../FormContext';

const Footer = ({ page, setPage }) => {
  const {
    setFormSubmitted,
    validatePersonalInfo,
    validateSelectPlan,
    validateAddOn,
  } = useFormContext();
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const lastPage = page === progressData.length - 1;

  const handleButtonClick = () => {
    if (lastPage) {
      setFormSubmitted(true);
    } else if (page === 0) {
      if (validatePersonalInfo()) {
        nextPage();
      }
    } else if (page === 1) {
      if (validateSelectPlan()) {
        nextPage();
      }
    } else if (page === 2) {
      if (validateAddOn()) {
        nextPage();
      }
    } else {
      nextPage();
    }
  };
  return (
    <div className="buttons">
      {page !== 0 && (
        <button
          className="btn prev-btn"
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Go Back
        </button>
      )}

      <div></div>

      <button
        className={`btn next-btn ${lastPage ? 'confirm' : ''}`}
        onClick={handleButtonClick}
      >
        {lastPage ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default Footer;
