import { useFormContext } from '../FormContext';
import Footer from './Footer';
import Header from './Header';

const FinishingUp = ({ page, setPage, option }) => {
  const { pageData } = useFormContext();

  const addOns = [
    {
      title: 'Online service',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },

    {
      title: 'Larger storage',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },

    {
      title: 'Customizable Profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const addOn = addOns.map((addOn) => {
    return addOn.title;
  });

  const goToPageTwo = () => {
    if (page === 3) {
      setPage((currentPage) => currentPage - 2);
    }
  };

  // Extract selected add-on titles
  const selectedAddOnTitles = addOns.map((item) => item.title);

  // price of  plan plus the price of addOns
  const planPrice =
    pageData.selectPlan.option === 'monthly'
      ? pageData.selectPlan.selectedPlan.monthlyPrice
      : pageData.selectPlan.option === 'yearly'
      ? pageData.selectPlan.selectedPlan.yearlyPrice
      : '';

  const addOnPrice = pageData.addOns.checkedItems.map((item) =>
    option === 'monthly'
      ? item.monthlyPrice
      : option === 'yearly'
      ? item.yearlyPrice
      : ''
  );

  const totalAddOnPrice = addOnPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Total price
  const totalPrice = planPrice + totalAddOnPrice;

  return (
    <div className="form-step step-four">
      <Header page={page} />

      <div className="confirm-steps">
        <div className="flex confirm-plan">
          <div className="plan">
            <h4>Arcade ({option})</h4>
            <button className="change" href="#" onClick={() => goToPageTwo()}>
              Change
            </button>
          </div>

          <span className="plan-price">
            {pageData.selectPlan.option === 'monthly'
              ? `$${pageData.selectPlan.selectedPlan.monthlyPrice}/mo`
              : pageData.selectPlan.option === 'yearly'
              ? `$${pageData.selectPlan.selectedPlan.yearlyPrice}/yr`
              : ''}
          </span>
        </div>

        {pageData.addOns.checkedItems.map((item, index) => (
          <div key={index} className="confirm-addon">
            {selectedAddOnTitles.includes(item.title) && (
              <div className="flex">
                <h4>{item.title}</h4>

                <span key={index}>
                  {option === 'monthly'
                    ? `$${item.monthlyPrice}/mo`
                    : option === 'yearly'
                    ? `$${item.yearlyPrice}/yr`
                    : ''}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex total">
        <div className="total-price">
          <h4>
            {' '}
            {option === 'monthly'
              ? `Total (per month) `
              : option === 'yearly'
              ? `Total(per year)`
              : ''}
          </h4>
        </div>

        <span>
          {option === 'monthly'
            ? `+$${totalPrice}/mo`
            : option === 'yearly'
            ? `+$${totalPrice}/yr`
            : ''}
        </span>
      </div>

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default FinishingUp;
