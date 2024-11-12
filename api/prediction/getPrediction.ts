export interface BodyM {
  RUTA: string;
  BARRIO: string;
  HORARIO: number;
  CLIMA: number;
}

export const getPrediction = async (requestBody: BodyM): Promise<any> => {    
  const raw = JSON.stringify({
    ...requestBody,
    RUTA: Number(requestBody.RUTA),
    BARRIO: Number(requestBody.BARRIO)
  });
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/prediction`, {
      headers: {
        "Content-Type": "application/json",        
      },
      body: raw,
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("No se pudo obtener la informacion", { cause: response });
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return { success: false, data: error };
  }
};
