import { NAVIGATION_LINKS, CONTACT_INFO, APP_NAME } from '@constants/index';
import { Button } from '@components/ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-primary rounded-full flex items-center justify-center text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-black tracking-tight">
            Jessica's <span className="text-pink-primary font-bold">Shampooch</span>
          </span>
        </div>

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
