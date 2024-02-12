import { progressData } from '../data/ProgressData';
import { useFormContext } from '../FormContext';

const Footer = ({ page, setPage }) => {
  const { setFormSubmitted } = useFormContext();
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const lastPage = page === progressData.length - 1;

  const handleButtonClick = () => {
    if (lastPage) {
      console.log('last page');
      setFormSubmitted(true);
    } else {
      nextPage();
      console.log('next page');
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
      {/* 
      {formSubmitted ? (
        <ThankYou />
      ) : (
        <button
          className={`btn next-btn ${lastPage ? 'confirm' : ''}`}
          onClick={handleButtonClick}
        >
          {lastPage ? 'Confirm' : 'Next Step'}
        </button>
      )} */}

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
