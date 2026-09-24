function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;