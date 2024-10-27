"use client"
import React, { useState, useRef } from 'react';
import {QRCode} from 'qrcode.react';

const Qrcode = () => {
    const [text, setText] = useState('');
    const qrRef = useRef();

    const downloadQRCode = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');

        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `${text || 'qr-code'}.png`;
        downloadLink.click();
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for QR code"
                style={{ padding: '10px', width: '80%', marginBottom: '20px' }}
            />
            <div ref={qrRef}>
                <QRCode value={text || ' '} size={200} />
            </div>
            <button onClick={downloadQRCode} style={{ marginTop: '20px', padding: '10px 20px' }}>
                Download as PNG
            </button>
        </div>
    )
}

export default Qrcode