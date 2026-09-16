import "./globals.css";

export const metadata = {
  title: "KOSMOR — Psytrance / Full On",
  description: "KOSMOR — DJ & producer. Psytrance / Full On.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
