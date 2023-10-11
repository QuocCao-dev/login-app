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

export function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-gray-400">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" crossOrigin={undefined} />
          <Input label="Password" size="lg" crossOrigin={undefined} />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" crossOrigin={undefined} />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
