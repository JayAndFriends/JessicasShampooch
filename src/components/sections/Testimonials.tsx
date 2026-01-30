import { Container, StarRating } from '@components/ui';
import { TESTIMONIALS } from '@constants/index';

const delayClasses = ['delay-200', 'delay-400', 'delay-600'];

const trustBadges = [
  {
    image: 'https://picsum.photos/id/1062/80/80',
    alt: 'Experienced Care',
    label: 'Experienced Care',
  },
  {
    image: 'https://picsum.photos/id/1025/80/80',
    alt: 'Professional Groomer',
    label: 'Professional Groomer',
  },
  {
    image: 'https://picsum.photos/id/237/80/80',
    alt: 'Local Business',
    label: 'Local Hermitage',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-zinc-50 relative overflow-hidden"
    >
      {/* Decorative paw icons */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm12 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' fill='%23ff6b95' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-zinc-600">
            Join the hundreds of satisfied clients in Hermitage, PA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-3xl shadow-lg border border-zinc-100 flex flex-col justify-between reveal opacity-0 translate-y-10 transition-all duration-700 ${delayClasses[i]}`}
            >
              <div>
                <StarRating rating={testimonial.rating} className="mb-4" />
                <p className="text-zinc-700 italic text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-black">{testimonial.name}</h4>
                <p className="text-sm text-zinc-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* High-trust cues */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={badge.image}
                alt={badge.alt}
                className="w-16 h-16 rounded-full mb-2 object-cover"
                loading="lazy"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
