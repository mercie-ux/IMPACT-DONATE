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
      {/* Media Queries for Responsiveness */}
      <style>
        {`
          /* Mobile Devices (up to 767px) */
          @media (max-width: 767px) {
            .responsive-header {
              flex-direction: column !important;
              padding: 0 15px !important;
              height: auto !important;
              line-height: normal !important;
            }
            .responsive-header .logo-title {
              margin-bottom: 10px;
              justify-content: center;
            }
            .responsive-header .logo-title img {
              width: 50px !important;
              height: 50px !important;
              margin-right: 10px !important;
            }
            .responsive-header .logo-title h1 {
              font-size: 18px !important;
            }
            .responsive-menu {
              flex: none !important;
              width: 100% !important;
              justify-content: center !important;
            }
            .responsive-menu .ant-menu-item {
              padding: 6px 12px !important;
              font-size: 14px !important;
              text-align: center;
            }
          }

          /* Tablet Devices (768px to 1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            .responsive-header {
              padding: 0 20px !important;
            }
            .responsive-header .logo-title img {
              width: 60px !important;
              height: 60px !important;
              margin-right: 12px !important;
            }
            .responsive-header .logo-title h1 {
              font-size: 20px !important;
            }
            .responsive-menu .ant-menu-item {
              padding: 6px 14px !important;
              font-size: 15px !important;
            }
          }

          /* Desktop Devices (1024px and above) */
          @media (min-width: 1024px) {
            .responsive-header {
              padding: 0 30px !important;
            }
            .responsive-menu .ant-menu-item {
              padding: 8px 16px !important;
              font-size: 16px !important;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <Header
        className="responsive-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#002B36",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo and Title Section */}
        <div className="logo-title" style={{ display: "flex", alignItems: "center" }}>
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
          className="responsive-menu"
          onClick={handleMenuClick}
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            fontWeight: "600",
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