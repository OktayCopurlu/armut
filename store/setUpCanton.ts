// this page used only one time for setting up cantons and cities in DB
const cantons: any = []; //before it was a json file but it was deleted because it is in DB now. we don`t need it any more.
import { useContext } from "@nuxtjs/composition-api";
import { gql } from "graphql-tag";

const SET_CANTON = gql`
  mutation ($canton: String!, $gemainde: [String]!) {
    setUpCanton(canton: $canton, gemainde: $gemainde) {
      canton
      gemainde
    }
  }
`;
export function useCantons() {
    
  const allCantons: string[] = [];
  let gemainde: string[] = [];

  const context = useContext();
  const client = context.app?.apolloProvider.defaultClient;

  for (let index = 0; index < cantons.length; index++) {
    const canton = cantons[index].canton.NAME;
    if (!allCantons.includes(canton)) {
      allCantons.push(canton);
    }
  }

  const send = async (canton: string) => {
    gemainde = [];
    for (let index = 0; index < cantons.length; index++) {
      const gm = cantons[index].gemeinde.NAME;
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
    console.log(gemainde);
  };

  allCantons.forEach((canton: any) => {
    send(canton);
  });
}
