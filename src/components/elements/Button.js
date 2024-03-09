import React from 'react';

export default function Button({children, className}) {
  return (
    <div>
      <button className={`${className} bg-primary  hover:bg-secondary animate px-4 py-3 uppercase shadow-xl text-white tracking-widest text-sm font-medium `}>{children}</button>
    </div>
  );
}
