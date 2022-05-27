import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";

export default function ModalExample(props) {
  return (
    <>
      <Modal.Dialog className="container-fluid fixed-top">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p className="modal-text">{props.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <>{props.save}</>
          <>{props.close}</>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}
