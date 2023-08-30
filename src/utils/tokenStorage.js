import secureLocalStorage from "react-secure-storage"

// checking if there is a token already stored in SessionStorage or LocalStorage
export function getTokenFromStorage() {
  if (secureLocalStorage.getItem("token")) {
    return secureLocalStorage.getItem("token")
  }
  if (sessionStorage.getItem("token")) {
    return sessionStorage.getItem("token")
  }
  return null
}
