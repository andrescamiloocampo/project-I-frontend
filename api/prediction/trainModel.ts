export const trainModel = async():Promise<string> => {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MODEL}/train`,{
            headers
        });
        if(!response.ok) return 'No funciono'
        return await response.json();
    } catch (error) {
        console.log('Error al entrenar el modelo',error)        
    }
    return 'No se pudo entrenar el modelo'
}