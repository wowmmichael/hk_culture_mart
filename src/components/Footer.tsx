import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HK Culture Mart</h3>
            <p className="text-gray-600 text-sm">
              香港本地產品的多元市集，分享香港文化與創意。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-800">首頁</Link></li>
              <li><Link href="/toys" className="text-gray-600 hover:text-gray-800">玩具</Link></li>
              <li><Link href="/culture" className="text-gray-600 hover:text-gray-800">文創文旅</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-800">關於我們</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">節日特輯</h3>
            <ul className="space-y-2">
              <li><Link href="/newyear" className="text-gray-600 hover:text-gray-800">農曆新年</Link></li>
              <li><Link href="/christmas" className="text-gray-600 hover:text-gray-800">聖誕節</Link></li>
              <li><Link href="/halloween" className="text-gray-600 hover:text-gray-800">萬聖節</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">聯絡我們</h3>
            <p className="text-gray-600 text-sm mb-2">香港中環摩羅石街 20:8:24 樓</p>
            <p className="text-gray-600 text-sm flex items-center">
              <span>📞 接打</span>
              <span className="mx-3">|</span>
              <span>✉️ 電郵</span>
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          © 2025 HK Culture Mart. 版權所有。
        </div>
      </div>
    </footer>
  );
}
