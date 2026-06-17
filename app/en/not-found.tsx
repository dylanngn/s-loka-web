import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className="text-center pb-16">
      <div className="flex">
        <Link href="/en" aria-label="Home"></Link>
      </div>
      <h1 className="mt-20 text-lg font-semibold text-gray-900">404</h1>
      <p className="mt-3 text-sm text-gray-700">Sorry, this page does not exist.</p>
      <Button href="/en" className="mt-10">Back to homepage</Button>
    </Container>
  );
}
