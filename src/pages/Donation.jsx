
import React from 'react';
import { Form, Input, Button, Typography, Layout, Menu, Image } from 'antd';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const Donation = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };
  const handleMenuClick = (e) => {
    console.log(e);

    if (e.key === "home") {
        navigate(`/`, {
            // state: { module: record },
        });
    } else if (e.key === "charities") {
        navigate(`/charities`, {
            // state: { record },
        });
    } else if (e.key === "donation") {
        navigate(`/donation`, {
            // state: { record },
        });
    }
};

  return (
    <>
    <Layout>
    
    <div style={{ padding: '50px', backgroundColor: '#f8f8f8' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#4a4a4a' }}>
        Donate Now
      </Title>
      <Paragraph style={{ textAlign: 'center', color: '#6c757d' }}>
        Fill in your details below to support our developers.
      </Paragraph>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            label="Amount (BTC)"
            name="amount"
            rules={[{ required: true, message: 'Please enter the amount in BTC' }]}
          >
            <Input type="number" placeholder="e.g., 0.01" />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: '#d4f674', borderColor: '#d4f674', width: '100%' }}>
            Donate
          </Button>
        </Form>
      </div>
    </div>
    
</Layout>
    </>
    


    
  );
};

export default Donation;
