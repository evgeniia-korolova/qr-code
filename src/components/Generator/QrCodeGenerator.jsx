import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import s from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';

const QrCodeGenerator = () => {
    const [value, setValue]= useState('');
    const [qrCode, setQrCode] = useState('')

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );
        
        setQrCode(value);
        setValue('');
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setQrCode('')
    }

    console.log('code :', qrCode)
    return (
        <div className={s.container}>        
            <input type="text" value={value}
            onChange={onChangeHandler}
            className={s.input} />
            <button onClick={onClickHandler} className={s.button} >Generate QR</button>
            {/* {isShownQr ? <QRCodeSVG value="Have a nice day" /> : null} */}
            {qrCode !== '' && (
                <QRCodeSVG value={qrCode} className={s.qrWrapper} size={250}/>)
            }
        </div>
  )
}

export default QrCodeGenerator