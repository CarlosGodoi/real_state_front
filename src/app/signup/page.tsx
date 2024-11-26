import HeaderForm from "./components/headerForm";
import { SignUpForm } from "./components/signUpForm";

export default function SignUp() {
    return (
        <div className="w-full min-h-screen bg-gray_08 flex flex-col items-center px-10 py-10">
            <HeaderForm />
            <SignUpForm />
        </div>
    )
}