import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Users, Image, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "Sobre Nós", icon: Info },
    { path: "/connect", label: "Como Conectar", icon: Users },
    { path: "/gallery", label: "Galeria", icon: Image },
    { path: "/stats", label: "Estatísticas", icon: BarChart3 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded shadow-glow-primary"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MineCraft Server
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button
                  variant={isActive(path) ? "default" : "ghost"}
                  className={`flex items-center space-x-2 text-foreground ${
                    isActive(path)
                      ? "bg-gradient-primary text-primary-foreground shadow-glow-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Button>
              </Link>
            ))}

            {/* Botão de tema (sol/lua) */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link key={path} to={path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(path) ? "default" : "ghost"}
                    className={`w-full justify-start space-x-2 text-foreground ${
                      isActive(path)
                        ? "bg-gradient-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </Button>
                </Link>
              ))}

              {/* Tema no mobile */}
              <div className="pl-2 pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
