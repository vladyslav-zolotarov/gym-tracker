import { redirect } from '@tanstack/react-router';
import { useAuthCheck } from '@hooks/index';

export const authRedirect = () => {
  const auth = useAuthCheck();

  if (!auth) {
    throw redirect({
      to: '/signin',
      search: {
        redirect: location.href,
      },
    });
  }
};
