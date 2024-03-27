import { createFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@pages/CategoriesPage/CategoriesPage';
import { redirectTo } from '@/helpers';
import { useAuthCheck } from '@/hooks';

export const Route = createFileRoute('/_authenticated/categories')({
  component: CategoriesPage,
});
