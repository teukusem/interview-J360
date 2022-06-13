import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card, Table } from 'react-bootstrap';

function Forminput() {
  const [form, setForm] = useState({
    sumberpesanan: '',
    firstName: '',
    lastName: '',
    email: '',
    nomorHp: '',
    jmlhRoti: '',
    notes: '',
  });
  const [data, setData] = useState([]);

  const { sumberpesanan, firstName, lastName, email, nomorHp, jmlhRoti, notes } = form;
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dataSource = (data) => {
    const whatsappArr = data.filter((item) => item.sumberpesanan === 'whatsapp');
    const callArr = data.filter((item) => item.sumberpesanan === 'call');
    const emailArr = data.filter((item) => item.sumberpesanan === 'email');

    return {
      whatsapp: whatsappArr.length,
      call: callArr.length,
      email: emailArr.length,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData([...data, form]);
  };

  return (
    <Container>
      <h1>Form</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Select className="input-control " aria-label="Default select example" value={sumberpesanan} name="sumberpesanan" onChange={onChange}>
          <option hidden>order source</option>
          <option value="whatsapp">Whatsapp</option>
          <option value="call">Call</option>
          <option value="email">E-mail</option>
        </Form.Select>
        <h3 className="mt-3">Name</h3>
        <Row className="d-flex g-5">
          <Col>
            <Form.Control className="input-control " type="text" placeholder="First Name" value={firstName} name="firstName" onChange={onChange} />
          </Col>
          <Col>
            <Form.Control className="input-control " type="text" placeholder="Last Name" value={lastName} name="lastName" onChange={onChange} />
          </Col>
        </Row>
        <h3 className="mt-3">E-mail</h3>
        <Form.Control type="email" placeholder="E-mail" className="input-control" value={email} name="email" onChange={onChange} />
        <h3 className="mt-3">Phone Number</h3>
        <Row className="d-flex g-2">
          <Col xl="1" sm="2">
            <Form.Control className="input-control text-center" type="text" placeholder="Area Code" value={'+62'} readOnly />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Normal text" className="input-control " value={nomorHp} name="nomorHp" onChange={onChange} />
          </Col>
        </Row>
        <h3 className="mt-3">Amount Of Bread</h3>
        <Form.Control type="number" placeholder="Jumlah Roti" className="input-control " value={jmlhRoti} name="jmlhRoti" onChange={onChange} />
        <h3 className="mt-3">Note</h3>
        <Form.Control as="textarea" placeholder="Leave a note here" className="input-control " name="notes" value={notes} onChange={onChange} />
        <div className="d-grid gap-2 mt-3">
          <Button variant="secondary" size="xs" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <div className="mt-5">
        <h1 className="text-center">Dashboard Pesanan</h1>
        <Card>
          <Card.Body>
            <Row className="d-flex ">
              <Col xl="5" sm="5">
                <p>Hello,{form.firstName}</p>
              </Col>
              <Col>
                <p>Pesanan Masuk</p>
              </Col>
            </Row>
            <Row className="d-flex g-4">
              <Col>
                <Card>
                  <Card.Body className="text-center">
                    <p>{dataSource(data).call}</p>
                    <p>Call</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body className="text-center">
                    <p>{dataSource(data).whatsapp}</p>
                    <p>whatsapp</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body className="text-center">
                    <p>{dataSource(data).email}</p>
                    <p>E-mail</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Table striped bordered hover variant="light" className="mt-3">
              <thead>
                <tr>
                  <th>name</th>
                  <th>E-mail</th>
                  <th>No.Hp</th>
                  <th>Jumlah Roti</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.email}</td>
                    <td>{item.nomorHp}</td>
                    <td>{item.jmlhRoti}</td>
                    <td>{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Forminput;
