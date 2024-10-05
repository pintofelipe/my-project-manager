import { useState } from "react";

const TableroKanban = () => {
    const [projects, setProjects] = useState([
        {
          title: "Diseño Front End",
          priority: "Media",
          description:
            "Este es un proyecto para mejorar el diseño front-end de nuestra plataforma web. El diseño incluye tanto la optimización de la UI como la UX.",
          deadLine: "2024-09-30",
          completed: false,
          status: "completed"
        },
      ]);

  const [newProject, setNewProject] = useState({
    title: '',
    priority: '',
    deadLine: '',
    description: '',
    status: 'pending',
  });
  const [error, setError] = useState('');


  const addProject = () => {
    if (!newProject.title || !newProject.priority || !newProject.deadLine || !newProject.description) {
      setError('Por favor completa todos los campos');
      return;
    }

    setProjects([...projects, newProject]);
    setNewProject({
      title: '',
      priority: '',
      deadLine: '',
      description: '',
      status: 'pending',
    });
    setError('');
  };

  const moveToInProgress = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = 'in-progress';
    setProjects(updatedProjects);
  };

  const moveToCompleted = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = 'completed';
    setProjects(updatedProjects);
  };

  return (
    <div className="mx-auto max-w-6xl container mt-10">
   

      {/* Tablero Kanban */}
      <div className="mx-auto max-w-6xl mt-10">
        <h1 className="font-semibold text-6xl text-center">Tablero Kanban</h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {/* Columna Pendiente */}
          <div>
            <h2 className="font-bold text-2xl text-center text-yellow-600 mb-4">
              Pendiente
            </h2>
            <div className="space-y-4">
              {projects
                .filter((project) => project.status === 'pending')
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
                  >
                    <h3 className="text-marron-1 font-bold text-2xl">
                      {project.title}
                    </h3>
                    <p className="font-semibold">Prioridad: {project.priority}</p>
                    <p className="overflow-hidden text-ellipsis max-h-16">
                      {project.description}
                    </p>
                    <p className="font-bold mt-4">Fecha límite: {project.deadLine}</p>
                    <button
                      onClick={() => moveToInProgress(index)}
                      className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded-md"
                    >
                      Mover a En progreso
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Columna En Progreso */}
          <div>
            <h2 className="font-bold text-2xl text-center text-blue-600 mb-4">
              En progreso
            </h2>
            <div className="space-y-4">
              {projects
                .filter((project) => project.status === 'in-progress')
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
                  >
                    <h3 className="text-marron-1 font-bold text-2xl">
                      {project.title}
                    </h3>
                    <p className="font-semibold">Prioridad: {project.priority}</p>
                    <p className="overflow-hidden text-ellipsis max-h-16">
                      {project.description}
                    </p>
                    <p className="font-bold mt-4">Fecha límite: {project.deadLine}</p>
                    <button
                      onClick={() => moveToCompleted(index)}
                      className="bg-blue-400 text-black px-4 py-2 mt-4 rounded-md"
                    >
                      Mover a Completado
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Columna Completado */}
      <div>
        <h2 className="font-bold text-2xl text-center text-green-600 mb-4">
          Completado
        </h2>
        <div className="space-y-4">
          {projects
            .filter((project) => project.status === 'completed')
            .map((project, index) => (
              <div
                key={index}
                className="bg-beige-2 p-6 rounded-xl shadow-md border border-marron-1"
              >
                <h3 className="text-marron-1 font-bold text-2xl">
                  {project.title}
                </h3>
                <p className="font-semibold">Prioridad: {project.priority}</p>
                <p className="overflow-hidden text-ellipsis max-h-16">
                  {project.description}
                </p>
                <p className="font-bold mt-4">Fecha límite: {project.deadLine}</p>
                <p className="font-bold text-green-500 mt-4">Proyecto Completado</p>
              </div>
    ))}
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default TableroKanban;
