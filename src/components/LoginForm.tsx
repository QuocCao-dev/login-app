import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:3001/api/login", form);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-gray-400">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="grid mb-4 h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            crossOrigin={undefined}
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
          <Input
            label="Password"
            size="lg"
            crossOrigin={undefined}
            value={form.password}
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              });
            }}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" crossOrigin={undefined} />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
