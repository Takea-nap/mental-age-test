import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          找不到该页面
        </h1>
        <p className="mt-2 text-gray-600">
          抱歉，您访问的链接不存在或已被移动。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}

