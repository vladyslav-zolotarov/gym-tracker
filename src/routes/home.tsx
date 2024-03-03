import { createFileRoute } from '@tanstack/react-router';
import { authRedirect } from '@helpers/index';

export const Route = createFileRoute('/home')({
  component: Index,
  beforeLoad: () => {
    authRedirect();
  },
});

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
