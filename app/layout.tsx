import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tmyildirim.github.io"),
  title: "Tevfik Murat Yildirim · Political Science",
  description:
    "Professor of Political Science at the University of Stavanger. Research on representation, public opinion, policy agendas, and political communication.",
  openGraph: {
    title: "Tevfik Murat Yildirim · Political Science",
    description:
      "Professor of Political Science at the University of Stavanger. Research on representation, public opinion, policy agendas, and political communication.",
    url: "https://tmyildirim.github.io",
    siteName: "Tevfik Murat Yildirim",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tevfik Murat Yildirim — Political Science, University of Stavanger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tevfik Murat Yildirim · Political Science",
    description:
      "Professor of Political Science at the University of Stavanger. Research on representation, public opinion, policy agendas, and political communication.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
