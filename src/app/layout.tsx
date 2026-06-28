import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Scientific Evidence Console",
  description:
    "NDA-safe scientific-operational mockup using synthetic demo data only.",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className="notranslate"
      suppressHydrationWarning
    >
      <body translate="no" className="notranslate" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
