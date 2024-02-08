import { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';

const Form = () => {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <SelectPlan page={page} setPage={setPage} />;
    }
  };

  return (
    <div className="panel">
      {/* Progress bar */}
      <ProgressBar page={page} setPage={setPage} />

      {/* Body (details of each step) */}
      <div className="form-container">{pageDisplay()}</div>
    </div>
  );
};

export default Form;
