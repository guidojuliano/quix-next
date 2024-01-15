import { GraphQLClientSingleton } from "app/graphql";
import { cookies } from "next/headers";
import { customerName } from "app/graphql/queries/customerName";

interface GraphQLResponse {
  customer: {
    firstName: string;
    email: string;
  };
}

export const validateAccessToken = async () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      console.error("El token de acceso no está presente.");
      return null;
    }

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const { customer } = await graphqlClient.request<GraphQLResponse>(
      customerName,
      {
        customerAccessToken: accessToken,
      }
    );

    return customer;
  } catch (error) {
    console.error("Error en la solicitud GraphQL:", error);
    return null; // O manejar el error de la manera que prefieras
  }
};
