import { Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';

function CarritoItems({ cart, decreaseCount, increaseCount, monedaLocal }) {
  return cart.map((pizza, index) => (
    <tr key={index}>
      <td>
        <img src={pizza.img} alt={pizza.name} />
      </td>
      <td className="w-75 text-capitalize">{pizza.name}</td>
      <td>
        <Button onClick={() => decreaseCount(index)}>-</Button>
      </td>
      <td>{pizza.count}</td>
      <td>
        <Button onClick={() => increaseCount(index)}>+</Button>
      </td>
      <td>=</td>
      <td>{monedaLocal(pizza.count * pizza.price)}</td>
    </tr>
  ));
}

export default function CarritoCompra() {
  const {
    cart,
    decreaseCount,
    increaseCount,
    totalCart,
    monedaLocal,
  } = useContext(Context);

  return (
    <>
      <Table responsive>
        <tbody>
          <CarritoItems
            cart={cart}
            decreaseCount={decreaseCount}
            increaseCount={increaseCount}
            monedaLocal={monedaLocal}
          />
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end fw-bold">
              Total
            </td>
            <td>=</td>
            <td className="fw-bold">{monedaLocal(totalCart)}</td>
          </tr>
        </tfoot>
      </Table>
      <Button className="float-end">Ir a pagar</Button>
    </>
  );
}
