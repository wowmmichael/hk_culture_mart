import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function HalloweenPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/halloween-banner.jpg"
          alt="萬聖節"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">萬聖節</h1>
            <p className="text-white text-lg">結合香港本地文化的萬聖節商品</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">香港風格萬聖節</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            萬聖節在香港越來越受歡迎。我們融合香港本地元素與萬聖節主題，打造獨特的節日體驗。
          </p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-orange-800">萬聖節精選</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-lg mb-2">裝飾品</h4>
              <p className="text-gray-700">
                結合中國傳統元素與萬聖節氣氛的獨特裝飾品。
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-lg mb-2">服裝道具</h4>
              <p className="text-gray-700">
                創意十足的萬聖節服裝與道具，融合東西方元素。
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-lg mb-2">特別版玩具</h4>
              <p className="text-gray-700">
                萬聖節限定版玩具，融合中西文化的獨特設計。
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-orange-600 mb-6">
            萬聖節商品將於每年9月開始上架，敬請期待！
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
