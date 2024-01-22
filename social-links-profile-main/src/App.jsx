import { useState } from 'react';
import ProfileImg from './assets/images/dev-lawrence.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const links = [
    'GitHub',
    'Frontend Mentor',
    'LinkedIn',
    'Twitter',
    'Instagram',
  ];

  const [selectedLink, setSelectedLink] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedLink = (selectedLink) => {
    setSelectedLink(selectedLink);

    if (selectedLink) {
      setIsSelected(true);
    }
  };

  const handleCloseLinkDetails = () => {
    setIsSelected(false);
  };

  return (
    <>
      <div className="container">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="profile-details"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="close" onClick={handleCloseLinkDetails}>
                <i class="fa-solid fa-xmark"></i>
              </div>
              <p>You selected {selectedLink}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="profile-container">
          <img src={ProfileImg} alt="" />

          <div className="profile-info">
            <h1>Dev Lawrence</h1>
            <span>Nigeria, Delta State</span>
          </div>

          <p className="text">"Front-end developer and drummer"</p>
          <div className="buttons">
            {links.map((link) => (
              <button
                key={link}
                className="button"
                onClick={() => handleSelectedLink(link)}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
