import { createContext, useContext, useState } from 'react';

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

  return (
    <FormContext.Provider value={{ pageData, setPageData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
