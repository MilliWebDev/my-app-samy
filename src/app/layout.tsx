import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
});


export const metadata: Metadata = {
  title: "Phoenix Groupe",
  description: "Site officiel de Phoenix Groupe, pour offrir ses services de relance d'entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={` ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
