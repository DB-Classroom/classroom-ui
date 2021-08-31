import { useHistory } from "react-router-dom"

const Logout = () => {
    localStorage.setItem("isCRLogged", false)
    localStorage.removeItem("refresh")
    localStorage.removeItem("access_token")
    let history = useHistory()
    history.replace('/')
}
export default Logout;