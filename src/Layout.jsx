// import QrCodeGenerator from "./QrCodeGenerator"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import QrCodeScanner from "./components/Scanner/QrCodeScanner"
import QrCodeGenerator from "./components/Generator/QrCodeGenerator"
import GenerateHistory from "./components/GenerateHistory/GenerateHistory"
import ScanHistory from "./components/ScanHistoty/ScanHistory"


const Layout = () => {
  return (
    <div style={{padding: 30}}>
        <Navigation/>
        <Routes>
            <Route path="/generate" element={<QrCodeGenerator />}/>
            <Route path="/scan" element={<QrCodeScanner />}/>
            <Route path="/generateHistory" element={<GenerateHistory />}/>
            <Route path="/scanHistory" element={<ScanHistory />}/>
        </Routes>
        
    </div>
  )
}

export default Layout