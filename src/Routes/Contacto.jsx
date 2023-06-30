import React, { useState } from "react";
import styles from "./Contacto.module.css";


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
    <div className={styles.container}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Nombre completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
};

export default Contacto;
