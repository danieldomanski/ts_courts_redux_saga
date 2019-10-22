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
      Authorization: "Token 0a45c2f180d79943a92b9d6957c120e4c4876c3f"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}
