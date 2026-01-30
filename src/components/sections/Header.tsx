import { NAVIGATION_LINKS, CONTACT_INFO, APP_NAME } from '@constants/index';
import { Button } from '@components/ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img
            src="/logo.png"
            alt={APP_NAME}
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex space-x-8 font-medium" aria-label="Main navigation">
          {NAVIGATION_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-pink-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <Button
            as="a"
            href={`tel:${CONTACT_INFO.phone}`}
            variant="secondary"
            size="sm"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
}
