import React from 'react';
import { Card, Spinner, Alert } from 'react-bootstrap';

const RealTimePrice = () => {
  return (
    <div>
      {/* First Card with an iframe */}
      <Card>
        <Card.Body>
          <Card.Title className="card-title-custom">Ethereum Summary Dashboard</Card.Title>
          <iframe
            src="https://analytics.dapplooker.com/public/dashboard/9ee1a693-d0c3-41be-b48a-edc1c76a1683"
            frameBorder="0"
            width="100%"
            height="900"
            style={{ border: 0 }}
            allowtransparency
          ></iframe>
        </Card.Body>
      </Card>

      {/* Second Card with another iframe */}
      <Card>
        <Card.Body>
          <Card.Title className="card-title-custom">Ethereum Transaction Dashboard</Card.Title>
          <iframe
            src="https://analytics.dapplooker.com/public/dashboard/b485054f-e155-43f0-b22e-3e5249965b87"
            frameBorder="0"
            width="100%"
            height="1700"
            style={{ border: 0 }}
            allowtransparency
          ></iframe>
        </Card.Body>
      </Card>

      {/* Third Card */}
      <Card>
        <Card.Body>
          <Card.Title className="card-title-custom">Ethereum Gas Dashboard</Card.Title>
          <iframe
            src="https://analytics.dapplooker.com/public/dashboard/02e770a9-b4ac-48eb-9fdf-26af9f629f31"
            frameBorder="0"
            width="100%"
            height="1600"
            style={{ border: 0 }}
            allowtransparency
          ></iframe>
        </Card.Body>
      </Card>

            {/* 4th Card */}
      <Card>
        <Card.Body>
          <Card.Title className="card-title-custom">Ethereum Block Dashboard</Card.Title>
          <iframe
            src="https://analytics.dapplooker.com/public/dashboard/03b2a196-95fa-4bd3-bcdb-403482026cf6"
            frameBorder="0"
            width="100%"
            height="1600"
            style={{ border: 0 }}
            allowtransparency
          ></iframe>
        </Card.Body>
      </Card>

           {/* 5th Card */}
      <Card>
        <Card.Body>
          <Card.Title className="card-title-custom">Ethereum Contract Dashboard</Card.Title>
          <iframe
            src="https://analytics.dapplooker.com/public/dashboard/cb3c6fbc-a31d-4c0b-b6f9-b82f1319b329"
            frameBorder="0"
            width="100%"
            height="1400"
            style={{ border: 0 }}
            allowtransparency
          ></iframe>
        </Card.Body>
      </Card>

    </div>
  );
};

export default RealTimePrice;
