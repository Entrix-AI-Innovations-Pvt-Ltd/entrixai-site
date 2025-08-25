export function getWaitlistEndpoint(): string {
  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

  if (!endpoint) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('NEXT_PUBLIC_WAITLIST_ENDPOINT not set, using placeholder');
    }
    return 'https://formspree.io/f/your-form-id';
  }

  return endpoint;
}
