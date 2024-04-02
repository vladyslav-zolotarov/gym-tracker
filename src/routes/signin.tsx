import { createFileRoute } from '@tanstack/react-router';
import { SignInPage } from '@pages/SignInPage/SignInPage';
import { redirectTo } from '@helpers/index';

export const Route = createFileRoute('/signin')({
  component: SignInPage,
  beforeLoad: ({ context }) => {
    redirectTo({
      isAuthenticated: context.auth.isAuthenticated,
      route: '/home',
    });
  },
});
