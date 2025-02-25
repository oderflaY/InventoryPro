import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/test') // URL del backend en NestJS
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(data => setMessage(data.message)) // Guardamos el mensaje en el estado
      .catch(error => console.error('Error al conectar con el backend', error));
  }, []);

  return (
    <div>
      <h1>Conexión React - NestJS</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;