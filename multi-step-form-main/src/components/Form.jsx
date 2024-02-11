import { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';

const Form = () => {
  const [page, setPage] = useState(0);
  // const [errorMessage, setErrorMessage] = useState('');
  const [option, setOption] = useState('monthly');
  // const [pageData, setPageData] = useState({
  //   personalInfo: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //   },

  //   selectPlan: {
  //     option: 'monthly',
  //     selectedIndex: null,
  //   },

  //   addOns: {
  //     checkedItems: [],
  //   },
  // });

  // const validateInput = () => {
  //   const { name, email, phone } = pageData.personalInfo;

  //   if (!name || !email || !phone) {
  //     setErrorMessage('This field is required');
  //     return false;
  //   }

  //   return true;
  // };

  // const validatePlan = () => {
  //   if (pageData.selectPlan.selectedIndex === undefined) {
  //     console.log('yo');
  //     return;
  //   }

  //   return true;
  // };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          page={page}
          setPage={setPage}
          // pageData={pageData}
          // setPageData={setPageData}
        />
      );
    } else if (page === 1) {
      return (
        <SelectPlan
          page={page}
          setPage={setPage}
          option={option}
          setOption={setOption}
          // pageData={pageData}
          // setPageData={setPageData}
        />
      );
    } else if (page === 2) {
      return (
        <AddOns
          page={page}
          setPage={setPage}
          option={option}
          // pageData={pageData}
          // setPageData={setPageData}
        />
      );
    } else if (page === 3) {
      return (
        <FinishingUp
          page={page}
          setPage={setPage}
          option={option}
          // pageData={pageData}
        />
      );
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
