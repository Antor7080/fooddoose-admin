import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Switch, Route, Redirect } from "react-router-dom";
import routes from '../../routes/routes';
import routes1 from '../../routes/routes1';

function MasterLayout() {
    const userInfo = localStorage.getItem('user')
    const userData = (JSON.parse(userInfo))
    return (
        <div>
            <Navbar />
            <Sidebar />
            {
                userData.role === 3 && <Switch>
                    {
                        routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            )
                        })
                    }
                    {/* <Redirect form="/admin" to="admin/dashboard" /> */}
                </Switch>
            }
            {
                userData.role === 2 && <Switch>
                    {
                        routes1.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => (
                                            <route.component {...props} />
                                        )}
                                    />
                                )
                            )
                        })
                    }
                    {/* <Redirect form="/" to="admin/dashboard" /> */}
                </Switch>
            }
        </div>
    );
}
export default MasterLayout;