import React from "react";
import { Card, Button, Row, Col, Typography, Space, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const { Title, Paragraph } = Typography;

const charities = [
  {
    id: 1,
    name: "Open-source AI Model for Education",
    amountNeeded: 1000000, // Amount in sats
    amountContributed: 250000, // Dummy contribution value
    description: "A groundbreaking AI project aiming to make education accessible for all.",
    image: "src/assets/img3.jpg",
  },
  {
    id: 2,
    name: "Decentralized Storage for Developers",
    amountNeeded: 500000, // Amount in sats
    amountContributed: 100000, // Dummy contribution value
    description: "A decentralized platform providing secure storage for developers.",
    image: "src/assets/img5.jpeg",
  },
  {
    id: 3,
    name: "Blockchain-based Healthcare Solution",
    amountNeeded: 2000000, // Amount in sats
    amountContributed: 1500000, // Dummy contribution value
    description: "Revolutionizing healthcare with blockchain technology for better transparency and security.",
    image: "src/assets/img8.jpg",
  },
];

const Charities = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f8f8f8" }}>
      <Title level={2} style={{ textAlign: "center", color: "#4a4a4a", fontWeight: "bold" }}>
        Charities & Projects
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#6c757d", fontStyle: "italic" }}>
        Support innovative projects and contribute to meaningful change.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {charities.map((charity) => {
          const progressPercentage = Math.round(
            (charity.amountContributed / charity.amountNeeded) * 100
          );

          return (
            <Col xs={24} sm={12} md={8} key={charity.id}>
              <Card
                title={charity.name}
                bordered={false}
                style={{
                  borderRadius: "8px",
                  background: "#ffffff",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
                cover={
                  <img
                    alt={charity.name}
                    src={charity.image}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                }
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Paragraph>{charity.description}</Paragraph>
                  <Paragraph strong>
                    Amount Needed:{" "}
                    <span
                      style={{
                        color: "#232155", // Dark blue for contrast
                        fontSize: "18px",
                        fontWeight: "bold",
                        backgroundColor: "#d4f674",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {charity.amountNeeded} sats
                    </span>
                  </Paragraph>

                  {/* Progress Bar */}
                  <Paragraph>
                    <span style={{ fontWeight: "bold" }}>Progress: </span>
                    <Progress
                      percent={progressPercentage}
                      size="small"
                      status="active"
                      strokeColor="#d4f674"
                      showInfo={false}
                      style={{ marginBottom: "10px" }}
                    />
                    <span>{charity.amountContributed} sats contributed</span>
                  </Paragraph>

                  <Button
                    type="primary"
                    onClick={() =>
                      navigate("/donation", {
                        state: {
                          name: charity.name,
                          amountNeeded: charity.amountNeeded,
                          description: charity.description,
                        },
                      })
                    }
                    icon={<FiHeart />}
                    style={{
                      backgroundColor: "#d4f674",
                      borderColor: "#d4f674",
                      color: "#232155",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    Donate Now
                  </Button>
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Charities;
