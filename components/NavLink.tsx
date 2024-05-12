import Link from 'next/link';
import clsx from 'clsx';

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        'decoration-primary inline-block px-1 py-1 text-sm font-normal underline-offset-8 hover:font-medium hover:underline'
      )}
    >
      {children}
    </Link>
  );
}
