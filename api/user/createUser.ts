import { User } from "./user.model"
import { parseUser } from "@/app/utils/user/parseUser";

export const createUser = async(formData:FormData) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const user = parseUser(formData);
    
    console.log({user});

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`,{
            method: 'POST',
            headers,
            body: JSON.stringify(user)
        });
        if(!response.ok)
            throw new Error('Cannot create user');
        return response;
    } catch (error) {
        console.log('Error creating user:',error)
    }
}