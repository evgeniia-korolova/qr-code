import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import {SCAN_DATA} from '../../constants'

import s from './qrCodeScanner.module.css';

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);
    console.log(SCAN_DATA)

    const scanHandler = (result) => {
        if (!result) return;
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        if (prevData.includes(result.text)) return;
        setScanned(result.text);
        
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    }

    console.log(scanned)
    return (
        <div className={s.container}>
                <QrReader
                constraints={{ facingMode: 'environment' }}
                scanDelay={1000}
                onResult={scanHandler}
                containerStyle={{ width: '400px' }}
            />            

            <p className={s.result}>{scanned}</p>   
        </div>
    )

}

export default QrCodeScanner