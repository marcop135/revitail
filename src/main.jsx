import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');

// Production HTML ships the home page prerendered; hydrate it there. Dev, and
// any other path (which renders NotFound), start from an empty client render.
if (container.hasChildNodes() && window.location.pathname === '/') {
  ReactDOM.hydrateRoot(container, <App />);
} else {
  container.replaceChildren();
  ReactDOM.createRoot(container).render(<App />);
}
