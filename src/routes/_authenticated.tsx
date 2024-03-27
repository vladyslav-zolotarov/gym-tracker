import { redirectTo } from '@/helpers';
import { pb } from '@/lib/pocketbase';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const isAuth = pb.authStore.model;
    redirectTo({ isAuthenticated: !isAuth, route: '/signin' });
  },
});
