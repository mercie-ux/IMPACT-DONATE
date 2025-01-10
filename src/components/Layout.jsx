import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const { Header, Footer, Content } = AntdLayout;

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuKeyFromPath = (path) => {
    if (path === "/") return "home";
    if (path.startsWith("/charities")) return "charities";
    if (path.startsWith("/donation")) return "donation";
    return null;
  };

  const selectedKey = getMenuKeyFromPath(location.pathname);

  const handleMenuClick = (e) => {
    if (e.key === "home") navigate("/");
    if (e.key === "charities") navigate("/charities");
    if (e.key === "donation") navigate("/donation");
  };

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#002B36",
          padding: "0 30px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo and Title Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/src/assets/impact-donate-logo.png"
            alt="Logo"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "15px",
            }}
          />
          <h1
            style={{
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: "900",
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Impact<span style={{ color: "#64B687" }}>Donate</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <Menu
          onClick={handleMenuClick}
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            fontWeight: "600",
            fontSize: "16px",
            background: "transparent",
            borderBottom: "none",
          }}
          items={[
            {
              key: "home",
              label: "Home",
              style: {
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: selectedKey === "home" ? "#64B687" : "transparent",
                color: selectedKey === "home" ? "#ffffff" : "#d4f674",
                transition: "background-color 0.3s ease",
              },
            },
            {
              key: "charities",
              label: "Charities",
              style: {
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: selectedKey === "charities" ? "#64B687" : "transparent",
                color: selectedKey === "charities" ? "#ffffff" : "#d4f674",
                transition: "background-color 0.3s ease",
              },
            },
            {
              key: "donation",
              label: "Donation",
              style: {
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: selectedKey === "donation" ? "#64B687" : "transparent",
                color: selectedKey === "donation" ? "#ffffff" : "#d4f674",
                transition: "background-color 0.3s ease",
              },
            },
          ]}
        />
      </Header>

      {/* Main Content Section */}
      <Content style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
        <Outlet /> {/* Renders the current page content */}
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#002B36",
          color: "#fff",
          padding: "20px",
          borderTop: "4px solid #64B687",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>
          Empowering <span style={{ color: "#64B687" }}>African Women Developers</span> to Innovate, Lead, and Thrive.
        </p>
        <p style={{ fontSize: "14px", margin: 0 }}>
          © {new Date().getFullYear()} African Developers - Building a brighter tech future together.
        </p>
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
