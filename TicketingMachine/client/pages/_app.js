import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import DashboardProvider from '../dashboard/provider/context';
import Head from 'next/head';
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
    <Head>
      <title>Ticketing Dashboard</title>
    </Head>
    <DashboardProvider>
      <DashboardLayout  currentUser={currentUser}>
      <div className="container">
      <Component currentUser={currentUser} {...pageProps} />
    </div>
      </DashboardLayout>
    </DashboardProvider>
  </>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
