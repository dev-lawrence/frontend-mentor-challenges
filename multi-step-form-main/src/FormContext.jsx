import { createContext, useContext, useState } from 'react';
import { progressData } from './data/ProgressData';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [pageData, setPageData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },

    selectPlan: {
      option: '',
      selectedPlan: {},
    },

    addOns: {
      checkedItems: [],
    },
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <FormContext.Provider
      value={{ pageData, setPageData, formSubmitted, setFormSubmitted }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
