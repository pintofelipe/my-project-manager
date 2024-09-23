import { useState } from "react";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([
    {
      title: "Diseño Front End",
      priority: "Media",
      description:
        "Este es un proyecto para mejorar el diseño front-end de nuestra plataforma web. El diseño incluye tanto la optimización de la UI como la UX, lo cual implica un trabajo colaborativo entre diseñadores y desarrolladores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in minim reprehenderit atque.",
      deadLine: "30-09-2024",
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    priority: "",
    description: "",
    deadLine: "",
  });

  // Función para agregar un nuevo proyecto
  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      title: "",
      priority: "",
      description: "",
      deadLine: "",
    });
    console.log("Has agregado un nuevo proyecto");
  };

  // Función para eliminar un proyecto
  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  // Función para finalizar un proyecto
  const finalizeProject = (index) => {
    console.log(`Proyecto ${projects[index].title} marcado como finalizado`);
  };

  return (
    <div className="mx-auto max-w-6xl container">
      <h1 className="font-semibold text-6xl text-center">Proyectos</h1>

      <div className="bg-beige-3 p-10 rounded-xl mt-10 shadow-lg">
        <div className="grid grid-cols-3 gap-6 font-semibold">
          <div>
            <h3>Título</h3>
            <input
              type="text"
              placeholder="Ingrese el título del proyecto"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              className="border p-2 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
            />
          </div>
          <div>
            <h3>Prioridad</h3>
            <input
              type="text"
              placeholder="Ingrese la prioridad"
              value={newProject.priority}
              onChange={(e) =>
                setNewProject({ ...newProject, priority: e.target.value })
              }
              className="border p-2 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
            />
          </div>
          <div>
            <h3>Fecha Límite</h3>
            <input
              type="date"
              placeholder="Fecha límite"
              value={newProject.deadLine}
              onChange={(e) =>
                setNewProject({ ...newProject, deadLine: e.target.value })
              }
              className="border p-2 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
            />
          </div>
        </div>

        {/* Área de texto para la descripción */}
        <div className="mt-6">
          <h3>Descripción</h3>
          <textarea
            placeholder="Agrega una breve descripción"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            className="border p-4 h-32 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
          />
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={addProject}
            className="bg-marron-2 px-6 py-3 font-bold text-marron-1 rounded-xl shadow-md hover:bg-marron-3 transition"
          >
            Agregar Proyecto
          </button>
        </div>
      </div>

      <h1 className="font-semibold text-6xl text-center mt-32">Mis Proyectos</h1>

      <div className="flex justify-end my-10">
        <span className="flex h-14 justify bg-marron-2 px-6 shadow-md text-center justify-center items-center rounded-xl">
          <p className="font-bold text-marron-1">Total: {projects.length}</p>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-beige-2 p-6 rounded-xl shadow-md mb-4 border border-marron-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-marron-1 font-bold text-2xl">
                {project.title}
              </h3>

              <div className="flex space-x-3">
                {/* Ícono de Finalizar */}
                <button onClick={() => finalizeProject(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-600 hover:text-green-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>

                {/* Ícono de Editar */}
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600 hover:text-blue-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487 19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>

                {/* Ícono de Eliminar */}
                <button onClick={() => deleteProject(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600 hover:text-red-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="font-semibold">Prioridad: {project.priority}</p>

            {/* Descripción truncada si es muy larga */}
            <p className="overflow-hidden text-ellipsis max-h-16">
              {project.description}
            </p>

            <p className="font-bold mt-4">Fecha límite: {project.deadLine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
