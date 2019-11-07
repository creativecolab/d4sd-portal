import React from 'react';
import LoginCard from '../../login-card/index';
import {Row, Col, Layout, Menu} from '@d4sd/components';
import './style.less'
import Menubar from '../../menubar';

const { Header, Footer, Sider, Content } = Layout;

const LoginLayout =(props: any)=>{
  return(
    <div>
      <Row type="flex" justify="center" align="bottom" gutter={[0, 64]}>
        <Col> 
          <Menubar/>
        </Col>
        <Col span={8}>
          <LoginCard />
        </Col>
      </Row>
    </div>
  );
}

export default LoginLayout;
