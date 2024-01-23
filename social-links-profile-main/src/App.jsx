import { useState } from 'react';
import ProfileImg from './assets/images/dev-lawrence.jpg';
import GitHub from './assets/images/github.png';
import Mentor from './assets/images/mentor.png';
import LinkedIn from './assets/images/linkedIn.png';
import Twitter from './assets/images/twitter.png';
import Instagram from './assets/images/instagram.webp';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const socialMediaLinks = [
    {
      id: 1,
      name: 'GitHub',
      logo: GitHub,
      path: 'https://dev-lawrence.com/',
    },
    {
      id: 2,
      name: 'Frontend Mentor',
      logo: Mentor,
      path: 'https://frontendmentor.io/',
    },
    {
      id: 3,
      name: 'LinkedIn',
      logo: LinkedIn,
      path: 'https://www.linkedin.com/',
    },
    {
      id: 4,
      name: 'Twitter',
      logo: Twitter,
      path: 'https://twitter.com/',
    },
    {
      id: 5,
      name: 'Instagram',
      logo: Instagram,
      path: 'https://www.instagram.com/',
    },
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

  const selectedClassName =
    selectedLink.name === 'GitHub'
      ? 'github'
      : selectedLink.name === 'Frontend Mentor'
      ? 'mentor'
      : selectedLink.name === 'LinkedIn'
      ? 'linkedin'
      : selectedLink.name === 'Twitter'
      ? 'twitter'
      : selectedLink.name === 'Instagram'
      ? 'instagram'
      : '';

  return (
    <>
      <div className="container">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className={`profile-details ${selectedClassName}`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="close" onClick={handleCloseLinkDetails}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="overlay"></div>

              <div className="selected-info">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { type: 'tween', delay: 0.3 },
                  }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                  src={selectedLink.logo}
                  alt=""
                />
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { type: 'tween', delay: 0.5 },
                  }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  I'm a frontend developer. I build seamless web experiences and
                  web applications by transforming Figma and Adobe XD designs
                  into real and usable websites and apps.
                </motion.p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { type: 'tween', delay: 0.9 },
                  }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.7 }}
                  className="cta"
                >
                  <a href={selectedLink.path}>Check out my bio</a>
                </motion.div>

                <div className="tag">{selectedLink.name}</div>

                <div className="author">Dev Lawrence</div>
              </div>
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
            {socialMediaLinks.map((link) => (
              <button
                key={link.id}
                className="button"
                onClick={() => handleSelectedLink(link)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
