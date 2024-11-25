import React, { useState } from "react";
import { Form, Input, Button, Typography, Layout, Space, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { FiClipboard, FiCheckCircle } from "react-icons/fi";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Donation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [invoiceCopied, setInvoiceCopied] = useState(false);

  const onFinish = (values) => {
    // Simulate invoice generation
    setInvoice("lnbcrt5u1pn5pk3spp5rckd5q436ke0tx2vzv60kyy23gg9wjnuupvhsw5dxnwarwmq6f7qdqqcqzzsxqyz5vqsp5s0ufxmj997cvkulhal8a2ukery9jgj52tjwucqzcl0parqem6eyq9qxpqysgqwrdnc50qnj8p7j7xw9t8wh9fsvpth3rfrga7uv7y2skzqte3v6ephu56ykfkwp3chrgwzc4u2a4dnaat2ccpwkfv9hxq2d920sf54ecqastclq");
    message.success("Invoice generated. Copy and paste it into your wallet to make the payment.");
  };

  const handleCopyInvoice = () => {
    navigator.clipboard.writeText(invoice);
    setInvoiceCopied(true);
    message.success("Invoice copied to clipboard!");
  };

  const handleCheckPayment = () => {
    // Simulate payment verification (this would involve backend logic with LND integration)
    setPaymentStatus(true);
    message.success("Payment successful! Thank you for your contribution.");
  };

  return (
    <Layout>
      <Content style={{ padding: "50px 20px", backgroundColor: "#f8f8f8" }}>
        <Title level={2} style={{ textAlign: "center", color: "#4a4a4a", fontWeight: "bold" }}>
          Support {state?.name}
        </Title>
        <Paragraph style={{ textAlign: "center", color: "#6c757d", fontStyle: "italic" }}>
          Fill in your details below to contribute to this impactful project.
        </Paragraph>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Amount (sats)"
              name="amount"
              rules={[{ required: true, message: "Please enter the donation amount" }]}
            >
              <Input type="number" placeholder="e.g., 100" />
            </Form.Item>

            <Form.Item
              label="Description (optional)"
              name="description"
            >
              <Input.TextArea placeholder="Write a message (optional)" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#d4f674",
                borderColor: "#d4f674",
                color: "#232155",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Donate
            </Button>
          </Form>

          {invoice && (
            <div style={{ marginTop: "20px" }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Paragraph strong>Invoice:</Paragraph>
                <Paragraph style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "4px" }}>
                  {invoice}
                </Paragraph>
                <Button
                  icon={<FiClipboard />}
                  onClick={handleCopyInvoice}
                  style={{ width: "100%" }}
                  type="default"
                >
                  {invoiceCopied ? "Invoice Copied!" : "Copy Invoice"}
                </Button>
              </Space>

              {!paymentStatus && (
                <Button
                  onClick={handleCheckPayment}
                  type="primary"
                  icon={<FiCheckCircle />}
                  style={{ width: "100%", marginTop: "20px", backgroundColor: "#232155" }}
                >
                  Check Payment
                </Button>
              )}

              {paymentStatus && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <Paragraph strong>Your payment has been confirmed!</Paragraph>
                  <Button
                    type="link"
                    onClick={() => navigate("/transaction-history")}
                    style={{ color: "#d4f674" }}
                  >
                    View Transaction
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default Donation;
