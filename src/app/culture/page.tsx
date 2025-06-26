import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function CulturePage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/culture-banner.jpg"
          alt="文創文旅"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">文創文旅</h1>
            <p className="text-white text-lg">香港獨特的文化創意與旅遊紀念品</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">探索香港文化創意</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            我們精選香港本地的文化創意產品，展示本地設計師和藝術家的才華與創意。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">香港特色</h3>
            <p className="text-gray-700 mb-4">
              從傳統到現代，我們收集了各種反映香港獨特文化和歷史的產品。每件作品都代表著香港的某一面向，講述著這座城市的故事。
            </p>
            <p className="text-gray-700">
              這些產品不僅僅是紀念品，更是香港文化的載體，讓您帶回家的不只是物品，還有香港的精神與情感。
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/culture-feature.jpg" 
              alt="香港特色" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">即將上架</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            我們正在與更多本地設計師合作，將帶來更多精彩的文創產品。敬請期待！
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
