import Link from "next/link";

const variants = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  available: i < 5,
}));

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Выберите вариант сайта
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-3xl">
        {variants.map((v) =>
          v.available ? (
            <Link
              key={v.id}
              href={`/v${v.id}`}
              className="block rounded-xl bg-gray-800 hover:bg-blue-600 text-white font-semibold text-center py-6 transition shadow-md"
            >
              Вариант {v.id}
            </Link>
          ) : (
            <div
              key={v.id}
              className="block rounded-xl bg-gray-800/60 text-gray-500 font-medium text-center py-6 border border-gray-700"
            >
              Вариант {v.id}
              <div className="text-xs mt-1 opacity-75">Скоро</div>
            </div>
          )
        )}
      </div>

      <p className="text-gray-500 text-sm mt-8">Адаптировано под мобильные устройства</p>
    </main>
  );
}
