import secureLocalStorage from "react-secure-storage"

// checking if there is a token already stored in SessionStorage or LocalStorage
export function getTokenFromStorage() {
  if (secureLocalStorage.getItem("token")) {
    console.log("token stocked in the local storage")
    return secureLocalStorage.getItem("token")
  }
  if (sessionStorage.getItem("token")) {
    console.log("token stocked in the session storage")
    return sessionStorage.getItem("token")
  }
  console.log("there is no token stocked")
  return null
}
