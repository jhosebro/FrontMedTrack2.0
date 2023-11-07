import React from "react";
import "./GetStarted.css";
import LogoMedTrack2 from "../LogoMedTrack/LogoMedTrack";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="container-fluid text-center background-image vh-100 vw-100 bg-cover">
      <div className="row">
        <div className="col-lg-6 mx-auto mt-5">
          <LogoMedTrack2 className="mt-4 mx-2 my-2 animate__animated animate__backInUp" />
        </div>
      </div>
      <div className="col-lg-6 mx-auto mt-5">
        <p className="text-white display-1 mb-5 mt-2 animate__animated animate__backInUp text-break">
          ¡Tu salud es lo más importante para nosotros! Toma el control de tu
          bienestar y cuida de los seres que más quieres. Configura tus
          recordatorios, mantén un registro de tu tratamiento y disfruta de una
          vida más saludable. ¡Haz clic para empezar hoy mismo!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/login" className="btn btn-secondary btn-lg boton text-white animate__animated animate__backInUp">
            Comienza Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

