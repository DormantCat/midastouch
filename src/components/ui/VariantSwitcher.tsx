"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = Array.from({ length: 5 }, (_, i) => i + 1);

export default function VariantSwitcher() {
  const pathname = usePathname();
  const current = Number(pathname.replace("/v", ""));

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-md px-3 py-2 rounded-full flex space-x-2 border border-gray-700 shadow-lg z-50 overflow-x-auto">
      {variants.map((v) => (
        <Link
          key={v}
          href={`/v${v}`}
          className={`px-3 py-1 rounded-full text-sm font-medium transition whitespace-nowrap ${
            current === v
              ? "bg-blue-500 text-white"
              : v <= 5
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gray-900 text-gray-500 cursor-not-allowed"
          }`}
        >
          v{v}
        </Link>
      ))}
    </div>
  );
}
