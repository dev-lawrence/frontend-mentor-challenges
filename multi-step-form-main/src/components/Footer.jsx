import { progressData } from '../data/ProgressData';

const Footer = ({ page, setPage }) => {
  const lastStep = page === progressData.length - 1;
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
        className={`btn next-btn ${lastStep ? 'confirm' : ''}`}
        disabled={lastStep}
        onClick={() => setPage((currentPage) => currentPage + 1)}
      >
        {lastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default Footer;
