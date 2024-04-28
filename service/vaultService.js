import { createRequestInstance } from ".";

const vaultInstance = createRequestInstance('https://vault.omise.co',)
export const createCreditCard = async (cardObject) => {
  try {
    const res = await vaultInstance.post('/tokens', {
      card: cardObject
    });
    return res.data
  } catch (e) {
    console.log(e.response)
    throw Error(e);
  }
}

