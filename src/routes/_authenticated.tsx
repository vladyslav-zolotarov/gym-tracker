import { redirectTo } from '@/helpers';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      redirectTo({
        isAuthenticated: !context.auth.isAuthenticated,
        route: '/signin',
        location,
      });
    }
  },
});
