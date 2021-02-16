import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// 引入api
import { Login, CodeLogin } from "../../api/acount";
// 加密
import CryptoJs from "crypto-js";
// 保存信息在本地
import { setValue } from "../../utils/cookie";

export default function LoginForm(props) {
  console.log(props);
  /* 页面跳转 */
  let history = useHistory();
  const { flag, setFlag } = props;

  // 初始化表单数据
  const [formData, setForm] = useState({
    username: "",
    password: "",
    codeStatus: true,
  });
  // ref
  const codeRef = useRef();

  // 获取验证码
  const getCode = () => {
    // console.log(codeRef.current.input.value);
    CodeLogin({ username: formData.username, module: "login" })
      .then((res) => {})
      .catch((err) => {});
  };

  // 登陆
  const onFinish = (values) => {
    console.log(process.env.NODE_ENV);
    values.password = CryptoJs.MD5(values.password).toString();
    Login(values)
      .then((res) => {
        console.log(res);
        // 写入token
        let obj = res.data.data;
        setValue("userInfo", JSON.stringify(obj));
        history.push("/index/user/add");
      })
      .catch(() => {});

    // console.log("Received values of form: ", values);
  };

  // 改变表单数据
  const changeInput = (type) => {
    return (event) => {
      switch (type) {
        case "username":
          setForm({
            ...formData,
            username: event.target.value,
            codeStatus: false,
          });
          break;

        default:
          break;
      }
    };
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item style={{ marginBottom: 0 }}>
        <div className="goPage">
          <p>登陆页</p>
          <p
            onClick={() => {
              setFlag(!flag);
            }}
          >
            去注册
          </p>
        </div>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={formData.username}
          onChange={changeInput("username")}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={formData.password}
        />
      </Form.Item>
      <Form.Item name="code">
        <Row gutter={14}>
          <Col span={15}>
            <Form.Item name="code">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="验证码"
                ref={codeRef}
              />
            </Form.Item>
          </Col>

          <Col span={9}>
            <Button
              type="primary"
              className="login-form-button"
              danger
              block
              disabled={formData.codeStatus}
              onClick={getCode}
            >
              获取验证码
            </Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
}
