import React from "react";
import logo from "../../../assets/LogoIndividual.png";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import "./Login.css";
import { FormField } from "../FormField/FormField";

const Login = () => {
  return (
    <div className="login overflow-auto">
      <div className="container login2 mt-5 rounded shadow">
        <div className="row">
          <div className="col bg rounded-start d-none d-lg-block col-md-5 col-lg-5 col-xl-6"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-center">
              <img src={logo} width="48" alt="Logo" />
            </div>
            <h2 className="fw-bold text-primary text-center py-5">Bienvenido</h2>
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
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="connected"
                  id="connected"
                />
                <label className="form-check-label">Mantenerme conectado</label>
              </div>

              <div className="d-grid">
                <Link to="/dashboard" className="btn btn-secondary text-white">
                  Iniciar Sesión
                </Link>
              </div>

              <div className="my-3">
                No tienes cuenta?
                <Link to="/register" className="lead-link">
                  Regístrate aquí.
                </Link><br/>
                <Link to="/recuperarContrasena" className="lead-link">
                  Recuperar contraseña
                </Link>
              </div>
            </form>

            <div className="container w-100 my-5">
              <div className="text-center">
                <div className="lead">Iniciar Sesión</div>
                <div className="row">
                  <SocialIcon
                    icon={faFacebook}
                    color="primary"
                    text="Facebook"
                  />
                  <SocialIcon
                    icon={faGooglePlus}
                    color="danger"
                    text="Google"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
