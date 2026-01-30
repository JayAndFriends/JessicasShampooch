import { Container, Button, Input, Textarea } from '@components/ui';
import { useContactForm } from '@hooks/useContactForm';
import { CONTACT_INFO } from '@constants/index';
import { formatPhoneNumber } from '@utils/api';

export function ContactForm() {
  const { formData, status, errors, handleChange, handleSubmit, resetForm } =
    useContactForm();

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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Info */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Ready to give your pet the <br />
                <span className="text-zinc-900">ultimate spa day?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Fill out the form to request an appointment. Somebody from the
                Shampooch team will get back to you to confirm your slot at
                Hermitage's favorite grooming salon.
              </p>
              <div className="pt-4 flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
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
                    className="font-bold text-xl hover:underline"
                  >
                    {formatPhoneNumber(CONTACT_INFO.phone)}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
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
                  <span className="font-bold">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl text-zinc-900">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Request Sent!</h3>
                  <p className="text-zinc-600">
                    Jessica will contact you shortly to confirm your
                    appointment. Wags and kisses!
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-pink-primary font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      type="text"
                      placeholder="e.g. Mary McDermott"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="(724) 000-0000"
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      error={errors.phone}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Pet's Name"
                      type="text"
                      placeholder="e.g. Buster"
                      value={formData.petName}
                      onChange={e => handleChange('petName', e.target.value)}
                      error={errors.petName}
                      required
                    />
                    <Input
                      label="Breed"
                      type="text"
                      placeholder="e.g. Golden Retriever"
                      value={formData.breed}
                      onChange={e => handleChange('breed', e.target.value)}
                      error={errors.breed}
                      required
                    />
                  </div>
                  <Textarea
                    label="Special Notes (Optional)"
                    rows={3}
                    placeholder="Tell us about your pet's needs..."
                    value={formData.message}
                    onChange={e => handleChange('message', e.target.value)}
                    error={errors.message}
                  />

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    isLoading={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Book Appointment 🐾'}
                  </Button>

                  {status === 'error' && !Object.keys(errors).length && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      Something went wrong. Please try calling us directly!
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
