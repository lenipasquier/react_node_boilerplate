import React, { FunctionComponent, useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import {useAppSelector} from "../../config/hooks";
import {RootState} from "../../config/store";
import AccessService from "../../services/AccessService";

interface AuthProps {
    allowedRoles:string[]
}

/**
 * Wrapper Component that checks if a user has authorized access to a given Route
 * @param props - an array with authorized roles as strings, passed as Route params
 * @constructor
 */
export const RequireAuth: FunctionComponent<AuthProps> = (props) => {

    const allowedRoles:string[] = props.allowedRoles;
    const { currentUser } = useAppSelector((state:RootState) => state.auth);
    let initRole = currentUser?.roles || "";
    const [role, setRole] = useState(initRole);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let _error:string;
        if (currentUser) {
            //if user role has changed or token has expired, force re-login to refresh user session
            AccessService.checkAuthorizedRole().then(
                (response:any) => {
                    setRole(response.data);
                    if(currentUser.roles !== response.data) {
                        navigate("/login", {replace:true, state:{"msg":"Access restricted. Please sign in with authorized credentials."}});
                    }
                },
                (error:any) => {
                    _error = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    navigate("/login", {replace:true, state:{"from":location, "msg":_error + " Please sign in."}});
                }
            );
        }
    }, [currentUser, navigate, location]);

    /**
     * Checks if user is logged in and compares allowed roles with current user's role.
     * If currentUser is empty (not logged in), sends back to login page.
     * If currentUser does not have correct role, shows "Unauthorized" error page
     */
    return (
        (allowedRoles?.includes(role))
            ? <Outlet />
            : currentUser
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location, msg:"You are not authenticated. Please sign in." }} replace />
    );
}