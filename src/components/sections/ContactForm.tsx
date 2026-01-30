import { Container } from '@components/ui';
import { CONTACT_INFO } from '@constants/index';
import { formatPhoneNumber } from '@utils/api';
import { useEffect } from 'react';

export function ContactForm() {
  useEffect(() => {
    // Load GoHighLevel form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="bg-gradient-pink rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-700">
          {/* Paw print background detail */}
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6s2-.9 2-2-.9-2-2-2zm-5 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm14 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
            </svg>
          </div>

          <div className="relative z-10 space-y-12">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Book Your Pet's <br />
                <span className="text-zinc-900">Spa Day</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Choose your preferred date and time below. Pick a slot that works
                for you, and we'll confirm your appointment!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="font-bold text-lg hover:underline"
                  >
                    {formatPhoneNumber(CONTACT_INFO.phone)}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-lg">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/DDM8Fk99495sLFhZ36AI"
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  minHeight: '800px',
                }}
                scrolling="no"
                id="DDM8Fk99495sLFhZ36AI_1769749460806"
                title="Book Your Pet's Spa Day"
              />
            </div>

            {/* Quick Help Text */}
            <div className="text-center text-white/80 text-sm">
              <p>
                Having trouble booking? Call us at{' '}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="underline font-bold hover:text-white"
                >
                  {formatPhoneNumber(CONTACT_INFO.phone)}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
