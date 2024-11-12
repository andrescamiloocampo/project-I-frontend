export const getZones = async ():Promise<any> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/zone`,{
            method: 'GET',
            headers
        });

        if(!response.ok) throw new Error('Cannot get zones');

        return await response.json();
    } catch (error) {
        return error;
    }
}