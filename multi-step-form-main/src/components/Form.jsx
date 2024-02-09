import { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';

const Form = () => {
  const [page, setPage] = useState(0);
  const [option, setOption] = useState('monthly');
  const [pageData, setPageData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },

    selectPlan: {
      option: 'monthly',
      selectedIndex: null,
    },

    addOns: {
      checkedItems: [],
    },
  });

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          page={page}
          setPage={setPage}
          pageData={pageData}
          setPageData={setPageData}
        />
      );
    } else if (page === 1) {
      return (
        <SelectPlan
          page={page}
          setPage={setPage}
          option={option}
          setOption={setOption}
          pageData={pageData}
          setPageData={setPageData}
        />
      );
    } else if (page === 2) {
      return <AddOns page={page} setPage={setPage} option={option} />;
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
