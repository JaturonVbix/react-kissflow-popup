# 🚀 React Kissflow Popup

โปรเจกต์ตัวอย่าง React ที่เชื่อมต่อกับ **Kissflow Low-Code SDK** เพื่อเปิด Popup โดยใช้ปุ่มแบบมีสไตล์ พร้อมแสดงข้อความสถานะบนหน้าเว็บ

![image](https://github.com/user-attachments/assets/bc04d206-97b2-4d53-a8d9-a06750307f7f)

---

## 📌 ฟีเจอร์

- ✅ เชื่อมต่อ Kissflow SDK (`@kissflow/lowcode-client-sdk`)
- ✅ ใช้ React Hooks (useEffect, useState)
- ✅ เปิด Popup ด้วยปุ่ม
- ✅ แสดงสถานะ (เช่น SDK พร้อมหรือไม่)
- ✅ ปรับแต่ง UI ด้วย CSS ธรรมดาให้ดูดี

---

## 💾 การติดตั้ง (Installation)

### 1. Clone repo

```bash
git clone https://github.com/JaturonVbix/react-kissflow-popup.git
cd react-kissflow-popup
```

### 2. ติดตั้ง dependencies

```bash
npm install
```

### 3. เริ่มต้นเซิร์ฟเวอร์

```bash
npm start
```

เปิดเบราว์เซอร์ไปที่: [http://localhost:3000](http://localhost:3000)

---

## 📁 โครงสร้างไฟล์สำคัญ

```
react-kissflow-popup/
├── public/
│   └── index.html        # HTML หลัก
├── src/
│   ├── App.js            # Component หลักของแอป
│   ├── App.css           # Style หลัก
│   ├── index.js          # จุดเริ่มต้นของ React
│   └── ...
├── package.json
├── README.md
└── ...
```

---

## 🧠 การทำงานโดยย่อ

- ใช้ `useEffect()` เพื่อเรียก `KFSDK.initialize()` โหลด SDK ของ Kissflow เมื่อหน้าเว็บโหลด
- เมื่อโหลด SDK สำเร็จ → เก็บไว้ในตัวแปร `kf` ด้วย `useState()`
- เมื่อผู้ใช้คลิกปุ่ม → เรียก `kf.app.page.openPopup("Popup_SVDAUT0Oyc")` เพื่อเปิด Popup
- ใช้ `setMessage()` แสดงข้อความสถานะการทำงานให้ผู้ใช้รู้แบบเรียลไทม์ เช่น:
  - ✅ SDK พร้อมแล้ว
  - ✅ เปิด Popup สำเร็จ
  - ❌ ไม่สามารถเปิด Popup ได้
