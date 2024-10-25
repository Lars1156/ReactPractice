import MyForm from './components/MyFrom';
import ParentComponent from './components/PraentComponent';
import UserProfile from './components/UserProfile'
import {Header , Footer} from './components/Main'

function App() {
  return (
    <div className="App">
        <MyForm/>
        <ParentComponent  headerComponent={<Header />} footerComponent={<Footer/> }/>
        <UserProfile/>
    </div>
  );
}

export default App;
