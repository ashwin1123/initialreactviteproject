// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import $ from 'jquery'
// // Make jQuery globally available
// window.$ = $
// window.jQuery = $
// // CSS
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import './assets/css/ekko-lightbox.css'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
// import './assets/css/myStyle.css'
// import App from './App.jsx'

// async function startApp() {
//     console.log('1. Starting application...')

//     try {
//         console.log('2. jQuery:', window.jQuery)
//         await import('bootstrap/dist/js/bootstrap.bundle.min.js')
//         console.log('3. Bootstrap loaded')
//         // await import('ekko-lightbox/dist/ekko-lightbox.min.js')
//         console.log('4. Ekko loaded')
//         console.log(
//             '5. Ekko plugin:',
//             window.jQuery.fn.ekkoLightbox
//         )
//         createRoot(document.getElementById('root')).render(
//             <StrictMode>
//                 <App />
//             </StrictMode>
//         )
//         console.log('6. React rendered')

//     } catch (error) {

//         console.error('APPLICATION START ERROR:', error)

//     }
// }

// startApp()
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import $ from 'jquery';

import './index.css';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

// import './assets/css/ekko-lightbox.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './assets/css/myStyle.css';

// Make jQuery globally available
window.$ = $;
window.jQuery = $;

// Load Ekko Lightbox AFTER jQuery is available
// import('./assets/js/ekko-lightbox.min.js')
//   .then(() => {
//     console.log('Ekko Lightbox loaded successfully');
//   })
//   .catch((error) => {
//     console.error('Ekko Lightbox loading failed:', error);
//   });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);