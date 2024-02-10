import Header from './Header';
import Footer from './Footer';

const PersonalInfo = ({ page, setPage, pageData, setPageData }) => {
  const handlePersonalInfoChange = (field, event) => {
    setPageData({
      ...pageData,
      personalInfo: {
        ...pageData.personalInfo,
        [field]: event.target.value,
      },
    });
  };

  //   const validateInput = () => {
  //     const { name, email, phone } = pageData.personalInfo;

  //     if (!name || !email || !phone) {
  //       setErrorMessage('This field is required');
  //       return false;
  //     }

  //     return true;
  //   };

  return (
    <div className="form-step step-one">
      {/* Header */}
      <Header page={page} />
      <div className="input-group">
        <div className="err-msg">to be changed</div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          value={pageData.personalInfo.name}
          onChange={(event) => handlePersonalInfoChange('name', event)}
        />
      </div>

      <div className="input-group">
        <div className="err-msg">to be changed</div>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={pageData.personalInfo.email}
          onChange={(event) => handlePersonalInfoChange('email', event)}
        />
      </div>

      <div className="input-group">
        <div className="err-msg">to be changed</div>
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890 "
          value={pageData.personalInfo.phone}
          onChange={(event) => handlePersonalInfoChange('phone', event)}
        />
      </div>
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default PersonalInfo;
