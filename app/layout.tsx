import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0];
  const host = forwardedHost ?? requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0];
  const protocol =
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "于木禾 · YUMUHE · AI 全栈开发者",
    description:
      "于木禾（YUMUHE）的个人主页：10 年+研发经验，专注 AIGC 平台、模型服务、全栈产品与独立开发。",
    icons: {
      icon: "/cats/hello.png",
      shortcut: "/cats/hello.png",
      apple: "/cats/hello.png",
    },
    openGraph: {
      title: "于木禾 · YUMUHE · AI 全栈开发者",
      description: "把模型能力、工程系统与产品体验连成真正可用的链路。",
      type: "website",
      locale: "zh_CN",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 627,
          alt: "于木禾 · YUMUHE · AI 全栈开发者",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "于木禾 · YUMUHE · AI 全栈开发者",
      description: "把模型能力、工程系统与产品体验连成真正可用的链路。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
