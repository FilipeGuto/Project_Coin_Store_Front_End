import React from 'react';
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
    <Card className="container-fluid mt-5 error-container">
  <Card.Body className="error-body">
    <Card.Title className="error-title">Pagina não encontrada</Card.Title>
    <Card.Text className="error-text">
      Desculpe tivemos algum problema ou esssa pagina não existe 😕
    </Card.Text>
    <Button variant="primary" className="error-btn" onClick={() => navigate("/")}>HOME</Button>
  </Card.Body>
</Card>
    </>
  )
}
