import './App.css';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from './components/header/header.component';
import TabsContainer from './components/tabscontainer/tabscontainer.component';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};


function App() {
  return (
    <div className="App">
      <Provider template={AlertTemplate} {...options}>
        <Header />
        <TabsContainer />
      </Provider>
    </div>
  );
}

export default App;
