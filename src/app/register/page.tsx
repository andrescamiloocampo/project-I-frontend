import { type ReactElement } from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default async function RegisterPage(): Promise<ReactElement> {
    return <RegisterForm/>
}
