import MyForm from './components/MyFrom';
import ParentComponent from './components/PraentComponent';
import UserProfile from './components/UserProfile'
import {Header , Footer} from './components/Main';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <MyForm/>
        <ParentComponent  headerComponent={<Header />} footerComponent={<Footer/> }/>
        <UserProfile/>
        <Products/>
        {/* Properties to one fuction components to Anoter Components */}
    </div>
  );
}

export default App;
