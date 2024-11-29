import React from "react";
import { Form, Input, Select, Button, Typography, Row, Col, Card, message } from "antd";
import NavBar from "./NavBar"; 

const { Option } = Select;

const majors = [
  "Computer Science",
  "Business Administration",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Biology",
  "Physics",
  "Mathematics",
  "Economics",
  "Psychology",
  "Art and Design",
];

const mbtiOptions = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

const RegistrationPage = () => {
  const onFinish = (values) => {
    console.log("Form Values: ", values);
    message.success("Your registration is successful!");
  };

  return (
    <div>
      <NavBar />
      <div className="registration-container" style={{ marginTop: "40px", padding: "0 50px" }}>
        <Row justify="center" gutter={[16, 16]}>
          {/* Left Section: Illustration */}
          <Col
            xs={24}
            md={10}
            style={{
              display: "flex", // Flexbox for vertical alignment
              alignItems: "center", // Center the image vertically
              justifyContent: "center", // Center the image horizontally
              height: "100%", // Full height of the parent container
            }}
          >
            <img
              src="/illustration.svg"
              alt="Registration Illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginTop: "50px"
              }}
            />
          </Col>

          {/* Right Section: Form */}
          <Col xs={24} md={14}>
            <Card
              style={{
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "600px", // Constrain the width of the Card
                margin: "0 auto", // Center the Card within the column
              }}
            >
              <Typography.Title level={3} style={{ fontWeight: "bold", textAlign: "center" }}>
                Who are you?
              </Typography.Title>
              <Typography.Text style={{ fontSize: "16px", marginBottom: "20px", display: "block", textAlign: "center" }}>
                Tell us about yourself
              </Typography.Text>

              <Form
                layout="vertical"
                onFinish={onFinish}
                style={{
                  maxWidth: "500px",
                  margin: "auto",
                }}
              >
                {/* Unique Name */}
                <Form.Item
                  label={
                    <Typography.Text
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Your Nickname
                    </Typography.Text>
                  }
                  name="uniqueName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your unique name!",
                    },
                  ]}
                >
                  <Input placeholder="e.g., V for Taeyoung" />
                </Form.Item>

                {/* Gender */}
                <Form.Item
                  label={
                    <Typography.Text
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Your Gender
                    </Typography.Text>
                  }
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select your gender!",
                    },
                  ]}
                >
                  <Select placeholder="Please select">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                {/* Degree Type */}
                <Form.Item
                  label={
                    <Typography.Text
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Your Degree
                    </Typography.Text>
                  }
                  name="degreeType"
                  rules={[
                    {
                      required: true,
                      message: "Please select your degree type!",
                    },
                  ]}
                >
                  <Select placeholder="Please select">
                    <Option value="bachelor">Bachelor</Option>
                    <Option value="master">Master</Option>
                    <Option value="phd">Ph.D.</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                {/* Major */}
                <Form.Item
                  label={
                    <Typography.Text
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Your Major
                    </Typography.Text>
                  }
                  name="major"
                  rules={[
                    {
                      required: true,
                      message: "Please select your major!",
                    },
                  ]}
                >
                  <Select placeholder="Please select">
                    {majors.map((major, index) => (
                      <Option key={index} value={major}>
                        {major}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* MBTI */}
                <Form.Item
                  label={
                    <Typography.Text
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Your MBTI (optional)
                    </Typography.Text>
                  }
                  name="mbti"
                >
                  <Select placeholder="Please select">
                    {mbtiOptions.map((mbti, index) => (
                      <Option key={index} value={mbti}>
                        {mbti}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#4F51FD",
                      borderColor: "#4F51FD",
                      height: "46px", 
                      marginTop: "12px", 
                    }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegistrationPage;
