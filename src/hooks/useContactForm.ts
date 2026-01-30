import { useState } from 'react';
import type { FormData, FormStatus } from '@types/index';
import { validateForm } from '@utils/validation';
import { submitContactForm } from '@utils/api';
import { trackEvent } from '@utils/analytics';

interface UseContactFormReturn {
  formData: FormData;
  status: FormStatus;
  errors: Partial<Record<keyof FormData, string>>;
  handleChange: (field: keyof FormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  petName: '',
  message: '',
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrors({});

    // Validate form
    const validation = validateForm(formData);
    
    if (!validation.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      validation.error.errors.forEach(err => {
        const field = err.path[0] as keyof FormData;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      setStatus('error');
      return;
    }

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData(initialFormData);
      
      // Track successful form submission
      trackEvent({
        action: 'form_submission',
        category: 'Contact',
        label: 'Appointment Request',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrors({ name: 'Failed to submit form. Please try again or call us directly.' });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setStatus('idle');
    setErrors({});
  };

  return {
    formData,
    status,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
