import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 mt-12 border-t border-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-red-700">香岛文化</h3>
            <p className="text-gray-700 text-sm">
              香港本地產品的多元市集，分享香港文化與創意。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">快速連結</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-700 hover:text-red-600">首頁</Link></li>
              <li><Link href="/toys" className="text-gray-700 hover:text-red-600">玩具</Link></li>
              <li><Link href="/culture" className="text-gray-700 hover:text-red-600">文創文旅</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-red-600">關於我們</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">節日特輯</h3>
            <ul className="space-y-2">
              <li><Link href="/newyear" className="text-gray-700 hover:text-red-600">農曆新年</Link></li>
              <li><Link href="/christmas" className="text-gray-700 hover:text-red-600">聖誕節</Link></li>
              <li><Link href="/halloween" className="text-gray-700 hover:text-red-600">萬聖節</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">聯絡我們</h3>
            <p className="text-gray-700 text-sm mb-2">香港中環砵甸乍街/石板街 FP-20 & 24檔</p>
            <p className="text-gray-700 text-sm flex items-center mb-4">
              <span>📞 (852) 2580 8002</span>
              <span className="mx-3 text-gray-400">|</span>
              <span>✉️ info@island-cult.com</span>
            </p>
            
            <div className="mt-4">
              <p className="text-gray-700 text-sm mb-2">掃描二維碼聯繫我們：</p>
              <div className="flex space-x-4 items-center">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-1">
                    <Image 
                      src="/images/whatsapp.jpg" 
                      alt="WhatsApp QR Code" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600">WhatsApp</p>
                </div>
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-1">
                    <Image 
                      src="/images/wechat.jpg" 
                      alt="WeChat QR Code" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600">WeChat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          © 2025 香岛文化. 版權所有。
        </div>
      </div>
    </footer>
  );
}
