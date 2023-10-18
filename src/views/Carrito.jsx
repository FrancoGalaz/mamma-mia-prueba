import { Container } from 'react-bootstrap';
import { useContext } from 'react';

import CarritoCompra from '../components/CarritoCompra';
import { Context } from '../contexts/PizzaContext';

function Carrito() {
  const { cart } = useContext(Context);

  let content;

  if (cart.length === 0) {
    content = <p>Aun no añades pizzas al carrito.</p>;
  } else {
    content = <CarritoCompra />;
  }

  return (
    <Container className="carrito p-0 mt-3">
      <h1 className="fs-4">Detalle del pedido:</h1>
      {content}
    </Container>
  );
}

export default Carrito;
