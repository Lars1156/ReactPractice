import './App.css';
import MyForm from './components/MyFrom';
import ParentComponent from './components/PraentComponent';
import {Header , Footer} from './components/Main'

function App() {
  return (
    <div className="App">
        <MyForm/>
        <ParentComponent  headerComponent={<Header />} footerComponent={<Footer/> }/>
    </div>
  );
}

export default App;
