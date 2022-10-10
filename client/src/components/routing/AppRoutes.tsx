import React, {FC} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ErrorsLayout} from "../errors/ErrorsLayout";
import {Error404} from "../errors/Error404";
import {Error500} from "../errors/Error500";
import {Maintenance} from "../errors/Maintenance";
import {Unauthorized} from "../errors/Unauthorized";
import {Logout} from "../auth/Logout";
import {Login} from "../auth/Login";
import {Register} from "../auth/Register";
import {AuthLayout} from "../auth/AuthLayout";
import {RequireAuth} from "../auth/RequireAuth";
import {UserDashboard} from "../user/UserDashboard";
import {UserPageLayout} from "../user/UserPageLayout";
import {AdminDashboard} from "../admin/AdminDashboard";
import {AdminPageLayout} from "../admin/AdminPageLayout";

export const AppRoutes:FC = () => {

    const ROLES = {
        "User": "ROLE_USER",
        "Admin": "ROLE_ADMIN"
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="logout" element={<Logout />} />
                <Route element={<UserPageLayout />}>
                    <Route path="user/*" element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                        <Route path="dashboard" element={<UserDashboard />} />
                    </Route>
                </Route>
                <Route element={<AdminPageLayout />}>
                    <Route path="admin/*" element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route path="dashboard" element={<AdminDashboard />} />    
                    </Route>
                </Route>
                <Route element={<ErrorsLayout />}>
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route path="/404" element={<Error404 />} />
                    <Route path="/500" element={<Error500 />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
                <Route path="/maintenance" element={<Maintenance />} />
            </Routes>
        </BrowserRouter>
    )
};