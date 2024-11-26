import { auth } from "../../auth";

export const getPredictionsById = async (): Promise<any> => {
  const headers = new Headers();
  const session:any = (await auth()) ?? {
    user: { sessionData: { acces_token: "" } },
  };
  headers.append("Content-Type", "application/json");
  headers.append(
    "Authorization",
    `Bearer ${session?.user.sessionData.acces_token}`
  );

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/prediction/${session?.user?.id}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) return Error("Could not retrieve predictions");

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
