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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessagePersonalInfo, setErrorMessagePersonalInfo] = useState('');
  const [errorMessageSelectPlan, setErrorMessageSelectPlan] = useState('');
  const [errorMessageAddOn, setErrorMessageAddOn] = useState('');

  const validatePersonalInfo = () => {
    const { name, email, phone } = pageData.personalInfo;

    if (!name || !email || !phone) {
      setErrorMessagePersonalInfo('This field is required');
      return false;
    }

    setErrorMessagePersonalInfo('');

    return true;
  };

  const validateSelectPlan = () => {
    const { option } = pageData.selectPlan;

    if (!option) {
      setErrorMessageSelectPlan('Select a plan');
      return false;
    }

    setErrorMessageSelectPlan('');

    return true;
  };

  const validateAddOn = () => {
    const { checkedItems } = pageData.addOns;

    if (checkedItems.length === 0) {
      setErrorMessageAddOn('Pick an Add On');
      return false;
    }

    setErrorMessageAddOn('');

    return true;
  };

  return (
    <FormContext.Provider
      value={{
        pageData,
        setPageData,
        formSubmitted,
        setFormSubmitted,
        errorMessagePersonalInfo,
        errorMessageSelectPlan,
        errorMessageAddOn,
        validatePersonalInfo,
        validateSelectPlan,
        validateAddOn,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
