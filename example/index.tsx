import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css';

const Layout = lazy(() => import('@/pages/Layout'));

const App = () => {

  return (
    <Suspense fallback={<></>}>
      <Layout />
    </Suspense>
  );
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <App />
);
