'use server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import parsePhoneNumber from 'libphonenumber-js';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export type ContactRequest = {
  name: string;
  phone: string;
  company: string;
  website: string;
  email: string;
  message: string;
};

const zPhoneNumber = z.string().transform((value, ctx) => {
  const phoneNumber = parsePhoneNumber(value, {
    defaultCountry: 'VN',
  });

  if (!phoneNumber?.isValid()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Invalid phone number',
    });
    return z.NEVER;
  }

  return phoneNumber.formatInternational();
});

export async function createContactRequest(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(3),
    phone: zPhoneNumber,
    company: z.string().min(3),
    website: z.string().url(),
    email: z.string().email(),
    message: z.string().min(3),
  });
  const parse = schema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    website: formData.get('website'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parse.success) {
    console.log(parse.error);
    return { message: 'Invalid form data' };
  }

  try {
    const contactRequestKV = getRequestContext().env.CONTACT_REQUESTS;
    const id = Date.now().toString();
    await contactRequestKV.put(id, JSON.stringify(parse.data));
    revalidatePath('/');
    console.log('Contact request sent');
    return { message: 'Contact request sent' };
  } catch (error) {
    console.error(error);
    return { message: 'Failed to send contact request' };
  }
}
