import { useContext } from "@nuxtjs/composition-api";
import { states } from ".";
import { GET_CANTONS, GET_CITIES, SET_CANTON } from "./request";
const cantons: any = []; //before it was a json file but it was deleted because it is in DB now. we don`t need it any more.

export function useCantons(): {
  sendCantonsToDB(): Promise<void>;
  getCantons(): Promise<void>;
  getCities(canton: string): Promise<void>;
} {
  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;
  const sendCantonsToDB = async () => {
    const allCantons: string[] = [];
    let gemainde: string[] = [];

    for (let index = 0; index < cantons.length; index++) {
      const canton: string = cantons[index].canton.NAME;
      if (!allCantons.includes(canton)) {
        allCantons.push(canton);
      }
    }

    const send = async (canton: string) => {
      gemainde = [];
      for (let index = 0; index < cantons.length; index++) {
        const gm: string = cantons[index].gemeinde.NAME;
        if (cantons[index].canton.NAME === canton) {
          gemainde.push(gm);
        }
      }
      const payload = {
        canton,
        gemainde,
      };
      client.mutate({
        mutation: SET_CANTON,
        variables: payload,
      });
    };

    allCantons.forEach((canton: string) => {
      send(canton);
    });
  };

  const getCantons = async (): Promise<void> => {
    const response: { data: { getCantons: { canton: string }[] } } =
      await client.query({
        query: GET_CANTONS,
      });
    const cantons = response.data.getCantons;
    states.cantons = cantons.sort((a, b) =>
      a.canton > b.canton ? 1 : b.canton > a.canton ? -1 : 0
    );
  };

  const getCities = async (canton: string) => {
    const response: { data: { getCities: { gemainde: string[] }[] } } =
      await client.query({
        query: GET_CITIES,
        variables: { canton },
      });
    const cities = response.data.getCities;
    states.cities = cities[0].gemainde.sort((a, b) =>
      a < b ? -1 : a > b ? 1 : 0
    );
  };
  return { sendCantonsToDB, getCantons, getCities };
}
