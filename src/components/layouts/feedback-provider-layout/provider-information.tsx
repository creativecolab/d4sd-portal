import React from 'react';
import {
  Row, Col, Form, Input, Checkbox
} from '@d4sd/components';

const ProviderInformation = (props: any): JSX.Element => {
  const setResponseValue = props.setResponseValue;
  
  // get values from local storage
  const name = localStorage.getItem('name') || '';
  const email = localStorage.getItem('email') || '';
  const institution = localStorage.getItem('institution') || '';
  const expertise = localStorage.getItem('expertise') || '';
  let shareEmail = false;
  if (localStorage.getItem('shareEmail') === 'true') {
    shareEmail = true;
  }
  setResponseValue("name", name);
  setResponseValue("email", email);
  setResponseValue("institution", institution);
  setResponseValue("expertise", expertise);
  setResponseValue("shareEmail", shareEmail);

  // store to state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.setItem(e.target.name, e.target.value);
    setResponseValue(e.target.name, e.target.value);
  };

  return (
    <div className="AboutYou">
      <h1>Information About You</h1>
      <Row type="flex" justify="center">
        <p>First tell us a little bit about yourself</p>
      </Row>

      <div className='form'>
        <Form>
          <Input.Group>
            <Row type="flex" gutter={{sm: 12}} justify='center'>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} >
                <h5 className='label'>1. Your full name</h5>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 8 }}>
                <Input onChange={handleChange} name="name" defaultValue={name} />
              </Col>
            </Row>

            <Row type="flex" gutter={{sm: 12}} justify='center'>
              <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                <h5 className='label'>2. Your email</h5>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 8 }}>
                <Input onChange={handleChange} name="email" defaultValue={email} />
              </Col>
            </Row>
            <Row type="flex" gutter={{sm: 12}} justify='center'>
              <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                <h5 className='label'>3. Your institution and title</h5>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 8 }}>
                <Input onChange={handleChange} name="institution" defaultValue={institution} />
              </Col>
            </Row>
            <Row type="flex" gutter={{sm: 12}} justify='center'>
              <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                <h5 className='label'>4. Your area of expertise</h5>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 8 }}>
                <Input onChange={handleChange} name="expertise" defaultValue={expertise} />
              </Col>
            </Row>
            <Row type='flex' gutter={{sm: 12}} justify='center'>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} lg={{ span: 8 }}>
                <p className='share-email'><span className='text'>Can we share your email with the team who submitted this idea?</span><Checkbox className='shareEmailCheck' onChange={(e) => {
                  setResponseValue('shareEmail', e.target.checked)
                  localStorage.setItem('shareEmail', (e.target.checked).toString());
                }} defaultChecked={shareEmail} /></p>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 8 }}>
                
              </Col>
            </Row>
          </Input.Group>

        </Form>
      </div>

    </div>
  );
};

export default ProviderInformation;
