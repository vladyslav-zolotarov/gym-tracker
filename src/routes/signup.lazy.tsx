import { SignUpPage } from '@/pages/SignUpPage/SignUpPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/signup')({
  component: SignUpPage,
});
