import { createFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@pages/CategoriesPage/CategoriesPage';
import { authRedirect } from '@helpers/index';

export const Route = createFileRoute('/categories')({
  component: CategoriesPage,
  beforeLoad: () => {
    authRedirect();
  },
});
