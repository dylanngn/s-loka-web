'use client';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { AreaField, TextField } from '@/components/Fields';
import { useFormState, useFormStatus } from 'react-dom';
import { createContactRequest } from '@/server/post-contact-request';

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="mt-10 flex justify-center" aria-disabled={pending}>
      <Button type="submit">{label}</Button>
    </div>
  );
}

const initialState = {
  message: '',
};
export default function Contact() {
  const [state, formAction] = useFormState(createContactRequest, initialState);

  return (
    <Container id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      <form action={formAction} className="mx-auto my-6 max-w-2xl sm:my-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          <div className="flex flex-col gap-y-4 sm:gap-x-6 sm:col-span-1">
            <TextField
              label={fields.name}
              id="name"
              name="name"
              required
              type="text"
            />
            <TextField
              label={fields.phone}
              required
              type="tel"
              id="phone"
              name="phone"
            />
            <TextField
              label={fields.company}
              required
              type="text"
              id="company"
              name="company"
            />
            <TextField
              label={fields.website}
              required
              id="website"
              name="website"
            />
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-x-6 sm:col-span-1">
            <TextField
              label={fields.email}
              required
              type="email"
              id="email"
              name="email"
            />
            <AreaField
              label={fields.message}
              required
              type="text"
              id="message"
              name="message"
              className="flex-1 flex flex-col"
            />
          </div>
        </div>
        <SubmitButton label={submit} />
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </Container>
  );
}
