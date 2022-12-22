import "./App.css";
import HeaderContainer from "./Containers/HeaderContainer";
import HomeContainer from './Containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <h1>WelMart Website</h1>
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
