import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
const savedRoute = sessionStorage.getItem("github-pages-route");

if(savedRoute){
  sessionStorage.removeItem("github-pages-route");

  window.history.replaceState(
    null,
    "",
    "/initialreactviteproject" + savedRoute
  );
}
import $ from 'jquery';

import './index.css';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


import '@fortawesome/fontawesome-free/css/all.min.css';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './assets/css/myStyle.css';

window.$ = $;
window.jQuery = $;



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);