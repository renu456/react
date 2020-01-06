import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd'
import Table1 from './components/Table1'
import Table2 from './components/Table2'
import Table3 from './components/Table3'
import Table4 from './components/Table4'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
<div className="App">
  <Layout>
    
    
  <Header className="header" style={{position: "fixed", zIndex: 1, width: '100%'}}>
      <div className="logo" />
          <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
          >

        <Menu.Item key="1">
        <span className="nav-text">nav 1</span></Menu.Item>
        <Menu.Item key="2">
        <span className="nav-text">nav 2</span></Menu.Item>
        <Menu.Item key="3">
        <span className="nav-text">nav 3</span></Menu.Item>
        </Menu>
    </Header>
    
       
      
<Layout style={{ padding: "24px 0", background: "white" }}>
        <Sider  style={{ background: "white" ,
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0 }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav  1
                </span>
              }
            >
              <Menu.Item key="1">option 1</Menu.Item>
              <Menu.Item key="2">option 2</Menu.Item>
              <Menu.Item key="3">option 3</Menu.Item>
              <Menu.Item key="4">option 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{  margin: "80px 250px 0" ,overflow: "initial"}}>
          <Table1 />
          <Table2 />
          <Table3 />
          <Table4 />
          
      </Content>

      </Layout>
    
    <Footer style={{ textAlign: "center" ,position: "sticky", bottom: "0" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
      
    </div>
  );
}

export default App;
