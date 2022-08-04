import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import DashboardProvider from '../dashboard/provider/context';
import BusInfo  from '../../pages/bus';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bus Dashboard</title>
      </Head>
      <DashboardProvider>
        <DashboardLayout>
        <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default MyApp;
