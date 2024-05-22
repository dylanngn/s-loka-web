import clsx from 'clsx';

export function BackgroundImage({
  children,
  className,
  image,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  image: React.ReactNode;
}) {
  return (
    <div className={clsx('relative', 'overflow-hidden', className)} {...props}>
      <div className="absolute inset-0">{image}</div>
      <div className="h-full">{children}</div>
    </div>
  );
}
