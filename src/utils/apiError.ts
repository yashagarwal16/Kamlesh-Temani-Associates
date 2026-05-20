export const getApiErrorMessage = (
  payload: { error?: string; details?: string; message?: string } | null | undefined,
  fallback: string
) => {
  if (!payload) {
    return fallback;
  }

  if (payload.details) {
    const genericError = payload.error?.trim().toLowerCase();
    const genericMessages = new Set([
      'authentication is temporarily unavailable',
      'chat is temporarily unavailable',
      'reviews is temporarily unavailable'
    ]);

    if (!payload.error || genericMessages.has(genericError ?? '')) {
      return payload.details;
    }

    return `${payload.error} ${payload.details}`;
  }

  return payload.error || payload.message || fallback;
};
