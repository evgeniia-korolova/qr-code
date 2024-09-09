import { Link } from "react-router-dom"
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.container}>
        <Link to="/qr-code/generate">Generate QR Code</Link>
        <Link to="/qr-code/scan">Scan QR Code</Link>
        <Link to="/qr-code/generateHistory">History of Generated QR Codes</Link>
        <Link to="/qr-code/scanHistory">History of Scanned QR Codes</Link>
    </nav>
  )
}

export default Navigation