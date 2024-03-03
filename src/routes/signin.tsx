import { SignInPage } from '@pages/SignInPage/SignInPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signin')({
  component: SignInPage,
});
