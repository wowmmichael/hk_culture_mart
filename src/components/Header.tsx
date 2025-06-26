import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-100 transition-colors font-medium ${className}`}
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-red-700">香岛文化</Link>
          
          <div className="flex items-center space-x-1">
            <NavLink href="/">首頁</NavLink>
            <NavLink href="/toys">玩具</NavLink>
            <NavLink href="/culture">文創文旅</NavLink>
            <NavLink href="/christmas">聖誕節</NavLink>
            <NavLink href="/halloween">萬聖節</NavLink>
            <NavLink href="/newyear">贺年礼品</NavLink>
            <NavLink href="/about">關於我們</NavLink>
          </div>
          
          <div>
          </div>
        </nav>
      </div>
    </header>
  );
}
