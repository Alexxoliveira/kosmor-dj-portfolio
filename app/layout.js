import "./globals.css";
import "./light-theme.css";
import "./cinematic-theme.css";
import "./motion-system.css";

export const metadata = {
  title: "AURION AI — Intelligent Systems for Business",
  description:
    "AURION AI cria agentes, automações e sistemas inteligentes para atendimento, vendas e operações.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
