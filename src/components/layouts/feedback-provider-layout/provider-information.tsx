import React, { useEffect, Provider } from 'react';
import { render } from 'react-dom';
import {
  Row, Col, Form, Icon, Input, Button
} from '@d4sd/components';
import useForm from 'react-hook-form';
import { withRouter } from 'react-router';

const ProviderInformation = (props: any) => {
  const { register, handleSubmit, setValue } = useForm();

  // get values from local storage
  const name = localStorage.getItem('name') || '';
  const email = localStorage.getItem('email') || '';
  const institution = localStorage.getItem('institution') || '';
  const expertise = localStorage.getItem('expertise') || '';


  const onSubmit = (data: any) => {
    console.log(data);
    // store information to Firebase
  };

  // store to state
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    register({ name: 'name' });
    register({ name: 'email' });
    register({ name: 'institution' });
    register({ name: 'expertise' });
  }, []);

  return (
    <div className="AboutYou">
      <h1>Information About You</h1>
      <Row type="flex" justify="center">
        <Col xs={{ span: 10 }} sm={{ span: 6 }}>
          <p>First tell us a little bit about yourself</p>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input.Group>
          <Row type="flex" justify="center">
            <Col xs={{ span: 10 }} sm={{ span: 6 }}>
              <h5>1. Your full name</h5>
            </Col>
            <Col xs={{ span: 20 }} sm={{ span: 12 }} lg={{ span: 8 }}>
              <Input onChange={handleChange} name="name" defaultValue={name} />
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <Col xs={{ span: 10 }} sm={{ span: 6 }}>
              <h5>2. Your email</h5>
            </Col>
            <Col xs={{ span: 20 }} sm={{ span: 12 }} lg={{ span: 8 }}>
              <Input onChange={handleChange} name="email" defaultValue={email} />
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <Col xs={{ span: 10 }} sm={{ span: 6 }}>
              <h5>3. Your institution and title</h5>
            </Col>
            <Col xs={{ span: 20 }} sm={{ span: 12 }} lg={{ span: 8 }}>
              <Input onChange={handleChange} name="institution" defaultValue={institution} />
            </Col>
          </Row>

          <Row type="flex" justify="center">
            <Col xs={{ span: 10 }} sm={{ span: 6 }}>
              <h5>4. Your area of expertise</h5>
            </Col>
            <Col xs={{ span: 20 }} sm={{ span: 12 }} lg={{ span: 8 }}>
              <Input onChange={handleChange} name="expertise" defaultValue={expertise} />
            </Col>
          </Row>


        </Input.Group>

      </Form>

    </div>
  );
};

export default ProviderInformation;
