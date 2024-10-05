import { useState } from "react";
import ProjectSearch from "./ProjectSearch";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([
    {
      title: "Diseño Front End",
      priority: "Media",
      description:
        "Este es un proyecto para mejorar el diseño front-end de nuestra plataforma web. El diseño incluye tanto la optimización de la UI como la UX.",
      deadLine: "2024-09-30",
      completed: false,
      status: "pending",
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    priority: "",
    description: "",
    deadLine: "",
    status: "pending",
  });

  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addProject = () => {
    if (!newProject.title || !newProject.priority || !newProject.deadLine) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    const currentDate = new Date();
    const projectDate = new Date(newProject.deadLine);

    if (projectDate < currentDate) {
      setError("La fecha límite debe ser futura.");

      return;
    }

    if (isEditing && editingIndex !== null) {
      const updatedProjects = [...projects];

      updatedProjects[editingIndex] = { ...newProject, completed: false };
      setProjects(updatedProjects);

      //cancelar edicion

      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setProjects([...projects, { ...newProject, completed: false }]);
    }

    //reseteo el proyecto
    setNewProject({
      title: "",
      priority: "",
      description: "",
      deadLine: "",
    });
    setError("");
  };

  // Función para eliminar un proyecto
  const deleteProject = (index) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      setProjects(projects.filter((_, i) => i !== index));
    }

    if (isEditing && setEditingIndex === index) {
      isEditing(false);
      setEditingIndex(null);
      setNewProject({ title: "", priority: "", description: "", deadLine: "" });
    }
  };

  // Función para editar un proyecto
  const editProject = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const moveToCompleted = (index) => {
    const updateStatus = [...projects];
    updateStatus[index].status = "completed";
    setProjects(updateStatus);
  };

  const moveToInProgress = (index) => {
    const updateStatus = [...projects];
    updateStatus[index].status = "in-progress";
    setProjects(updateStatus);
  };

  return (
    <div className="mx-auto max-w-6xl container mt-10">
      <h1 className="font-semibold text-6xl text-center">Proyectos</h1>

      {/* Formulario para agregar un nuevo proyecto */}
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
            <select
              value={newProject.priority}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  priority: e.target.value,
                })
              }
              className="border p-2 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
            >
              <option value="">Categoría</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
          <div>
            <h3>Fecha Límite</h3>
            <input
              type="date"
              value={newProject.deadLine}
              onChange={(e) =>
                setNewProject({ ...newProject, deadLine: e.target.value })
              }
              className="border p-2 mb-2 bg-beige-2 border-marron-1 rounded-md w-full"
            />
          </div>
        </div>

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

        {/* Mostrar el error */}
        {error && <div className="text-red-700 font-semibold">{error}</div>}

        {/* Botón para agregar proyecto */}
        <div className="flex justify-center mt-10">
          <button
            onClick={addProject}
            className="bg-marron-2 px-6 py-3 font-bold text-marron-1 rounded-xl shadow-md hover:bg-marron-3 transition"
          >
            Agregar Proyecto
          </button>
        </div>
      </div>

      {/* Tablero de proyectos */}
      <div className="mx-auto max-w-6xl">
        <h1 className="font-semibold text-6xl text-center mt-32">
          Buscar proyecto
        </h1>

        {/* Componente de búsqueda */}
        <ProjectSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {/* Total de proyectos */}
      <div className="flex justify-end my-10">
        <span className="flex h-14 bg-marron-2 px-6 shadow-md text-center justify-center items-center rounded-xl">
          <p className="font-bold text-marron-1">Total: {projects.length}</p>
        </span>
      </div>

      <div>
        {/* Tablero Kanban */}
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="font-semibold text-6xl text-center">Tablero Kanban</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {/*Columna pendiente */}

          <div className="mb-10">
            <h2 className="font-bold text-2xl text-center text-yellow-600 mb-4">
              Pendiente
            </h2>
            <div className="space-y-4">
              {projects
                .filter((projects) =>
                  projects.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                .filter((projects) => projects.status === "pending")
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
                  >
                    <div className="flex space-x-3">
                      <h3 className="text-marron-1 font-bold text-2xl ">
                        {project.title}
                      </h3>

                      {/* Botón para editar proyecto */}
                      <button onClick={() => editProject(index)}>
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

                      {/* Botón para eliminar proyecto */}
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

                    <p className="font-semibold">
                      Prioridad: {project.priority}
                    </p>
                    <p className="overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                    <p className="font-bold mt-4">
                      Fecha Limite: {project.deadLine}
                    </p>

                    <button
                      onClick={() => moveToInProgress(index)}
                      className="bg-beige-3 text-black px-4 py-2 mt-4 rounded-md"
                    >
                      Mover a En progreso
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/**Columna en progreso */}
          <div className="mb-10">
            <h2 className="font-bold text-2xl text-center text-yellow-600 mb-4">
              En progreso
            </h2>
            <div className="space-y-4">
              {projects
                .filter((projects) =>
                  projects.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                .filter((projects) => projects.status === "in-progress")
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
                  >
                    <div className="flex space-x-3">
                      <h3 className="text-marron-1 font-bold text-2xl">
                        {project.title}
                      </h3>
                      {/* Botón para editar proyecto */}
                      <button onClick={() => editProject(index)}>
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

                      {/* Botón para eliminar proyecto */}
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

                    <p className="font-semibold">
                      Prioridad: {project.priority}
                    </p>
                    <p className="overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                    <p className="font-bold mt-4">
                      Fecha Limite: {project.deadLine}
                    </p>

                    <button
                      onClick={() => moveToCompleted(index)}
                      className="bg-beige-3 text-black px-4 py-2 mt-4 rounded-md"
                    >
                      Mover a Completado
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/*Columna Completado*/}

          <div className="mb-10">
            <h2 className="font-bold text-2xl text-center text-yellow-600 mb-4">
              Completado
            </h2>
            <div className="space-y-4">
              {projects
                .filter((projects) =>
                  projects.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                .filter((projects) => projects.status === "completed")
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
                  >
                    <div className="flex space-x-3">
                      <h3 className="text-marron-1 font-bold text-2xl">
                        {project.title}
                      </h3>

                      {/* Botón para editar proyecto */}
                      <button onClick={() => editProject(index)}>
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

                      {/* Botón para eliminar proyecto */}
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

                    <p className="font-semibold">
                      Prioridad: {project.priority}
                    </p>
                    <p className="overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                    <p className="font-bold mt-4">
                      Fecha Limite: {project.deadLine}
                    </p>

                    <p className="font-bold text-gray-1 mt-4">
                      Proyecto completado
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
