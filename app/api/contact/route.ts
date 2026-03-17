import { NextResponse } from 'next/server';
import {
  type ContactPayload,
  validateContactPayload,
} from '../../../lib/contact';

function sanitize(payload: ContactPayload): ContactPayload {
  return {
    fullName: payload.fullName?.trim() || '',
    email: payload.email?.trim() || '',
    phone: payload.phone?.trim() || '',
    eventDate: payload.eventDate?.trim() || '',
    venue: payload.venue?.trim() || '',
    audience: payload.audience?.trim() || '',
    message: payload.message?.trim() || '',
    company: payload.company?.trim() || '',
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = sanitize((await request.json()) as ContactPayload);
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }

  if (payload.company) {
    return NextResponse.json({ ok: true, message: 'Request received.' });
  }

  const errors = validateContactPayload(payload);
  if (errors.length) {
    return NextResponse.json(
      { ok: false, message: errors[0] },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: 'Contact delivery is not configured yet. Please call us at +1 (801) 520-1699.' },
      { status: 503 }
    );
  }

  const webhookHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const webhookBearerToken = process.env.CONTACT_WEBHOOK_BEARER_TOKEN?.trim();
  if (webhookBearerToken) {
    webhookHeaders.Authorization = `Bearer ${webhookBearerToken}`;
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: webhookHeaders,
    body: JSON.stringify({
      source: 'taylorav.com/contact',
      submittedAt: new Date().toISOString(),
      contact: {
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
      },
      event: {
        date: payload.eventDate || null,
        venue: payload.venue || null,
        audience: payload.audience || null,
      },
      message: payload.message,
    }),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json(
      { ok: false, message: 'Submission could not be delivered. Please call us at +1 (801) 520-1699 and we\'ll get you sorted.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: 'Request sent. Taylor AV will follow up shortly.',
  });
}
