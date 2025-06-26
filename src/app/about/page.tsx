import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/about-banner.jpg"
          alt="關於我們"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">關於我們</h1>
            <p className="text-white text-lg">香港文化市集的故事</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">我們的使命</h2>
          <p className="text-lg text-gray-700 mb-8">
            香港文化市集致力於推廣香港本土文化與創意，支持本地設計師和藝術家。我們希望通過提供一個平台，讓更多人能夠認識和欣賞香港獨特的文化產品。
          </p>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">我們的故事</h2>
          <p className="text-lg text-gray-700 mb-4">
            香港文化市集創立於2023年，由一群熱愛香港文化的年輕人發起。我們注意到，雖然香港有豐富的文化遺產和創意產業，但缺乏一個專門展示和銷售這些產品的平台。
          </p>
          <p className="text-lg text-gray-700 mb-8">
            因此，我們決定創建這個市集，匯集香港各種獨特的文化產品，從傳統工藝到現代設計，從本土玩具到節慶裝飾，為消費者提供豐富多樣的選擇。
          </p>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">我們的價值觀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">本土支持</h3>
              <p className="text-gray-700">
                我們優先考慮與本地設計師、藝術家和生產商合作，支持香港本土創意產業。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">文化傳承</h3>
              <p className="text-gray-700">
                我們致力於保存和推廣香港的文化遺產，將傳統元素融入現代設計。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">創新設計</h3>
              <p className="text-gray-700">
                我們鼓勵創新和獨特的設計，展示香港創意產業的活力和多樣性。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">品質保證</h3>
              <p className="text-gray-700">
                我們嚴格把關每一件產品的品質，確保客戶獲得最佳的購物體驗。
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">聯絡我們</h2>
            <p className="text-lg text-gray-700 mb-4">
              香港中環摩羅石街 20:8:24 樓
            </p>
            <p className="text-lg text-gray-700">
              電郵: info@hkculturemart.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
