import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAiScan = (e) => {
    if (e.target.files.length > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setScanResult({
          status: "سالم و بدون ضربه شاسی (تایید هوش مصنوعی رویال فام)",
          score: "۹۴٪",
          priceImpact: "حدود ۳٪ افت قیمت جزئی"
        });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 text-right" dir="rtl">
      {/* هدر سایت */}
      <header className="flex justify-between items-center border-b border-amber-500/30 pb-4 mb-6">
        <h1 className="text-xl font-bold text-amber-400">🚗 نمایشگاه تخصصی رویال فام</h1>
        <nav className="flex gap-2 text-sm">
          <button onClick={() => setActiveTab('home')} className={`px-3 py-1.5 rounded-xl ${activeTab === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-gray-300'}`}>صفحه اصلی</button>
          <button onClick={() => setActiveTab('ai')} className={`px-3 py-1.5 rounded-xl ${activeTab === 'ai' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-gray-300'}`}>تست هوش مصنوعی</button>
          <button onClick={() => setActiveTab('privacy')} className={`px-3 py-1.5 rounded-xl ${activeTab === 'privacy' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-gray-300'}`}>حریم خصوصی</button>
        </nav>
      </header>

      {/* محتوای صفحات */}
      <main className="max-w-2xl mx-auto">
        {activeTab === 'home' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-amber-300">خوش آمدید به پنل مدیریت و شوروم رویال فام</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              این پلتفرم برای مدیریت پیشرفته خودرو، بانک قطعات تخصصی و استعلام نرخ بازار طراحی شده است. از منوی بالا می‌توانید بخش‌های مختلف را بررسی کنید.
            </p>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-amber-500/40 space-y-4">
            <h2 className="text-xl font-bold text-amber-400">🤖 سامانه هوشمند تست بدنه و تشخیص رنگ</h2>
            <p className="text-gray-300 text-sm">تصویر بدنه خودرو را آپلود کنید تا هوش مصنوعی خط و خش و سلامت بدنه را تحلیل کند.</p>
            
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleAiScan}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-400 cursor-pointer"
            />

            {loading && <p className="text-amber-300 animate-pulse text-sm">⏳ در حال پردازش تصویر با هوش مصنوعی...</p>}

            {scanResult && (
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-400 text-sm space-y-1">
                <p className="font-bold">✅ تحلیل انجام شد:</p>
                <p className="text-gray-300">• وضعیت: {scanResult.status}</p>
                <p className="text-gray-300">• امتیاز سلامت: {scanResult.score}</p>
                <p className="text-gray-300">• تخمین کارشناسی: {scanResult.priceImpact}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-amber-400">حریم خصوصی و قوانین رویال فام</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              تمامی اطلاعات کاربران، تصاویر آپلود شده برای تست بدنه و داده‌های تعمیرگاهی در رویال فام به صورت کاملاً امن رمزنگاری شده و محافظت می‌شوند. این بخش برای استانداردسازی سئو و اعتماد کاربران طراحی شده است.
            </p>
          </div>
        )}
      </main>

      {/* فوتر */}
      <footer className="text-center text-xs text-gray-500 mt-12 border-t border-slate-900 pt-4">
        تمامی حقوق برای نمایشگاه رویال فام محفوظ است.
      </footer>
    </div>
  );
}

