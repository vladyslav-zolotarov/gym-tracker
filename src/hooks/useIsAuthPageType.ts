import { useEffect, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';

export const useIsAuthPageType = () => {
  const router = useRouterState();
  const [isAuthPageType, setIsAuthPageType] = useState<boolean>();

  useEffect(() => {
    if (
      router.location.pathname === '/signin' ||
      router.location.pathname === '/signup'
    ) {
      return setIsAuthPageType(true);
    }
    return setIsAuthPageType(false);
  }, [router]);

  return { isAuthPageType };
};
