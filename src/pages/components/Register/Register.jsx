import React from "react";
import logo from "../../../assets/LogoIndividual.png";
import { Link } from "react-router-dom";
import "./Register.css";
import { FormField } from "../FormField/FormField";

const Register = () => {
  return (
    <div className="login overflow-auto">
      <div className="container login2 mt-5 rounded shadow">
        <div className="row">
          <div className="col bg rounded-start d-none d-lg-block col-md-5 col-lg-5 col-xl-6"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-center">
              <img src={logo} width="48" alt="Logo" />
            </div>
            <h2 className="fw-bold text-primary text-center py-5">Registro</h2>
            <form>
              <FormField
                label="Correo Electrónico"
                type="email"
                name="email"
                placeholder="Correo Electrónico"
              />
              <FormField
                label="Contraseña"
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <FormField
                label="Repite tu Contraseña"
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <div className="d-grid">
                <Link to="/login" className="btn btn-secondary text-white">
                  Registrarte
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

