import { createFileRoute } from '@tanstack/react-router';
import { redirectTo } from '@helpers/index';
import { useAuthCheck } from '@/hooks';

export const Route = createFileRoute('/_authenticated/home')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
