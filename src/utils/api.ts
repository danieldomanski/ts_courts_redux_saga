export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: any
) {
  const res = await fetch(`${url}`, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Token ` + process.env.REACT_APP_COURTLISTENER_API_KEY
    },
    body: JSON.stringify(data)
  });
  return res.json();
}
