import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("will submit form");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-3 md:px-0">
      <div className="w-full rounded-md bg-white p-5 shadow-lg md:w-1/3">
        <h3 className="mb-6 text-center text-lg font-semibold">
          Login to your account
        </h3>
        <div className="text-center">
          <SecondaryButton name="Login with Google" />
          <p className="italic">or</p>
        </div>
        <form className="space-y-5" onSubmit={submitFormHandler}>
          <Input
            id="email"
            type="email"
            title="Email"
            testId="email-input"
            value={email}
            onChangeHandler={emailChangeHandler}
          />
          <Input
            id="password"
            type="password"
            title="Password"
            value={password}
            onChangeHandler={passwordChangeHandler}
          />
          <Input
            id="confirm_password"
            type="password"
            title="Confirm Password"
            value={confirmPassword}
            onChangeHandler={confirmPasswordChangeHandler}
          />
          <PrimaryButton name="Login" type="submit" />
        </form>
      </div>
    </main>
  );
};

export default Login;
