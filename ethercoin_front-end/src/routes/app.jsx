import Dashboard from 'views/Dashboard/Dashboard';
import Profile from 'views/Profile/Profile';
import Wallet from 'views/Wallet/Wallet';
import Icons from 'views/Icons/Icons';
import Upgrade from 'views/Upgrade/Upgrade';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/ico", name: "ICO", icon: "pe-7s-car", component: Profile },
    { path: "/wallet", name: "WALLET", icon: "pe-7s-wallet", component: Wallet },
    { path: "/exchange", name: "EXCHANGE", icon: "pe-7s-diamond", component: Wallet },
    { path: "/transaction", name: "TRANSACTION", icon: "pe-7s-next-2", component: Wallet },
    { path: "/network", name: "NETWORK", icon: "pe-7s-network", component: Wallet },
    { path: "/settings", name: "SETTINGS", icon: "pe-7s-settings", component: Wallet },
    { path: "/tools", name: "TOOLS", icon: "pe-7s-tools", component: Wallet },
    { path: "/news", name: "NEWS", icon: "pe-7s-news-paper", component: Wallet },
    { path: "/support", name: "SUPPORT", icon: "pe-7s-help1", component: Wallet },
    { path: "/profile", name: "PROFILE", icon: "pe-7s-users", component: Profile },
    
    // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    { upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
