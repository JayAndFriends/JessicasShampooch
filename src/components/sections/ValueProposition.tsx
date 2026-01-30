import { Card, Container } from '@components/ui';
import type { ValueProposition as ValuePropType } from '@types/index';

const values: ValuePropType[] = [
  {
    title: 'Gentle handling',
    description:
      'We take the time to build trust with every pet, ensuring a calm and comfortable environment for even the most anxious friends.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-pink-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Cozy Environment',
    description:
      'Our Hermitage salon is designed to be clean, inviting, and quiet, providing a boutique experience that avoids the chaos of big-box stores.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-pink-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: 'Personalized Care',
    description:
      "Jessica treats every animal with individual attention, from specialized shampoos to specific styling requests that fit your pet's lifestyle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-pink-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

const delayClasses = ['delay-200', 'delay-400', 'delay-600'];

export function ValueProposition() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <Container>
        <div className="text-center mb-16 space-y-4 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our Promise of Value
          </h2>
          <div className="w-24 h-1.5 bg-pink-primary mx-auto rounded-full" />
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            We don't just groom; we care. Every service at Jessica's Shampooch
            is built on a foundation of safety, comfort, and professional
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} hover delay={delayClasses[index]}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                {value.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
