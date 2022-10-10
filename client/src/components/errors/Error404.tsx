import React from "react";
import { useNavigate } from 'react-router-dom';

export function Error404 () {

    const navigate = useNavigate();

    return (
        <>
            <h1>404</h1>
            <h3 className="mt-0">Page Not Found</h3>
            <p className="mt-20">
                The page you are trying to reach does not exist.
            </p>
            <div className="my-30">
                <button className="btn btn-info" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </>
    )
}
