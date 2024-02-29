import { createLazyFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@pages/CategoriesPage/CategoriesPage';

export const Route = createLazyFileRoute('/my-categories')({
  component: CategoriesPage,
});
