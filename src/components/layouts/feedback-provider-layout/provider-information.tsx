import React, { useEffect, Provider } from 'react'
import {render} from 'react-dom'
import {Row, Col, Form, Icon, Input, Button} from '@d4sd/components'
import useForm from 'react-hook-form'
import { withRouter } from 'react-router'

const ProviderInformation = (props: any) => {
  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
    //store information to Firebase
  }

  //store to state
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
    console.log(e.target.value);
  }

  useEffect(()=>{
    register({name: 'name'});
    register({name: 'email'});
    register({name: 'institution'});
    register({name: 'expertise'});
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p>HENLO</p>
        
        <Input.Group>
        <Row type="flex" justify="center">
          <Col xs={{span: 10}} sm={{span: 6}}>
            <h4>1. Your full name:</h4>
          </Col>
          <Col xs={{span: 20}} sm={{span: 12}} lg={{span: 8}}>
            <Input onChange={handleChange} name="name" />
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col xs={{span: 10}} sm={{span: 6}}>
            <h4>2. Your email:</h4>
          </Col>
          <Col xs={{span: 20}} sm={{span: 12}} lg={{span: 8}}>
            <Input onChange={handleChange} name="email" />
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col xs={{span: 10}} sm={{span: 6}}>
            <h4>3. Your institution and <title></title>:</h4>
          </Col>
          <Col xs={{span: 20}} sm={{span: 12}} lg={{span: 8}}>
            <Input onChange={handleChange} name="institution" />
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col xs={{span: 10}} sm={{span: 6}}>
            <h4>4. Your area of expertise:</h4>
          </Col>
          <Col xs={{span: 20}} sm={{span: 12}} lg={{span: 8}}>
            <Input onChange={handleChange} name="expertise" />
          </Col>
        </Row>

          

        </Input.Group>

        <Row type="flex" justify="center">
          <Col span="10">
          <Button type="primary" htmlType="submit">SAVE</Button>
          </Col>
        </Row>
        
      </Form>

    </div>
  )

}

export default ProviderInformation