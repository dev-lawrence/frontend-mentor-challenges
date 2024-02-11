import { useFormContext } from '../FormContext';
import Footer from './Footer';
import Header from './Header';

const FinishingUp = ({ page, setPage, option }) => {
  const { pageData } = useFormContext();

  console.log(pageData);

  return (
    <div className="form-step step-four">
      <Header page={page} />

      <div className="confirm-steps">
        <div className="flex confirm-plan">
          <div className="plan">
            <h4>Arcade ({option})</h4>
            <a href="#">Change</a>
          </div>

          <span>
            {pageData.selectPlan.option === 'monthly'
              ? `$${pageData.selectPlan.selectedPlan.monthlyPrice}/mo`
              : pageData.selectPlan.option === 'yearly'
              ? `$${pageData.selectPlan.selectedPlan.yearlyPrice}/yr`
              : ''}
          </span>
        </div>

        <div className="flex confirm-addon">
          <div className="addon">
            <h4>Online service</h4>
          </div>

          <span>+$1/mo</span>
        </div>

        <div className="flex confirm-addon">
          <div className="addon">
            <h4>Larger storage</h4>
          </div>

          <span>+$2/mo</span>
        </div>
      </div>

      <div className="flex total">
        <div className="total-price">
          <h4>Total (per month)</h4>
        </div>

        <span>+$12/mo</span>
      </div>

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default FinishingUp;
