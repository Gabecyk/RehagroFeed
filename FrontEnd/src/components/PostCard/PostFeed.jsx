// PostCardDelete.jsx
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete"; 
import { Input } from '../Input/Input';
import "./PostFeed.css";

export default function PostCardDelete() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isVisible) return null;

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="post-card">
        <div className="post-header">
          <div className="avatar">A</div>
          <div className="user-info">
            <strong>Abraão</strong>
            <span>Dev Fullstack</span>
          </div>
          <div className="post-meta">
            <span className="published-time">Publicado há 2h</span>
          </div>
        </div>

        <div className="post-content">
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É muito top!</p>
        </div>

        <div className="post-footer">
          <button className="like-button">
            <i className="bi bi-hand-thumbs-up"></i> <span>6</span>
          </button>
        </div>
        <Input />
      </div>
      

      {/* Modal */}
      <ModalDelete
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
