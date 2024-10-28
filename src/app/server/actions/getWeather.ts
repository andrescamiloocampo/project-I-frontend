export const getWeather = async (): Promise<any> => {      
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WEATHER}`, {
        headers: {
          "Content-Type": "application/json",          
        },                
      });
      if (!response.ok) {
        throw new Error("No se pudo obtener la informacion", { cause: response });
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return { success: false, data: error };
    }
  };
  