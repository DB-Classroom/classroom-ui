import { useHistory } from "react-router-dom"

const Logout = () => {
    localStorage.setItem("isCRLogged", false)
    localStorage.removeItem("refresh")
    localStorage.removeItem("access_token")
    localStorage.removeItem("user_name")
    localStorage.removeItem("user_email")
    let history = useHistory()
    history.replace('/')
}
export default Logout;