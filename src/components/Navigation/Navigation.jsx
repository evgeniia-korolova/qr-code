import { Link } from "react-router-dom"
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.container}>
        <Link to="/generate">Generate QR Code</Link>
        <Link to="/scan">Scan QR Code</Link>
        <Link to="/generateHistory">History of Generated QR Codes</Link>
        <Link to="/scanHistory">History of Scanned QR Codes</Link>
    </nav>
  )
}

export default Navigation