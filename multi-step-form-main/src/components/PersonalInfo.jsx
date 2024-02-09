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
  return (
    <div className="form-step step-one">
      {/* Header */}
      <Header page={page} />
      <div className="input-group">
        <div className="err-msg">This field is required</div>
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
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={pageData.personalInfo.email}
          onChange={(event) => handlePersonalInfoChange('email', event)}
        />
      </div>

      <div className="input-group">
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
