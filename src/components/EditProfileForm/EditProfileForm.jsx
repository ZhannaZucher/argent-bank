import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectUserData } from "../../app/selectors"
import "./EditProfileForm.css"
import { updateProfile } from "../../features/user/userSlice"

export default function EditProfileForm({ isEditing, setIsEditing }) {
  const user = useSelector(selectUserData)
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

  //handling the canceling of profile updating
  function handleReset() {
    setIsEditing(!isEditing)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //if input values are equal to user data in redux state
    if (firstName === user.firstName && lastName === user.lastName) {
      //hide the edit form
      handleReset()
      return
    }
    dispatch(updateProfile({ firstName, lastName }))
    handleReset()
  }

  return (
    <form onSubmit={handleSubmit} className="editform">
      <div className="editform__input-wrapper">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
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
