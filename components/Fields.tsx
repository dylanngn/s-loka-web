import clsx from 'clsx';
import { useId } from 'react';

const formClasses =
  'block w-full appearance-none rounded-md border border-secondary bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm';

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

export function TextField({ label, type = 'text', className, ...props }: any) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function AreaField({ label, className, ...props }: any) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea id={id} {...props} className={clsx(formClasses, 'h-full')} />
    </div>
  );
}
