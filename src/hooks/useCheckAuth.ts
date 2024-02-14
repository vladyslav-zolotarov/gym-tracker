export const useCheckAuth = () => {
  const auth = localStorage.getItem('pocketbase_auth');
  if (!auth) {
    return;
  }

  return JSON.parse(auth).model;
};
