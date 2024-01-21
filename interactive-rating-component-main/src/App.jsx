import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Star from './assets/images/icon-star.svg';
import ThankYou from './assets/images/illustration-thank-you.svg';

const App = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectedRating = (rating) => {
    setSelectedRating(rating);
  };

  const submitRating = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <motion.div
          key="thank-you"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="thank-you"
        >
          <img src={ThankYou} alt="" />
          <span className="rating">You selected {selectedRating} out of 5</span>
          <h2>Thank You!</h2>
          <p>
            Thank you! We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in touch!
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="rating-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onSubmit={submitRating}
          className="rating-container"
        >
          <img className="star" src={Star} alt="" />

          <h1>How did we do?</h1>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="rating-number">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                type="button"
                key={rating}
                className="rating-btn"
                onClick={() => handleSelectedRating(rating)}
              >
                {rating}
              </button>
            ))}
          </div>

          <button className="btn" disabled={selectedRating === undefined}>
            Submit
          </button>
        </motion.form>
      )}
    </>
  );
};

export default App;

// import { useState } from 'react';
// import Star from './assets/images/icon-star.svg';
// import ThankYou from './assets/images/illustration-thank-you.svg';

// const App = () => {
//   const [selectedRating, setSelectedRating] = useState();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSelectedRating = (rating) => {
//     setSelectedRating(rating);
//   };

//   const submitRating = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   return (
//     <>
//       {isSubmitted ? (
//         <div className="thank-you">
//           <img src={ThankYou} alt="" />
//           <span className="rating">You selected {selectedRating} out of 5</span>
//           <h2>Thank You!</h2>
//           <p>
//             Thank you! We appreciate you taking the time to give a rating. If
//             you ever need more support, don’t hesitate to get in touch!
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={submitRating} className="rating-container">
//           <img className="star" src={Star} alt="" />

//           <h1>How did we do?</h1>

//           <p>
//             Please let us know how we did with your support request. All
//             feedback is appreciated to help us improve our offering!
//           </p>

//           <div className="rating-number">
//             {[1, 2, 3, 4, 5].map((rating) => (
//               <button
//                 type="button"
//                 key={rating}
//                 className="rating-btn"
//                 onClick={() => handleSelectedRating(rating)}
//               >
//                 {rating}
//               </button>
//             ))}
//           </div>

//           <button className="btn" disabled={selectedRating === undefined}>
//             Submit
//           </button>
//         </form>
//       )}
//     </>
//   );
// };

// export default App;
