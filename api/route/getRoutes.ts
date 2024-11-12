export const getRoutes = async():Promise<any> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/route`,{
            method: 'GET',
            headers
        });
        
        if(!response.ok){
            console.log('Cannot resolve routes');
            return null;
        }

        return await response.json();

    } catch (error) {
        console.log(error);
    }
}