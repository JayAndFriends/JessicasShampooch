import { Container } from '@components/ui';
import { CONTACT_INFO, BUSINESS_HOURS, SOCIAL_LINKS, APP_NAME } from '@constants/index';
import { formatPhoneNumber } from '@utils/api';

const socialIcons = {
  facebook: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.012 3.855.064 1.07.053 1.612.221 1.998.37a3.34 3.34 0 011.215.79 3.34 3.34 0 01.79 1.215c.149.386.317.927.37 1.998.052 1.07.064 1.424.064 3.855s-.012 2.784-.064 3.855c-.053 1.07-.221 1.612-.37 1.998a3.34 3.34 0 01-.79 1.215 3.34 3.34 0 01-1.215.79c-.386.149-.927.317-1.998.37-1.07.052-1.424.064-3.855.064s-2.784-.012-3.855-.064c-1.07-.053-1.612-.221-1.998-.37a3.34 3.34 0 01-1.215-.79 3.34 3.34 0 01-.79-1.215c-.149-.386-.317-.927-.37-1.998-.052-1.07-.064-1.424-.064-3.855s.012-2.784.064-3.855c.053-1.07.221-1.612.37-1.998a3.34 3.34 0 01.79-1.215 3.34 3.34 0 011.215-.79c.386-.149.927-.317 1.998-.37C9.531 2.012 9.885 2 12.315 2m0-2C9.805 0 9.485.01 8.49.055 7.495.101 6.814.258 6.225.488a5.34 5.34 0 00-1.93 1.255 5.34 5.34 0 00-1.255 1.93C2.809 4.267 2.651 4.948 2.605 5.943 2.56 6.939 2.55 7.259 2.55 9.77s.01 2.831.055 3.826c.046.995.204 1.676.434 2.265a5.34 5.34 0 001.255 1.93 5.34 5.34 0 001.93 1.255c.59.23 1.27.387 2.265.434.995.046 1.315.056 3.826.056s2.831-.01 3.826-.056c.995-.046 1.676-.204 2.265-.434a5.34 5.34 0 001.93-1.255 5.34 5.34 0 001.255-1.93c.23-.59.387-1.27.434-2.265.046-.995.056-1.315.056-3.826s-.01-2.831-.056-3.826c-.046-.995-.204-1.676-.434-2.265a5.34 5.34 0 00-1.255-1.93 5.34 5.34 0 00-1.93-1.255C17.805.258 17.125.101 16.13.055 15.135.01 14.815 0 12.315 0z" />
      <path d="M12.315 4.755A5.015 5.015 0 1017.33 9.77a5.015 5.015 0 00-5.015-5.015zm0 8.283A3.268 3.268 0 1115.583 9.77a3.268 3.268 0 01-3.268 3.268zM17.535 5.84a1.173 1.173 0 11-1.173-1.173 1.173 1.173 0 011.173 1.173z" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt={APP_NAME}
              className="h-32 w-auto object-contain"
            />
            <p className="text-zinc-400 leading-relaxed">
              Premium pet grooming in Hermitage, PA. Dedicated to comfort,
              style, and stress-free care for your furry family members.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-pink-primary transition-colors"
                >
                  {formatPhoneNumber(CONTACT_INFO.phone)}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Hours</h4>
            <ul className="space-y-3 text-zinc-400">
              {BUSINESS_HOURS.map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span>{item.day}</span>
                  <span className="text-white">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-pink-primary transition-all"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
