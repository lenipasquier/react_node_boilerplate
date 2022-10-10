import React from "react";
import { useNavigate } from "react-router-dom";

export function Error500 () {

    const navigate = useNavigate();

    return (
        <div>
            <h1>500</h1>
            <h3 className="mt-0">System Error</h3>
            <p className="mt-20">
                An unexpected error ocurred. Please go try again later.
            </p>
            <div className="my-30">
                <button className="btn btn-info" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>

    )
}