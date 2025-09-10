import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';
import { Link } from 'react-router-dom';

const imageFilenames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
const images = imageFilenames.map((name) => `/fullpage/${name}`);

const App3 = () => (
  <>
    <style>
      {`
        /* Hide Fullpage watermark */
        .fp-watermark {
          display: none !important;
        }

        .fp-right ul li a span,
        .fp-left ul li a span {
          background: white !important;
        }

        .fp-right ul li a.active span {
          background: white !important;
        }
      `}
    </style>
    <ReactFullpage
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      render={() => (
        <div id="fullpage-wrapper">
          {images.map((src, index) => (
            <div className="section" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-screen h-screen object-cover"
              />
            </div>
          ))}
        </div>
      )}
    />
    {/* Fixed positioned button */}
    <Link to="/" className="fixed bottom-5 right-5 z-50">
      <button className="bg-yellow-300 hover:bg-yellow-200 transition duration-200 rounded-2xl px-6 py-3 text-xl shadow-lg uppercase">
        Back to Home
      </button>
    </Link>
  </>
);

export default App3;
