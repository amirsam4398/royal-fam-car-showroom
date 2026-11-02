const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// پایگاه داده موقت ۱۰۰ خودروی لوکس وارداتی (بک‌اند)
const cars = Array.from({ length: 100 }, (_, index) => {
  const brands = ['ب‌ام‌و', 'مرسدس بنز', 'پورشه', 'لکسوس', 'آئودی', 'لندرور'];
  const models = ['سری ۵ مدل 530i', 'E250 آوانگارد', 'ماکان توربو', 'RX350 اف اسپرت', 'A6 کواترو', 'رنجروور ولار'];
  const brand = brands[index % brands.length];
  const model = models[index % models.length];
  const priceValue = 45 + ((index * 8) % 120);

  return {
    id: index + 1,
    brand: brand,
    name: `${brand} ${model}`,
    year: 2016 + (index % 6),
    price: `${priceValue.toLocaleString()},۰۰۰,۰۰۰,۰۰۰ تومان`,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    status: index % 2 === 0 ? 'بدون رنگ (تایید هوش مصنوعی)' : 'دارای لکه رنگ کارشناسی شده',
    color: index % 3 === 0 ? 'سفید صدفی' : index % 3 === 1 ? 'مشکی متالیک' : 'خاکستری',
    mileage: `${((index + 1) * 7) % 90} هزار کیلومتر`,
    gearbox: 'اتوماتیک تیپ‌ترونیک'
  };
});

// API دریافت لیست خودروها
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// API ثبت درخواست تعمیرات و کارشناسی
app.post('/api/repair', (req, res) => {
  const { model, issue, phone } = req.body;
  console.log('درخواست جدید ثبت شد:', { model, issue, phone });
  res.json({ success: true, message: 'درخواست شما با موفقیت در سیستم رویال فام ثبت شد.' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
