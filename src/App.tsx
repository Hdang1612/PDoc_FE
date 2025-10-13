import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import AppRoutes from './routes';
import { LoadingOverlay } from './components/overlayloading';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay visible={true} />}>
        <AppRoutes />
      </Suspense>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
