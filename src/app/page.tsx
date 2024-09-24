import { Logo } from "@/components/logo";
import { LoginForm } from "@/components/forms/login";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5 bg-primary">
      <Logo width={50} height={50} textSize={"text-4xl"} />
      <LoginForm />
    </div>
  );
}
