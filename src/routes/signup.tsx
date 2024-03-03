import { SignUpPage } from '@pages/SignUpPage/SignUpPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
  component: SignUpPage,
});
