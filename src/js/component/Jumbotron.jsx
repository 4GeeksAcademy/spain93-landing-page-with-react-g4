import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-2 mt-4">
            <div className="container-fluid py-3 mx-3 text-start">
                <h1 className="display-5 fw-bold">Una cálida bienvenida</h1>
                <p className="col-md-8 fs-4">
                    Texto de ejemplo
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Botón
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;