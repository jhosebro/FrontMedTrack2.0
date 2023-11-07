import React from "react";

export const NotFound = () => {
    const pageStyle = {
        background: '#FFFFFF',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={pageStyle}>
        <div
            style={{
            maxWidth: "600px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
        >
            <h1 style={{ color: "#e74c3c" }}>Error 404 - Página no encontrada</h1>
            <p style={{ fontSize: "18px" }}>
            Lo sentimos, la página que estás buscando no pudo ser encontrada.
            Puede ser que la dirección haya cambiado o que la página haya sido
            eliminada.
            </p>
            <p style={{ fontSize: "18px" }}>
            Por favor, verifica la URL o vuelve a la página de inicio.
            </p>
            <a
            href="/"
            style={{
                textDecoration: "none",
                backgroundColor: "#3498db",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                marginTop: "20px",
                display: "inline-block",
            }}
            >
            Volver a la página de inicio
            </a>
        </div>
        </div>
    );
};
