const ProjectComponent = () => {
  return (
    <div className="mx-auto max-w-6xl container">
      <h1 className="font-semibold text-6xl text-center">Proyectos</h1>

      <div className="bg-beige-2 p-10 rounded-xl mt-10">
        <div className="flex justify-between font-semibold">
          <div>Titulo</div>
          <div>Prioridad</div>
          <div>Fecha Limite</div>
        </div>
        <div className="flex justify-between font-semibold mt-36">
          <div>Descripcion</div>
          <div>
            <button>Agregar Proyecto</button>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-6xl text-center mt-32">
        Mis Proyectos
      </h1>
      <div className="flex justify-end my-10">
      <span className="flex h-14 justify bg-marron-2 px-6 shadow-md text-center justify-center items-center rounded-xl"><p className="font-bold text-marron-1">Total: 77</p></span>
      </div>

      <div className="grid grid-cols-3 gap-4 bg-beige-3">
        <div className="bg-beige-2 mt-10 ml-4 px-4 rounded-xl">
          <div className="flex justify-between mt-2">
            <h3 className="text-marron-1 font-bold text-2xl"> 
              Diseño Frond End
            </h3>
            <span>
              *-*
        
            </span>
          </div>  
          <p className="font-semibold">
          Priorida: Media
          </p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil in minim
          <p className="font-bold">Fecha limite: 30-09-2024</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
