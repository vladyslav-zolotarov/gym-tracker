import { SignInPage } from '@/pages/SignInPage/SignInPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/signup')({
  component: SignInPage,
});
