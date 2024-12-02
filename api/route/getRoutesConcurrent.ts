export const getRoutesConcurrent = async():Promise<any> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Cache-Control','no-cache, no-store, must-revalidate')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/route/concurrent`,{
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