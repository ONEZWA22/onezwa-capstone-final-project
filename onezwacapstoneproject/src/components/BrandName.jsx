import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const BrandName = () => {
  return (
    <Link to="/">
      <Col xs={6} md={4}>
        <Image
          style={{ width: 60, height: 60 }}
          src="/onezwalogo.png"
          alt="Logo"
          roundedCircle
        />
      </Col>
    </Link>
  );
};

export default BrandName;
