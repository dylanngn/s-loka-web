import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  className = clsx(
    'group inline-flex items-center justify-center rounded-xl py-2 px-6 text-sm font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-secondary text-white hover:bg-primary hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',

    className
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...(props as any)} />
  );
}
