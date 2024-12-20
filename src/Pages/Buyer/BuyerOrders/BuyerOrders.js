import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import NavBar from "../../../Components/Uitily/NavBar";
import { orders } from "../../../mock/orders";
import Footer from "../../../Components/Uitily/Footer";

const BuyerOrders = () => {
  return (
    <div>
      <Container>
        <NavBar
          link1="My Profile"
          link2="Messages"
          link3="Favorites"
          link4="Orders"
          to1="/buyer/buyerProfile"
          to2="/buyer/messages"
          to3="/buyer/favorites"
          to4="/buyer/orders"
        />

        <h1 className="my-4">My Orders</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
};

export default BuyerOrders;
