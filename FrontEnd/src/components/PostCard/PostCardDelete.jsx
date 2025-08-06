import { useState } from 'react';
import './PostCardDelete.css';

export default function PostCardDelete() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar">A</div>
        <div className="user-info">
          <strong>Alice</strong>
          <span>Dev Fullstack</span>
        </div>
        <div className="post-meta">
          <span className="published-time">Publicado há 2h</span>
          <button
            className="delete-button"
            title="Excluir postagem"
            onClick={() => setIsVisible(false)}
          >
            <i className="bi bi-trash"></i>
          </button>
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
    </div>
  );
}
