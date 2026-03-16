'use client';

import { FormEvent, useMemo, useState } from 'react';
import { trackEvent } from '../lib/analytics';
import { buildContactFallbackUrl, type ContactPayload } from '../lib/contact';

const initialForm: ContactPayload = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  venue: '',
  audience: '',
  message: '',
  company: '',
};

type SubmitState =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>({ type: 'idle' });

  const fallbackUrl = useMemo(() => buildContactFallbackUrl(form), [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: 'submitting' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok) {
        const message = result.message || 'We could not send your request right now.';
        setSubmitState({ type: 'error', message });
        trackEvent('contact_submit_error', { status: response.status, message });
        return;
      }

      setForm(initialForm);
      setSubmitState({
        type: 'success',
        message: result.message || 'Your request has been sent. We will follow up shortly.',
      });
      trackEvent('contact_submit_success', { source: 'contact_form' });
    } catch {
      const message = 'We could not send your request right now.';
      setSubmitState({ type: 'error', message });
      trackEvent('contact_submit_error', { status: 'network', message });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitState.type === 'success' ? (
        <div className="form-status form-status-success" role="status">
          {submitState.message}
        </div>
      ) : null}

      {submitState.type === 'error' ? (
        <div className="form-status form-status-error" role="alert">
          <div>{submitState.message}</div>
          <a
            className="button button-ghost form-fallback"
            href={fallbackUrl}
            onClick={() => trackEvent('contact_fallback_email_click', { source: 'contact_form' })}
          >
            Email this request instead
          </a>
        </div>
      ) : null}

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="full-name">Full name</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Jordan Blake"
            required
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (801) 520-1699"
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event date</label>
          <input
            type="date"
            id="date"
            name="event-date"
            value={form.eventDate}
            onChange={(event) => setForm((current) => ({ ...current, eventDate: event.target.value }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="venue">Venue / location</label>
          <input
            type="text"
            id="venue"
            name="venue"
            placeholder="City, venue, or address"
            value={form.venue}
            onChange={(event) => setForm((current) => ({ ...current, venue: event.target.value }))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="audience">Audience size</label>
          <input
            type="text"
            id="audience"
            name="audience"
            placeholder="150 guests / 1,500 capacity"
            value={form.audience}
            onChange={(event) => setForm((current) => ({ ...current, audience: event.target.value }))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">What’s the show?</label>
        <textarea
          id="message"
          name="message"
          placeholder="List run-of-show highlights, production goals, or streaming needs."
          required
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        />
      </div>

      <div className="form-hint">
        Quote requests post to a delivery webhook when configured. If that pipeline is unavailable, the form gives you an email fallback instead of dropping the lead.
      </div>

      <button type="submit" disabled={submitState.type === 'submitting'}>
        {submitState.type === 'submitting' ? 'Sending...' : 'Send request'}
      </button>
    </form>
  );
}
