import { useSelector } from "react-redux"
import { useState } from "react"
import "./Welcome.css"
import { selectUserData } from "../../app/selectors"
import EditProfileForm from "../EditProfileForm/EditProfileForm"

export default function Welcome() {
  const [isEditing, setIsEditing] = useState(false)
  const user = useSelector(selectUserData)
  return (
    <div className="header">
      {!isEditing ? (
        <>
          <h1>
            Welcome back
            <br />
            {user.firstName + " " + user.lastName + "!"}
          </h1>
          <button
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <EditProfileForm isEditing={isEditing} setIsEditing={setIsEditing} />
        </>
      )}
    </div>
  )
}
