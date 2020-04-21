import React, { useEffect } from 'react';
import {
  Row, Col, Form, Input
} from '@d4sd/components';
import useForm from 'react-hook-form';

const ProviderInformation = (props: any): JSX.Element => {
  const { register, handleSubmit, setValue } = useForm();
  const setResponseValue = props.setResponseValue;
  // get values from local storage
  const name = localStorage.getItem('name') || '';
  const email = localStorage.getItem('email') || '';
  const institution = localStorage.getItem('institution') || '';
  const expertise = localStorage.getItem('expertise') || '';
  setResponseValue("name", name);
  setResponseValue("email", email);
  setResponseValue("institution", institution);
  setResponseValue("expertise", expertise);
  /* eslint-disable */
  const onSubmit = (data: any) => {
    console.log(data);
    // store information to Firebase
  };
  /* eslint-enable */

  // store to state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.name, e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
    setResponseValue(e.target.name, e.target.value);
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
