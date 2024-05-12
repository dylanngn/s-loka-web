import clsx from 'clsx';

export function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <section
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}
