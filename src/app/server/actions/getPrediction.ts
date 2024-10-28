interface BodyM {
  RUTA: number;
  BARRIO: number;
  HORARIO: number;
  CLIMA: number;
  "TIEMPO REAL": number;
  "TIEMPO ESPERADO": number;
}

export const getPrediction = async (requestBody: BodyM): Promise<any> => {
//   const session = await auth();
  const raw = JSON.stringify(requestBody);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/prediction`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${session?.user.sessionData.acces_token}`,
      },
      body: raw,
      method: "POST",
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
