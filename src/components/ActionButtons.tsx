import Link from "next/link";

interface ActionButtonsProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  className?: string;
}

export default function ActionButtons({
  primaryText = "探索產品",
  primaryLink = "/toys",
  secondaryText = "了解更多",
  secondaryLink = "/about",
  className = ""
}: ActionButtonsProps) {
  return (
    <div className={`flex gap-4 items-center flex-col sm:flex-row ${className}`}>
      <Link
        href={primaryLink}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 hover:bg-red-700 text-white gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 sm:w-auto"
      >
        {primaryText}
      </Link>
      <Link
        href={secondaryLink}
        className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
      >
        {secondaryText}
      </Link>
    </div>
  );
}
