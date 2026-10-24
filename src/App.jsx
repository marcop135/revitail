import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css';

// One route. Anything else the server falls back to index.html for is a miss.
const isHome = (path) => path === '/' || path === '/index.html';

// `path` is passed only by the build-time prerender, where there is no window.
function App({ path = window.location.pathname }) {
  return (
    <ErrorBoundary>
      <div className='bg-canvas text-ink min-h-lvh font-sans antialiased'>
        <div className='mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8'>
          <Header />
          <MainContent notFound={!isHome(path)} />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
