import { Button, Card, Input, Typography } from "@material-tailwind/react";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <Card color="transparent" className="p-4">
        <Typography variant="h4" color="blue-gray">
          Create
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" crossOrigin={undefined} />
            <Input size="lg" label="Email" crossOrigin={undefined} />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
            />
          </div>

          <Button className="mt-6" fullWidth>
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
}
