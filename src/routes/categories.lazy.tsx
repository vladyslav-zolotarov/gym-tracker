import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/categories')({
  component: Categories,
});

function Categories() {
  return <div className='p-2'>Hello from Categories!</div>;
}
