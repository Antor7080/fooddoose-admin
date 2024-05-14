import { Redirect, Route } from "react-router-dom";
import MasterLayout from './layouts/backend/MasterLayout';
export default function AdminPrivateRoute({ ...rest }) {
    const token = localStorage.getItem("token")
  
    return (
            <Route {...rest}
                render={({ props, location }) =>
                token ?
                        (<MasterLayout {...props} />) :
                        (<Redirect to={{ pathname: "/", state: { from: location } }} />)
                }
            />
    );
}
