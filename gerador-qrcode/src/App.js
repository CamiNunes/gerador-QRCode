import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('');

  function handleGenerateImg(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function (err, url){
      setQrCodeLink(url);
    });
  }

  function handleQrcode(event){
    setLink(event.target.value);
    handleGenerateImg(event.target.value);
  }

  return (
    <div className="container">
      <h1>Gerador de QRCode</h1>

      <QRCode value={link}/>


      <input className="input" placeholder="Digite seu link..." value={link} onChange={ (event) => handleQrcode(event)}/>

      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QRCode</a>
      
    </div>
  );
}

export default App;
