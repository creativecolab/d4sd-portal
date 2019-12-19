import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { Form } from '@d4sd/components';
import './style.less';

interface FeedbackCardIF {
  setSubmitStep(step: string): void;
}

const FeedbackCard = (props: FeedbackCardIF): JSX.Element => {
  const { setSubmitStep } = props;
  const { register, handleSubmit, setValue } = useForm();

  /* eslint-disable */
  const onSubmit = (data: any): void => {
    console.log(data);
    // Add your axios stuff here
    // data.email, data.password
  };
  /* eslint-enable */

  // register inputs
  useEffect(() => {
    register({ name: 'stuff' });
  }, []);

  // eslint-disable-next-line
  const handleChange = (e: any) => {
    setValue(e.target.name, e.target.value);
    setSubmitStep('');
  };
  return (
    <div className="ProjectInfoCard">
      <div className="ProjectInfo-body">
        <p>FEEDBACK</p>
        <Form layout="vertical" onSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};
export default FeedbackCard;
