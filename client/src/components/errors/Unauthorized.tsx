import React from "react";
import { useNavigate } from "react-router-dom";

export function Unauthorized () {

    const navigate = useNavigate();

    return (
        <>
            <h1>403</h1>
            <h3 className="mt-0">Unauthorized</h3>
            <p className="mt-20">
                You are not authorized to access this page.
            </p>
            <div className="my-30">
                <button className="btn btn-info" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </>
    )
}