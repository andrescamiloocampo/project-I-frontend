import { type ReactElement } from "react";
import { redirect } from "next/navigation";

export default async function Home():Promise<ReactElement>{  
  
  redirect('/dashboard');
    
}