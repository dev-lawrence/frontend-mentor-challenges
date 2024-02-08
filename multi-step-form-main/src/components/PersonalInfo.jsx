import Header from './Header';
import Footer from './Footer';

const PersonalInfo = ({ page, setPage }) => {
  return (
    <div className="form-step step-one">
      {/* Header */}
      <Header page={page} />
      <div className="input-group">
        <div className="err-msg">This field is required</div>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" placeholder="e.g. Stephen King" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input type="text" id="phone" placeholder="e.g. +1 234 567 890 " />
      </div>
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default PersonalInfo;
