import dynamic from 'next/dynamic';

const Login = dynamic(() => import('./components/login.client'), { ssr: false });

function Page() {
  return <Login />
}

export default Page;
