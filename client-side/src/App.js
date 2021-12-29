import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/Background/Background";
import GlobalStyle from "./GlobalStyle/GlobalStyle";



function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Background/>
    </Router>
  );
}

export default App;
