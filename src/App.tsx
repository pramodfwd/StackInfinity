import './App.css';
import ProducList from './Producs/ProducList';
import ProductForm from './Producs/ProductForm';
import { Provider } from 'react-redux';
import store from './store';
import CartPrice from './cart/cart';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProducList />
        <ProductForm />
        <CartPrice/>
      </div>
    </Provider>
  );
}

export default App;
