import { redirect } from '@tanstack/react-router';

export const redirectTo = ({
  isAuthenticated,
  route,
}: {
  isAuthenticated: boolean;
  route: string;
}) => {
  if (isAuthenticated) {
    throw redirect({
      to: route,
      search: {
        redirect: location.href,
      },
    });
  }
};
