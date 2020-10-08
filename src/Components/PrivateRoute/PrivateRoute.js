import React, { useContext } from "react";
import { UserContext } from "../../App";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;