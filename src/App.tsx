import './App.css';
import ProducList from './Producs/ProducList';
import ProductForm from './Producs/ProductForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProducList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
