import React, { useState } from 'react';
import { Card, Form, Button, Table, Badge } from 'react-bootstrap';

const CryptoWallet = () => {
  const initialBalance = {
    Bitcoin: 2,
    Ethereum: 5,
    Litecoin: 10,
  };

  const [balance, setBalance] = useState(initialBalance);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [transfer, setTransfer] = useState({
    crypto: 'Bitcoin',
    amount: '',
    to: '',
  });
  const [achievements, setAchievements] = useState([]);

  const handleInputChange = (e) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    const { crypto, amount, to } = transfer;
    const amt = parseFloat(amount);

    if (!crypto || isNaN(amt) || amt <= 0 || !to) {
      alert('Please enter valid details.');
      return;
    }

    if (amt > balance[crypto]) {
      alert(`Insufficient ${crypto} balance.`);
      return;
    }

    // Update balance
    setBalance({
      ...balance,
      [crypto]: balance[crypto] - amt,
    });

    // Add to transaction history
    const newTransaction = {
      id: transactionHistory.length + 1,
      type: 'Transfer',
      crypto,
      amount: amt,
      to,
      date: new Date().toLocaleString(),
    };
    setTransactionHistory([newTransaction, ...transactionHistory]);

    // Reset transfer form
    setTransfer({
      crypto: 'Bitcoin',
      amount: '',
      to: '',
    });

    // Check for achievements
    checkAchievements(transactionHistory.length + 1);
  };

  const checkAchievements = (transactionCount) => {
    let newAchievements = [...achievements];
    if (transactionCount === 5) {
      newAchievements.push('5 Transactions Completed');
    }
    if (transactionCount === 10) {
      newAchievements.push('10 Transactions Completed');
    }
    // Add more milestones as desired
    setAchievements(newAchievements);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Crypto Wallet</Card.Title>
        <h5>Balances:</h5>
        <ul>
          {Object.keys(balance).map((crypto, index) => (
            <li key={index}>
              {crypto}: {balance[crypto]}
            </li>
          ))}
        </ul>

        <h5>Transfer Cryptocurrency</h5>
        <Form onSubmit={handleTransfer}>
          <Form.Group controlId="cryptoSelect">
            <Form.Label>Cryptocurrency</Form.Label>
            <Form.Control
              as="select"
              name="crypto"
              value={transfer.crypto}
              onChange={handleInputChange}
            >
              {Object.keys(balance).map((crypto, index) => (
                <option key={index} value={crypto}>
                  {crypto}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="amountInput">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter amount"
              name="amount"
              value={transfer.amount}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="toInput">
            <Form.Label>Transfer To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipient"
              name="to"
              value={transfer.to}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Transfer
          </Button>
        </Form>

        <h5 className="mt-4">Transaction History</h5>
        {transactionHistory.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Cryptocurrency</th>
                <th>Amount</th>
                <th>To</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistory.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.type}</td>
                  <td>{tx.crypto}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.to}</td>
                  <td>{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        <h5 className="mt-4">Achievements</h5>
        {achievements.length === 0 ? (
          <p>No achievements yet.</p>
        ) : (
          <div>
            {achievements.map((ach, index) => (
              <Badge key={index} variant="success" className="mr-2">
                {ach}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CryptoWallet;
