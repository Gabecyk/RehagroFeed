import "./ModalDelete.css";

export default function ModalDelete({ isOpen, onClose, onConfirm, darkMode = false }) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${darkMode ? "dark" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Excluir comentário</h2>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-delete" onClick={handleConfirm}>
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}
