import { GENERATE_DATA } from "../../constants";
import {QRCodeSVG} from 'qrcode.react';


const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <div style={{marginTop: 80}}>
        {data.map(text => <p key={text} style={{display: 'flex', gap: 30, }}>
        <QRCodeSVG value={text}  size={150}
        />
        {text}
        </p>)}
        
    </div>
  )
}

export default GenerateHistory