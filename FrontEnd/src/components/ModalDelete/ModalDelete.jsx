import { useState } from "react";
import "./ModalDelete.css";

export default function ModalDelete({ onConfirm, darkMode = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn-delete-open" onClick={() => setIsOpen(true)}>
        Excluir comentário
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className={`modal-content ${darkMode ? "dark" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Excluir comentário</h2>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setIsOpen(false)}>
                Cancelar
              </button>
              <button className="btn-delete" onClick={handleConfirm}>
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
