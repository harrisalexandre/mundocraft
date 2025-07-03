import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Navigation />
      <main className="pt-20 container mx-auto px-4">{children}</main>
    </div>
  );
};

export default Layout;
