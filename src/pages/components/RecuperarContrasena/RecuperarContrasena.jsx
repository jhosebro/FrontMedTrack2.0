import React, { useState } from 'react';

const RecuperarContraseña = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar una solicitud de recuperación de contraseña
    // Puedes hacer una llamada a una API o enviar un correo electrónico, por ejemplo.

    // En este ejemplo, simplemente mostramos un mensaje de éxito.
    setMessage(`Se ha enviado un correo de recuperación a ${email}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Recuperación de Contraseña</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              Enviar Correo de Recuperación
            </button>
          </form>
          {message && <div className="mt-3 text-success"> {message}</div>}
        </div>
      </div>
    </div>
  );
};

export default RecuperarContraseña;


