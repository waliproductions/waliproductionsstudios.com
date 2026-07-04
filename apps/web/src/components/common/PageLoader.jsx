import React from 'react';
import { Spinner } from '@/components/ui/spinner';

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
    <Spinner className="size-8 text-brand-blue-400" />
  </div>
);

export default PageLoader;
