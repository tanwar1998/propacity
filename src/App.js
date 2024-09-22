import "./App.css";
import Main from './Components/main'
import LoaderComponent from './CommonComonents/loader/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <LoaderComponent/>
      <Main/>
      <ToastContainer/>
    </>
  );
};

export default App;
