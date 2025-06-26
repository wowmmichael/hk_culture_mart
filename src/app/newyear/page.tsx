import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function NewYearPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/newyear-banner.jpg"
          alt="農曆新年"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">農曆新年</h1>
            <p className="text-white text-lg">慶祝農曆新年的特色商品</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">迎接農曆新年</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            農曆新年是華人最重要的傳統節日，我們提供各種精美的新年裝飾和禮品，幫助您營造節日氛圍。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-800">新年飾品</h3>
            <p className="text-gray-700">
              春聯、燈籠、窗花等傳統新年裝飾，讓您的家充滿節日氣氛。
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-800">新年禮盒</h3>
            <p className="text-gray-700">
              精美的禮盒包裝，內含各種傳統糖果、餅乾和茶葉，是拜訪親友的最佳選擇。
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-800">限定玩具</h3>
            <p className="text-gray-700">
              以當年生肖為主題的限定版玩具和收藏品，是珍貴的紀念品。
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-red-600 mb-6">
            農曆新年商品將於節日前兩個月開始上架，敬請期待！
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
