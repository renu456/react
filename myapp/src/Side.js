import React from 'react';
import {Layout, Menu, Icon } from 'antd'

const { Sider } = Layout;
const {SubMenu }= Menu;

function Side() {
  return (
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
  );
}

export default Side;
