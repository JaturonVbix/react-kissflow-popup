import React, { useEffect, useState } from 'react';
import './App.css';
import KFSDK from '@kissflow/lowcode-client-sdk';

function App() {
  const [kf, setKf] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadKfSdk() {
      try {
        const kfInstance = await KFSDK.initialize();
        window.kf = kfInstance;
        setKf(kfInstance);
        setMessage('Kissflow SDK พร้อมใช้งานแล้ว ✅');
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการโหลด SDK:', error);
        setMessage('❌ เกิดข้อผิดพลาดในการโหลด SDK');
      }
    }

    loadKfSdk();
  }, []);

  const handleClick = () => {
    if (!kf) {
      setMessage('⚠️ SDK ยังไม่พร้อม');
      return;
    }

    try {
      kf.app.page.openPopup('Popup_SVDAUT0Oyc');
      setMessage('✅ เปิด Popup เรียบร้อย');
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเปิด Popup:', error);
      setMessage('❌ ไม่สามารถเปิด Popup ได้');
    }
  };

  return (
    <div className="app-container">
      <h1>🚀 React + Kissflow</h1>
      <button className="fancy-button" onClick={handleClick}>
        ✨ คลิกเพื่อเปิด Popup
      </button>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
