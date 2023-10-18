import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import { Context } from '../contexts/PizzaContext';
import IconCart from '../components/IconCart';

function Pizza() {
  const { id } = useParams();
  const { pizzas, addCart, monedaLocal } = useContext(Context);

  const displayPizzas = pizzas
    .filter((pizza) => pizza.id === id)
    .map((pizza, index) => (
      <Card key={index} className="row flex-row py-3">
        <Container className="col-12 col-md-4">
          <Card.Img src={pizza.img} alt={pizza.name} />
        </Container>
        <Container className="col-12 col-md-8">
          <Card.Header>
            <span className="text-capitalize fw-bold fs-5">
              {pizza.name}
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>{pizza.desc}</Card.Text>
            Ingredientes:
            <ul>
              {pizza.ingredients.map((ingrediente, idx) => (
                <li key={idx}>🍕 {ingrediente}</li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer className="text-center">
            <Card.Text className="d-flex justify-content-around align-items-center">
              <span className="fw-bold fs-5">
                {monedaLocal(pizza.price)}
              </span>
              <Button onClick={() => addCart(pizza)}>
                Añadir <IconCart tamaño=".9rem" color="white" />
              </Button>
            </Card.Text>
          </Card.Footer>
        </Container>
      </Card>
    ));

  return <Container>{displayPizzas}</Container>;
}

export default Pizza;
