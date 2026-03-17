export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  eventType?: string;
  eventDate?: string;
  venue?: string;
  audience?: string;
  message: string;
  company?: string;
};

export function validateContactPayload(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.fullName.trim()) errors.push("Full name is required.");
  if (!payload.email.trim()) errors.push("Email address is required.");
  if (!payload.phone.trim()) errors.push("Phone number is required.");
  if (!payload.message.trim()) errors.push("Project details are required.");

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("Enter a valid email address.");
  }

  if (payload.message.trim().length < 20) {
    errors.push("Project details should be at least 20 characters.");
  }

  return errors;
}

