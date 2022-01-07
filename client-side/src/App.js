import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/Background/Background";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Background/>
    </Router>
  );
}

export default App;
