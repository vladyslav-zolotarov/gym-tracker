import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/calendar')({
  component: About,
});

function About() {
  return <div className='p-2'>Hello from Calendar!</div>;
}
