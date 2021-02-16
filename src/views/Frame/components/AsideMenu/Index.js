import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import router from "../../../../router";
export default function Index() {
  const { SubMenu } = Menu;
  /* 无二级菜单 */
  const noSubMenu = (curItem, index) => {
    return (
      <Menu.Item key={index} icon={<PieChartOutlined />}>
        <Link to={curItem.key}>{curItem.title}</Link>
      </Menu.Item>
    );
  };
  /* 有二级菜单 */
  const subMenu = (curItem, index) => {
    let mIndex = index + "";
    return (
      <SubMenu key={index} icon={<UserOutlined />} title={curItem.title}>
        {curItem.child.map((curItem, index) => {
          console.log(curItem);
          mIndex = mIndex + index;
          return curItem.child && curItem.child.length > 0
            ? subMenu(curItem, mIndex)
            : noSubMenu(curItem, mIndex);
        })}
      </SubMenu>
    );
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      {router &&
        router.map((curItem, index) => {
          return curItem.child && curItem.child.length > 0
            ? subMenu(curItem, index)
            : noSubMenu(curItem, index);
        })}
    </Menu>
  );
}
