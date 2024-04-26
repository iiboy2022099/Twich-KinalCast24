import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { useUserDetails } from "../../shared/hooks";
import { useChannels } from "../../shared/hooks/useChannels";
import { Sidebar } from "../../components/navbars/Sidebar";
import { loadingSpinner } from "../../components/LoadingSpinner";
import "./dashboardPage.css";
import { Content } from "../../components/dash/Content";

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching, followedChannels } = useChannels()
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    return <loadingSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar channels={followedChannels || []}/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  );
};