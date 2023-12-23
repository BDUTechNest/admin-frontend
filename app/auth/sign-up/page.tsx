import AccessForm from "@/components/auth/access-form";
import SignUpForm from "@/components/auth/sign-up-form";

export default function SignUp() {
  return (
    <div className="container max-w-[1440px]  grid grid-cols-12 px-5 md:px-8 gap-8 min-h-screen mx-auto">
      <SignUpForm></SignUpForm>
      <AccessForm></AccessForm>
    </div>
  );
}
