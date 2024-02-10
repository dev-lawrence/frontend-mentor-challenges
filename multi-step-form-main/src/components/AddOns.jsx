import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const AddOns = ({ page, setPage, option, pageData, setPageData }) => {
  const addOns = [
    {
      title: 'Online service',
      text: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },

    {
      title: 'Larger storage',
      text: 'Extra 1 TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },

    {
      title: 'Customizable Profile',
      text: 'Custom theme on your',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const [checkedItems, setCheckedItems] = useState(() => {
    if (pageData.addOns && pageData.addOns.checkedItems) {
      return pageData.addOns.checkedItems;
    } else {
      return Array(addOns.length).fill(false);
    }
  });

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];

      // Introduced a delay to ensure the state update occurs after rendering
      setTimeout(() => {
        setPageData((prevData) => ({
          ...prevData,
          addOns: { checkedItems: newCheckedItems },
        }));
      }, 0);

      return newCheckedItems;
    });
  };

  return (
    <div className="form-step step-three">
      <Header page={page} />

      <div className="add-ons">
        <div className="add-on">
          {addOns.map((addOn, index) => (
            <div
              key={index}
              className={`add-on--info ${checkedItems[index] ? 'active' : ''}`}
              onClick={() => handleCheckboxChange(index)}
            >
              <div className="add-on--info__flex">
                <input
                  type="checkbox"
                  name="service"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                <div className="add-on--text">
                  <h4>{addOn.title}</h4>
                  <p>{addOn.text}</p>
                </div>
              </div>

              <div className="price">
                <span>
                  +$
                  {option === 'monthly'
                    ? addOn.monthlyPrice
                    : option === 'yearly'
                    ? addOn.yearlyPrice
                    : ''}
                  /
                  {option === 'monthly'
                    ? 'mo'
                    : option === 'yearly'
                    ? 'yr'
                    : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default AddOns;
