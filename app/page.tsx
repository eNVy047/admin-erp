import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Admin ERP!</h1>
      <Button>
        <a href="/login">Get Started</a>
      </Button>
    </div>
  );
}
