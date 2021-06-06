import {Switch,Route} from "react-router-dom";
// import Dashboard from "../pages/dashboard";
import Details from "../pages/details";
import Home from "../pages/home";

const Routing = () =>{
    return(
        <Switch>
            {/* <Route path="/dashboard"exact  component={Dashboard} /> */}
            <Route path="/details" component={Details}/>
            <Route component={Home} />
            
        </Switch>
    )
}
export default Routing;