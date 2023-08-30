export async function fetchAPI(endpoint, method, token, body) {
  const response = await fetch(`http://localhost:3001/api/v1/${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: token ? "Bearer " + token : "",
    },
    body: body ? JSON.stringify(body) : null,
  })
  //if status response code is 200-299:
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    //error generation with response object for cases when !response.ok
    throw response
  }
}
