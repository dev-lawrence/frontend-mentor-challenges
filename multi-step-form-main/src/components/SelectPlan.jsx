import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { useFormContext } from '../FormContext';

const SelectPlan = ({ page, setPage, option, setOption }) => {
  const { pageData, setPageData } = useFormContext();

  const [selectedPlan, setSelectedPlan] = useState(() => {
    return pageData && pageData.selectPlan
      ? pageData.selectPlan.selectedPlan
      : undefined;
  });

  const plans = [
    {
      name: 'Arcade',
      img: Arcade,
      monthlyPrice: 9,
      yearlyPrice: 90,
      trial: '2 months free',
    },

    {
      name: 'Advanced',
      img: Advanced,
      monthlyPrice: 12,
      yearlyPrice: 120,
      trial: '2 months free',
    },

    {
      name: 'Pro',
      img: Pro,
      monthlyPrice: 15,
      yearlyPrice: 150,
      trial: '2 months free',
    },
  ];

  const handleToggleChange = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleSelectedOption = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
    setPageData((prevData) => ({
      ...prevData,
      selectPlan: { ...prevData.selectPlan, option, selectedPlan },
    }));
  };

  return (
    <div className="form-step step-two">
      <Header page={page} />
      <div className="plans">
        <div className="d-flex plan__flex">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan ${
                selectedPlan.name === plan.name ? 'active' : ''
              }`}
              onClick={() => handleSelectedOption(plan)}
            >
              <img src={plan.img} alt="" />
              <div className="plan__info">
                <h4>{plan.name}</h4>
                <span className="arcade-price">
                  {option === 'monthly'
                    ? `$${plan.monthlyPrice}/mo`
                    : option === 'yearly'
                    ? `$${plan.yearlyPrice}/yr`
                    : ''}
                </span>
                <p className="trial">{option === 'yearly' ? plan.trial : ''}</p>
              </div>
            </div>
          ))}
        </div>

        {/* price toggle switch  */}
        <div className="toggle__switch">
          <fieldset
            className="toggle"
            aria-label="price-toggle"
            role="radiogroup"
          >
            <label
              htmlFor="month"
              className={`${option === 'yearly' ? 'fade' : ''}`}
            >
              Monthly
            </label>

            <div className="toggle__wrapper">
              <input
                type="radio"
                name="theme"
                id="month"
                checked={option === 'monthly'}
                onChange={() => handleToggleChange('monthly')}
              />
              <input
                type="radio"
                name="theme"
                id="year"
                checked={option === 'yearly'}
                onChange={() => handleToggleChange('yearly')}
              />
              <span aria-hidden="true" className="toggle__background"></span>
              <span aria-hidden="true" className="toggle__button"></span>
            </div>

            <label
              htmlFor="year"
              className={`${option === 'monthly' ? 'fade' : ''}`}
            >
              Yearly
            </label>
          </fieldset>
        </div>
      </div>
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default SelectPlan;
