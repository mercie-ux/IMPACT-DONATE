import React from "react";
import { Card, Button, Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;



const developers = [
	{
		id: 1,
		name: "Alice Johnson",
		project: "Open-source AI model for education",
		image: "src/assets/img3.jpg",
	},
	{
		id: 2,
		name: "Brian Smith",
		project: "Decentralized storage for developers",
		image: "src/assets/img4.jpg",
	},
	{
		id: 3,
		name: "Cynthia Lee",
		project: "Blockchain-based healthcare solution",
        image: "src/assets/img8.jpg",
	},
];

const Charities = () => {
    const navigate = useNavigate();
	return (
		<div style={{ padding: "50px", backgroundColor: "#f8f8f8" }}>
			<Title level={2} style={{ textAlign: "center", color: "#4a4a4a" }}>
				Charities
			</Title>
			<Paragraph style={{ textAlign: "center", color: "#6c757d" }}>
				Explore projects by talented developers and contribute to their
				journey.
			</Paragraph>
			<Row gutter={[16, 16]} justify="center">
				{developers.map((developer) => (
					<Col xs={24} sm={12} md={8} key={developer.id}>
						<Card
							title={developer.name}
							bordered={false}
							style={{
								borderRadius: "8px",
								background: "#ffffff",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
							}}
							cover={
								<img
									alt={developer.name}
									src={developer.image}
									style={{
										borderRadius: "8px 8px 0 0",
										height: "150px",
										objectFit: "cover",
									}}
								/>
							}
						>
							<Paragraph>{developer.project}</Paragraph>
							<Button
								type="primary"
                                onClick={() => navigate("/donation")} 
								style={{
									backgroundColor: "#d4f674",
									borderColor: "#d4f674",
								}}
							>
								Donate
							</Button>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Charities;
