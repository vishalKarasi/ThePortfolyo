import { Link } from "react-router-dom";
import "./Modal.scss";

const Modal = ({ img, title, description, liveurl, githuburl, modalClose }) => {
  const modalStyle = {
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "block",
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} />
            </div>
            <p className="modal-subtitle">{description}</p>
            <div className="st-portfolio-link">
              <Link to={liveurl}>Live Url</Link>
              <Link to={githuburl}>Github</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
