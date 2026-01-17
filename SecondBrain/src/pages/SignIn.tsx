import Button from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleSignin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Username and password are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/signin", // ✅ lowercase
        {
          username,
          password,
        }
      );

      const token = res.data.token;

      // ✅ CONSISTENT KEY
      localStorage.setItem("token", token);

      alert("Signin Successful");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Signin failed");
    }
  }

  return (
    <div className="flex flex-col gap-3 w-64">
      <Input ref={usernameRef} placeholder="username" type="text" />
      <Input ref={passwordRef} placeholder="password" type="password" />

      <Button
        variant="Primary"
        size="md"
        text="Sign in"
        onClick={handleSignin}
      />
    </div>
  );
}
