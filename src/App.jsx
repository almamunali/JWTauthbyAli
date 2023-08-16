
import './App.css';
import Header from './componenets/Header';
import {Route,Routes} from "react-router-dom"
import Login from './componenets/Login';
import Signup from './componenets/Signup';
import Welcome from './componenets/Welcome';
function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/user" element={<Welcome/>}/>

        </Routes>
      </main>



    </>
  );
}

export default App;
