import { SITE } from '../data/site';

/**
 * Sends the contact form to enquiry@preventsmanagement.com via FormSubmit.
 * First live submit triggers a one-time activation email to that inbox — click the link once.
 * Override endpoint with VITE_FORM_SUBMIT_URL in .env if needed.
 */
export async function submitEnquiry(form, honeypot = '') {
  if (honeypot.trim()) {
    return { ok: true };
  }

  const endpoint =
    import.meta.env.VITE_FORM_SUBMIT_URL ||
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      phone: form.phone,
      event_type: form.event,
      message: form.message,
      _subject: `Website enquiry: ${form.event} — ${form.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    const message =
      data.message ||
      data.error ||
      'We could not send your enquiry. Please email us directly at enquiry@preventsmanagement.com.';
    throw new Error(message);
  }

  return data;
}
