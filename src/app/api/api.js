export async function fetchToken(payload) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })
  //if status response code is 200-299:
  if (response.ok) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    console.log(response)
    //error generation with response object for cases when !response.ok
    throw response
  }
}
