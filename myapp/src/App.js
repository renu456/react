import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd'
import Table1 from './components/Table1'
import Table2 from './components/Table2'
import Table3 from './components/Table3'
import Table4 from './components/Table4'



const { Header, Content, Footer, Sider } = Layout;
const {SubMenu }= Menu;


function App() {
  return (
  <Layout>
    <Header style={{  position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />  
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} style={{ lineHeight: "64px",margin:"0px 70px"}}>
         <Menu.Item key="1">Home</Menu.Item>
           <SubMenu key="About" title={ <span> About</span> }>
              <Menu.Item key="2">option1</Menu.Item>
              <Menu.Item key="3">option2</Menu.Item>
              <Menu.Item key="4">option3</Menu.Item>
              <Menu.Item key="5">option4</Menu.Item>
           </SubMenu>
         <Menu.Item key="6">Contact Us</Menu.Item>
        </Menu> 
    </Header> 

    <Sider style={{ overflow: 'auto', height: '110hv',margin: "65px 0px 0px 0px",position: 'fixed',left: 0,}}>
       <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]} style={{ height: "600px"}}>
          <SubMenu key="sub1" title={ <span> <Icon type="user" /> subnav 1 </span> } >
             <Menu.Item key="1">option1</Menu.Item>
             <Menu.Item key="2">option2</Menu.Item>
             <Menu.Item key="3">option3</Menu.Item>
             <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={ <span> <Icon type="laptop" /> subnav 2</span> }>
             <Menu.Item key="5">option5</Menu.Item>
             <Menu.Item key="6">option6</Menu.Item>
             <Menu.Item key="7">option7</Menu.Item>
             <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={ <span> <Icon type="notification" />subnav 3 </span> } >
             <Menu.Item key="9">option9</Menu.Item>
             <Menu.Item key="10">option10</Menu.Item>
             <Menu.Item key="11">option11</Menu.Item>
             <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>


    <Layout style={{ marginLeft: 200 }}> 
       <Content style={{ margin: "65px 10px 0 " }}>
          <div style={{ background: "white", minHeight: 260 }}> 
             <Table1 />
             <Table2 />
             <Table3 />
             <Table4 />  
           </div> 
        </Content>


         <Footer style={{ textAlign: "center"  }}>
               Ant Design ©2018 Created by Ant UED
          </Footer>
    </Layout> 

  </Layout>
  );
}

export default App;




