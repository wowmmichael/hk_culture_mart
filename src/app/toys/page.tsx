import MainLayout from "@/components/MainLayout";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

// Toy product data
const toys = [
  {
    id: "plush-panda",
    title: "毛絨熊貓玩偶",
    description: "經典叮噹造型熊貓，場有可愛與抱抱",
    imageUrl: "/images/plush-panda.jpg"
  },
  {
    id: "panda-keychain",
    title: "小熊貓鑰匙圈",
    description: "可愛的小熊貓隨身帶，值得珍藏",
    imageUrl: "/images/panda-keychain.jpg"
  },
  {
    id: "panda-shirt",
    title: "亮綠袖子熊貓",
    description: "亮綠迷彩袖的熊貓，超級可愛",
    imageUrl: "/images/panda-green-shirt.jpg"
  },
  {
    id: "black-panda",
    title: "亮黑熊貓玩具",
    description: "亮黑的小熊貓色調濃烈可可用慢攤",
    imageUrl: "/images/black-panda.jpg"
  },
  {
    id: "white-panda",
    title: "熊貓支族玩具",
    description: "毛絨雪熊雪熊雲，銀色劍光使用",
    imageUrl: "/images/white-panda.jpg"
  },
];

export default function ToysPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/toys-banner-low.jpg"
          alt="玩具"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">玩具</h1>
            <p className="text-white text-lg">探索香港本土玩具與熊貓限定款</p>
          </div>
        </div>
      </div>
      
      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map(toy => (
            <ProductCard
              key={toy.id}
              id={toy.id}
              title={toy.title}
              description={toy.description}
              imageUrl={toy.imageUrl}
              href={`/toys/${toy.id}`}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
