import MainLayout from "@/components/MainLayout";
import Image from "next/image";

export default function ChristmasPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/christmas-banner.jpg"
          alt="聖誕節"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">聖誕節</h1>
            <p className="text-white text-lg">香港特色聖誕禮品與裝飾</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">香港特色聖誕</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            在香港，聖誕節是一個充滿東西方文化交融的節日。我們提供獨特的香港風格聖誕商品，讓您的節日慶祝更具本地特色。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/christmas-feature.jpg" 
              alt="香港聖誕" 
              fill 
              className="object-cover" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">聖誕限定系列</h3>
            <p className="text-gray-700 mb-4">
              我們的聖誕限定系列融合了西方聖誕元素與香港本地文化，創造出獨特的節日體驗。從裝飾品到禮品，每一件都充滿創意和心意。
            </p>
            <p className="text-gray-700">
              無論是送給親友還是裝飾您的家，這些產品都能讓您的聖誕節更加特別。
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-green-600 mb-6">
            聖誕商品將於每年10月開始上架，敬請期待！
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
