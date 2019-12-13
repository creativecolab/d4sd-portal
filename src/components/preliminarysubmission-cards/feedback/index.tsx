import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import {
  Card, Radio, Button, message, Row, Col, Input, Form
} from '@d4sd/components';
import './style.less';


const FeedbackCard = (props: any) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // Add your axios stuff here
    // data.email, data.password
  };
  // register inputs
  useEffect(() => {
    register({ name: 'stuff' });
  }, []);
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
  };
  return (
  <div className="ProjectInfoCard">
    <div className="ProjectInfo-body">
    <p>FEEDBACK</p>
    <Form layout={'vertical'} onSubmit={handleSubmit(onSubmit)}>

    </Form>
    </div>
  </div>)
};
export default FeedbackCard;
