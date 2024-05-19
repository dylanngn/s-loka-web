import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className="text-center pb-16">
      <div className="flex">
        <Link href="/" aria-label="Home"></Link>
      </div>
      <h1 className="mt-20 text-lg font-semibold text-gray-900">404</h1>
      <p className="mt-3 text-sm text-gray-700">
        Xin lỗi, trang này hiện không tồn tại.
      </p>
      <Button href="/" className="mt-10">
        Về trang chủ
      </Button>
    </Container>
  );
}
