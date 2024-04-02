import { createFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@pages/CategoriesPage/CategoriesPage';

export const Route = createFileRoute('/_authenticated/categories')({
  component: CategoriesPage,
});
