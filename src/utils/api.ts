import type { FormData, WebhookPayload } from '@types/index';
import { WEBHOOK_URL } from '@constants/index';

export async function submitContactForm(data: FormData): Promise<boolean> {
  if (!WEBHOOK_URL) {
    throw new Error('Webhook URL is not configured');
  }

  const payload: WebhookPayload = {
    ...data,
    source: "Jessica's Shampooch Website",
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return true;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 11 && cleaned[0] === '1') {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
}
