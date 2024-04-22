import { Flex, TextField, Text, Button, Box } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

interface LoginData {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/token", {
        username: loginData.username,
        password: loginData.password,
      });
      if (response.data.status === 200) {
        signIn({
          auth: {
            token: response.data.access_token,
            type: response.data.token_type,
          },
          userState: {
            name: loginData.username,
          },
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };
  return (
    <Box className="bg-gradient-to-br from-green-8 to-green-9 w-screen h-screen p-5">
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Username
          </Text>
          <Box maxWidth="500px">
            <TextField.Root
              name="username"
              defaultValue=""
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </Box>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Password
          </Text>
          <Box maxWidth="500px">
            <TextField.Root
              size="2"
              type="password"
              name="password"
              defaultValue=""
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </Box>
        </label>
      </Flex>
      <Flex gap="3" mt="4" justify="center">
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Box>
  );
};

export default Login;
