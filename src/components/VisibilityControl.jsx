
function VisibilityControl({ setShowCompleted, cleanTasks, isChecked }) {

  const handleShowCompleted = (e) => setShowCompleted(e.target.checked); 

  const handleClean = () => {
    
    if(window.confirm('¿Estás seguro de eliminar las tareas hechas?')) {
      cleanTasks();
    }
  };

  return (

    <section className="mt-4 p-2 d-flex justify-content-between align-items-center bg-secondary border-secondary">

      <div className="form-check form-switch">
        <input type="checkbox" checked={isChecked} onChange={handleShowCompleted} className="form-check-input" aria-label="Show done tasks"/>
        <label className="ms-2">Mostrar las tareas hechas</label>
      </div>
      
      <button onClick={handleClean} className="btn btn-danger btn-md">Eliminar</button>
    </section>

  );
};

export default VisibilityControl;