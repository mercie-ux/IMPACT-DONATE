import React from "react";
import {
	Layout,
	Menu,
	Button,
	Typography,
	Image,
	Space,
	Row,
	Col,
	Card,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
	const navigate = useNavigate();

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
		<Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
			{/* Header with Logo and Navbar */}

			{/* Main Content */}
			<Content
				style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}
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
						style={{ marginBottom: "40px" }}
					>
						<Col xs={24} md={12}>
							<Title level={1} style={{ color: "#002B36" }}>
								Empowering Developers Worldwide
							</Title>
							<Paragraph
								style={{ fontSize: "18px", color: "#334E58" }}
							>
								Your Bitcoin donations help developers fuel
								innovation and creativity. Together, we are
								shaping the future of technology.
							</Paragraph>
							<Button
								 onClick={() => navigate("/charities")} 
								type="primary"
								size="large"
								style={{
									backgroundColor: "#d4f674",
									border: "none",
									color: "#002B36",
								}}
							>
								Donate Now
							</Button>
						</Col>
						<Col xs={24} md={12}>
							<Image
								width={240}
								src="src/assets/home-page-pic.png"
								alt="Innovation Illustration"
								preview={false}
								style={{ borderRadius: "8px" }}
							/>
						</Col>
					</Row>

					{/* Mission Section */}
					<Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
						<Col xs={24}>
							<Title level={2} style={{ color: "#002B36" }}>
								Our Mission
							</Title>
							<Paragraph
								style={{ fontSize: "16px", color: "#334E58" }}
							>
								We support talented developers by providing the
								resources they need to bring their ideas to
								life. Your contributions fuel projects, tools,
								and innovations that have the power to change
								the world.
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
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Help fund groundbreaking projects that solve
									real-world problems using cutting-edge
									technology.
								</Paragraph>
							</Card>
						</Col>
						<Col xs={24} md={8}>
							<Card
								title="Empowering Developers"
								bordered={false}
								style={{
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Your donations give developers the resources
									they need to succeed, from tools to
									education.
								</Paragraph>
							</Card>
						</Col>
						<Col xs={24} md={8}>
							<Card
								title="Shaping the Future"
								bordered={false}
								style={{
									backgroundColor: "#d4f674",
									color: "#002B36",
								}}
							>
								<Paragraph>
									Join a community that’s committed to driving
									innovation and making a lasting impact on
									the world.
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
