import Template from './templates/Template.js';
import  './styles/main.css';

(async function App() {
  const main = null || documents.getElementByIds('main');
  main.innerHTML = await Template();
})();
