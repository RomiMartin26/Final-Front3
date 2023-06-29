import React, { useState } from "react";
// import Form from "../Components/Form";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      setSuccess("");
    } else {
      setSuccess(
        `Gracias ${name}, te contactaremos lo antes posible vía email`
      );
      setError("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default Contacto;
