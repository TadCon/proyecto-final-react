import "./Titulo.css"
/* 
Descripción:
Componente auxiliar para titular las secciones
*/

const Titulo = ({ titulo, subtitulo }) => {
  return (
    <div>
      <h2 className="m-3">{titulo}</h2>
      <h3>{subtitulo}</h3>
    </div>
  );
};

export default Titulo;
