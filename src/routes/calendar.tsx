import { createFileRoute } from '@tanstack/react-router';
import { authRedirect } from '@helpers/index';

export const Route = createFileRoute('/calendar')({
  component: About,
  beforeLoad: () => {
    authRedirect();
  },
});

function About() {
  return <div className='p-2'>Hello from Calendar!</div>;
}
