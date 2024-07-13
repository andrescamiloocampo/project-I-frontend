export const LoginUser = async(username:string,password:string):Promise<any> => {    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth`,{
            method: 'POST',
            headers,
            body: JSON.stringify({username,password})
        });

        if(!response.ok) throw new Error('Invalid credentials');

        return await response.json();

    } catch (error) {
        console.log(error);
    }
}