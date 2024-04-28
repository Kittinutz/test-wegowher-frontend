import { createRequestInstance } from ".";

const omiseRequestInstance = createRequestInstance('https://api.omise.co')

export const payByCard = async (payload) => {
  try {
    const res = await omiseRequestInstance.post('charges', payload, {
      auth: {
        username: 'skey_test_5wvisdjjoqmfof5npzw',
        password: ''
      }
    })
    return res.data
  } catch (e) {
    console.error(e.response);
    throw Error(e);
  }
}