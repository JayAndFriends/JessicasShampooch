import { Button, Container } from '@components/ui';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-cream"
    >
      {/* Paw pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm12 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' fill='%23ff6b95' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Hero Content */}
          <div className="md:w-1/2 space-y-8 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="inline-block bg-pink-50 border border-pink-200 text-pink-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              Hermitage's Favorite Groomer 🐾
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
              Where Every Tail <br />
              <span className="text-pink-primary italic">Wags with Joy.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-lg leading-relaxed">
              Premium grooming that treats your pets like family. Experience
              stress-free, gentle care tailored to your furry friend's unique
              personality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="#testimonials" variant="primary" size="lg">
                See Our Happy Clients
              </Button>
              <Button as="a" href="#services" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 relative reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="relative z-10 animate-float">
              <img
                src="https://picsum.photos/id/237/600/600"
                alt="Happy dog after grooming at Jessica's Shampooch"
                className="rounded-3xl shadow-2xl border-8 border-white object-cover w-full h-[400px] md:h-[500px]"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-pink-100 max-w-[200px]">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-black">
                  100+ Happy Pets Monthly
                </p>
              </div>
            </div>

            {/* Decorative background shapes */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-pink-100 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-200 rounded-full -z-10 blur-2xl opacity-40" />
          </div>
        </div>
      </Container>

      {/* Gentle transition divider */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
