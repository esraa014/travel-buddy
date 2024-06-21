import 'bootstrap/dist/css/bootstrap.min.css';

import BLogList from "./BlogList";
import BLogPost from "./BlogPost";
import Footer from "./Footer";
import Header from "./Header";

export default  function App() {
  return (
    <div className="App">
      <Header/>
      <BLogList/>
      <BLogPost/>
      <Footer/>
    </div>
  );
}