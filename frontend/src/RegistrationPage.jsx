import React, { useRef, useState } from "react";
import { Form, Input, Select, Button, Typography, Row, Col, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const majors = [
  "Computer Science",
  "Business Administration",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Aerospace Engineering",
  "Civil and Environmental Engineering",
  "Bio and Brain Engineering",
  "Industrial and Systems Engineering",
  "Chemical and Biomolecular Engineering",
  "Materials Science and Engineering",
  "Nuclear and Quantum Engineering",
  "Biology",
  "Physics",
  "Mathematics",
  "Economics",
  "Other", 
];

const mbtiOptions = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

const RegistrationPage = () => {
  const navigate = useNavigate();
  const formRefs = {};
  const [showCustomMajor, setShowCustomMajor] = useState(false);

  const createRef = (name) => {
    if (!formRefs[name]) {
      formRefs[name] = React.createRef();
    }
    return formRefs[name];
  };

  const handleKeyDown = (event, nextFieldName) => {
    if (event.key === "Enter" && nextFieldName) {
      event.preventDefault();
      formRefs[nextFieldName].current.focus();
    }
  };

  const onFinish = async (values) => {
    try {
      const selectedMajor = values.major === "Other" ? values.customMajor : values.major; 
      const payload = {
        name: values.uniqueName,
        degreeType: values.degreeType,
        major: selectedMajor,
        gender: values.gender,
        mbti: values.mbti || null,
      };

      const response = await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to create user. Please try again.");
      }

      message.success("Your registration is successful!");
      navigate("/test");
    } catch (error) {
      message.error(error.message || "An error occurred while registering.");
    }
  };

  const handleMajorChange = (value) => {
    setShowCustomMajor(value === "Other"); 
  };

  return (
    <div>
      <div className="registration-container" style={{ marginTop: "40px", padding: "0 50px" }}>
        <Row justify="center" gutter={[16, 16]}>
          <Col
            xs={24}
            md={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src="/illustration.svg"
              alt="Registration Illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginTop: "50px",
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
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <Typography.Title level={3} style={{ fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>
                Who are you?
              </Typography.Title>
              <Typography.Text style={{ fontSize: "18px", marginBottom: "35px", display: "block", textAlign: "center" }}>
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
                  label={<Typography.Text style={{ fontSize: "16px" }}>Your Nickname</Typography.Text>}
                  name="uniqueName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your unique name!",
                    },
                  ]}
                >
                  <Input
                    ref={createRef("uniqueName")}
                    placeholder="e.g., V for Taeyoung"
                    onKeyDown={(event) => handleKeyDown(event, "gender")}
                  />
                </Form.Item>

                {/* Gender */}
                <Form.Item
                  label={<Typography.Text style={{ fontSize: "16px" }}>Your Gender</Typography.Text>}
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select your gender!",
                    },
                  ]}
                >
                  <Select
                    ref={createRef("gender")}
                    placeholder="Please select"
                    onKeyDown={(event) => handleKeyDown(event, "degreeType")}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                {/* Degree Type */}
                <Form.Item
                  label={<Typography.Text style={{ fontSize: "16px" }}>Your Degree</Typography.Text>}
                  name="degreeType"
                  rules={[
                    {
                      required: true,
                      message: "Please select your degree type!",
                    },
                  ]}
                >
                  <Select
                    ref={createRef("degreeType")}
                    placeholder="Please select"
                    onKeyDown={(event) => handleKeyDown(event, "major")}
                  >
                    <Option value="bachelor">Bachelor</Option>
                    <Option value="master">Master</Option>
                    <Option value="phd">Ph.D.</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                {/* Major */}
                <Form.Item
                  label={<Typography.Text style={{ fontSize: "16px" }}>Your Major</Typography.Text>}
                  name="major"
                  rules={[
                    {
                      required: true,
                      message: "Please select your major!",
                    },
                  ]}
                >
                  <Select
                    ref={createRef("major")}
                    placeholder="Please select"
                    onKeyDown={(event) => handleKeyDown(event, "mbti")}
                    onChange={handleMajorChange}
                  >
                    {majors.map((major, index) => (
                      <Option key={index} value={major}>
                        {major}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* Custom Major Input */}
                {showCustomMajor && (
                  <Form.Item
                    label={<Typography.Text style={{ fontSize: "16px" }}>Input your major</Typography.Text>}
                    name="customMajor"
                    rules={[
                      {
                        required: true,
                        message: "Please specify your major!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your major" />
                  </Form.Item>
                )}

                {/* MBTI */}
                <Form.Item
                  label={<Typography.Text style={{ fontSize: "16px" }}>Your MBTI (optional)</Typography.Text>}
                  name="mbti"
                >
                  <Select
                    ref={createRef("mbti")}
                    placeholder="Please select"
                    onKeyDown={(event) => handleKeyDown(event, "submitButton")}
                  >
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
                    ref={createRef("submitButton")}
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
