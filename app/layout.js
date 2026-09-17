import "./globals.css";
import "./global-v1.css";
import "./polish-v2.css";
import "./architecture-fix.css";
import "./assist.css";
import SitePolish from "./components/SitePolish";
import AurionAssistHost from "./components/AurionAssistHost";

export const metadata = {
  title: "AURION AI — Global Intelligent Systems for Business",
  description: "AI agents, automation and intelligent systems for customer service, sales and operations at global scale.",
  keywords: ["AI agents", "automation", "business AI", "customer service automation", "sales automation", "AURION AI"],
  openGraph: {
    title: "AURION AI — Global Intelligent Systems for Business",
    description: "AI agents, automation and intelligent systems for global business operations.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SitePolish />
        <AurionAssistHost />
      </body>
    </html>
  );
}
