import { Session } from "@/app/components/LoginForm/LoginForm";
import { auth } from "../../auth";


export const getUserSecure = async ():Promise<any> => {
    const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
    const headers = new Headers();
    headers.append('Authorization',`Bearer ${session.user?.sessionData?.acces_token}`);
    headers.append('Content-Type','application/json');

    try {        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/secure/${session.user?.id}`,{
            headers,
            method: 'GET'
        });   
    
        if(!response.ok)
            Promise.resolve({message: 'Failed',response: null})

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}