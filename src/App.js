import {BrowserRouter} from "react-router-dom"; 
import Route from "./route"
import Header from "./pages/components/header";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Route />
   </BrowserRouter>
  );
}

export default App;
