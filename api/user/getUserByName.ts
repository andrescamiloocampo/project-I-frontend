export const getUserByName = async(username:string) => {
    const headers = new Headers()        
    headers.append('Content-Type', 'application/json');    
    
    try {
        const user = await fetch(`${process.env.NEXT_PUBLIC_API}/user/${username}`,{
            method: 'GET',
            headers
        })                
        return await user.json();
    } catch (error) {
        console.log(`Error fetching user: `,error);
    }
}