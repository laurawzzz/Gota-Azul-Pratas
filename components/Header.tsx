import { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h1 className="text-2xl font-display font-bold text-gradient tracking-wide">
                Gota Azul
              </h1>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">
                Início
              </a>
              <a href="#collections" className="text-gray-700 hover:text-blue-800 transition-colors">
                Coleções
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">
                Sobre Nós
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">
                Contato
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleAuthClick}
                className="flex items-center space-x-2"
              >
                {user ? (
                  <>
                    <LogOut className="w-5 h-5" />
                    <span className="hidden lg:inline">Sair</span>
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5" />
                    <span className="hidden lg:inline">Entrar</span>
                  </>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-blue-100">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">
                  Início
                </a>
                <a href="#collections" className="text-gray-700 hover:text-blue-800 transition-colors">
                  Coleções
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">
                  Sobre Nós
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">
                  Contato
                </a>
                <Button 
                  variant="ghost" 
                  onClick={handleAuthClick}
                  className="justify-start"
                >
                  {user ? (
                    <>
                      <LogOut className="w-5 h-5 mr-2" />
                      Sair
                    </>
                  ) : (
                    <>
                      <User className="w-5 h-5 mr-2" />
                      Entrar
                    </>
                  )}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;
