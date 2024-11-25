import React from "react";
import {
    Layout,
    Typography,
    Button,
    Image,
    Row,
    Col,
    Card,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
    const navigate = useNavigate();

    return (
        <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
            <Content
                style={{
                    padding: "50px 20px",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    {/* Hero Section */}
                    <Row
                        gutter={[16, 16]}
                        align="middle"
                        style={{
                            marginBottom: "40px",
                            backgroundColor: "#ffffff",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Col xs={24} md={12}>
                            <Title level={1} style={{ color: "#2A2A2A" }}>
                                Empowering African Women Developers
                            </Title>
                            <Paragraph
                                style={{
                                    fontSize: "18px",
                                    color: "#575757",
                                    lineHeight: "1.8",
                                }}
                            >
                                Join us in supporting talented African women
                                developers as they bring groundbreaking ideas
                                to life. Together, we can drive innovation and
                                create opportunities for women in tech across
                                Africa.
                            </Paragraph>
                            <Button
                                onClick={() => navigate("/charities")}
                                type="primary"
                                size="large"
                                style={{
                                    backgroundColor: "#64B687", // Primary green
                                    border: "none",
                                    color: "#FFFFFF",
                                    marginTop: "20px",
                                }}
                            >
                                Explore Projects
                            </Button>
                        </Col>
                        <Col xs={24} md={12}>
                            <Image
                                width={240}
                                src="src/assets/home-page-pic.png"
                                alt="African Women Developers"
                                preview={false}
                                style={{
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                    border: "4px solid #64B687",
                                }}
                            />
                        </Col>
                    </Row>

                    {/* Mission Section */}
                    <Row
                        gutter={[16, 16]}
                        style={{ marginTop: "40px", marginBottom: "40px" }}
                    >
                        <Col xs={24}>
                            <Title level={2} style={{ color: "#2A2A2A" }}>
                                Our Mission
                            </Title>
                            <Paragraph
                                style={{
                                    fontSize: "16px",
                                    color: "#575757",
                                    lineHeight: "1.8",
                                }}
                            >
                                We believe in creating opportunities for African
                                women developers by providing the resources they
                                need to succeed. From funding innovative
                                projects to supporting education and tools, your
                                contributions make a lasting impact.
                            </Paragraph>
                        </Col>
                    </Row>

                    {/* Highlights Section */}
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={8}>
                            <Card
                                title="Innovative Projects"
                                bordered={false}
                                style={{
                                    backgroundColor: "#64B687",
                                    color: "#FFFFFF",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                }}
                            >
                                <Paragraph style={{ color: "#FFFFFF" }}>
                                    Support initiatives by African women that
                                    use technology to solve real-world problems.
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card
                                title="Empowering Women"
                                bordered={false}
                                style={{
                                    backgroundColor: "#FF7043", // Coral accent
                                    color: "#FFFFFF",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                }}
                            >
                                <Paragraph style={{ color: "#FFFFFF" }}>
                                    Your contributions help African women access
                                    education, tools, and mentorship in tech.
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card
                                title="Shaping the Future"
                                bordered={false}
                                style={{
                                    backgroundColor: "#64B687",
                                    color: "#FFFFFF",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                }}
                            >
                                <Paragraph style={{ color: "#FFFFFF" }}>
                                    Join a movement that’s driving innovation
                                    and changing the face of technology in
                                    Africa.
                                </Paragraph>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
}

export default Home;
