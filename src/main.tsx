import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './stylesheets/GlobalStyles';

const rootHTML = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHTML);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);