import React from "react";
import { Layout } from "antd";
import AsideMenu from "./components/AsideMenu/Index";
import ConRouter from "./components/ConRouter/Index";

import "./index.scss";
export default function Index() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div id="layout">
      <Layout>
        <Sider>
          <AsideMenu></AsideMenu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <ConRouter></ConRouter>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
