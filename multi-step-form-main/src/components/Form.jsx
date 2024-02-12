import { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';
import { useFormContext } from '../FormContext';

const Form = () => {
  const [page, setPage] = useState(0);
  const { formSubmitted } = useFormContext();
  // const [errorMessage, setErrorMessage] = useState('');
  const [option, setOption] = useState('monthly');

  const pageDisplay = () => {
    if (formSubmitted) {
      return <ThankYou />;
    } else if (page === 0) {
      return <PersonalInfo page={page} setPage={setPage} />;
    } else if (page === 1) {
      return (
        <SelectPlan
          page={page}
          setPage={setPage}
          option={option}
          setOption={setOption}
        />
      );
    } else if (page === 2) {
      return <AddOns page={page} setPage={setPage} option={option} />;
    } else if (page === 3) {
      return <FinishingUp page={page} setPage={setPage} option={option} />;
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
