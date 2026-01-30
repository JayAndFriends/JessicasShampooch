import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Please enter a valid phone number'
    ),
  petName: z
    .string()
    .min(2, 'Pet name must be at least 2 characters')
    .max(100, 'Pet name must be less than 100 characters'),
  message: z.string().max(500, 'Message must be less than 500 characters').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const validateForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};
