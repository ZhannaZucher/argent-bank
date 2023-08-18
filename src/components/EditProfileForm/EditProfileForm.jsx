import { useSelector } from "react-redux"
import { useState } from "react"
import { selectUserData } from "../../app/selectors"
import "./EditProfileForm.css"

export default function EditProfileForm({ isEditing, setIsEditing }) {
  const user = useSelector(selectUserData)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

  console.log(firstName, lastName)

  //handling the canceling of profile updating
  function handleReset() {
    setIsEditing(!isEditing)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //add logic for state and API profile updating here
  }

  return (
    <form onSubmit={handleSubmit} className="editform">
      <div className="editform__input-wrapper">
        <input
          type="text"
          //defaultValue={user.firstName}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          //defaultValue={user.lastName}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="editform__btn-wrapper">
        <button type="submit">Save</button>
        <button type="reset" onClick={handleReset}>
          Cancel
        </button>
      </div>
    </form>
  )
}
