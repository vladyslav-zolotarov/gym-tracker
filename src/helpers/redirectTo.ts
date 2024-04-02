import { ParsedLocation, redirect } from '@tanstack/react-router';

type redirectProps = {
  isAuthenticated: boolean;
  route: string;
  location?: ParsedLocation<{}>;
};

export const redirectTo = ({
  isAuthenticated,
  route,
  location,
}: redirectProps) => {
  if (isAuthenticated) {
    throw redirect({
      to: route,
      search: {
        redirect: location ? location.href : '',
      },
    });
  }
};
