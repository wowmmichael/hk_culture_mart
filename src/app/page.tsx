import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">香岛文化</h1>
              <p className="text-xl text-gray-600 mb-8">發掘香港本地文化與創意，支持本地創作者</p>
              <Link 
                href="/toys" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                探索産品
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/images/hero-image.jpg" 
                alt="香岛文化"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">熱門分類</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/toys" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image 
                    src="/images/toys-category.jpg" 
                    alt="玩具"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">玩具</h3>
                  <p className="text-gray-600">經典香港玩具與最新設計師作品</p>
                </div>
              </div>
            </Link>
            <Link href="/culture" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image 
                    src="/images/culture-category.jpg" 
                    alt="文創文旅"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">文創文旅</h3>
                  <p className="text-gray-600">精美手工藝品與文化紀念品</p>
                </div>
              </div>
            </Link>
            <Link href="/newyear" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image 
                    src="/images/newyear-category.jpg" 
                    alt="農曆新年"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">農曆新年</h3>
                  <p className="text-gray-600">迎接新年的傳統與現代商品</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
