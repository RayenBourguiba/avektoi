import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer un Compte - Avektoi",
  description: "This is Sign Up page",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
