import React from "react";
import { Router } from "@reach/router";
import AuthGuard from "../auth/AuthGuard";
import { PageProps } from "gatsby";
import LoginPage from "../components/AuthPages/LoginPage";
import RegisterPage from "../components/AuthPages/RegisterPage";
import AccountPage from "../components/Profile/Account";
import ForgetPasswordPage from "../components/AuthPages/ForgetPasswordPage";
import ResetPasswordPage from "../components/AuthPages/ResetPasswordPage";
import TradeSummaryPage from "../components/Trades/TradeSummaryPage";
import ReferralPage from "../components/pages/Referrals/ReferralPage";
import Drawer from "../components/pages/Dashboard/Drawer";
import ActivityPage from "../components/pages/Activities/ActivityPage";
import BusinessCenterPage from "../components/pages/FundingOptions/BusinesCenterPage";
import SingleFundingOptionPage from "../components/pages/FundingOptions/SingleFundingOptionPage";
import SelectPackPage from "../components/pages/Packs/SelectPackPage";
import RewardsPage from "../components/pages/Rewards/RewardsPage";

const App = ({ path, ...props }: PageProps) => (
  <Router basepath="/app">
    <AuthGuard path="/drawer" component={Drawer} {...props} />
    <AuthGuard path="/account" component={AccountPage} {...props} />
    <AuthGuard path="/business-center" component={BusinessCenterPage} {...props} />
    <AuthGuard path="/investment/:investmentID" component={SingleFundingOptionPage} {...props} />
    <AuthGuard path="/packs" component={SelectPackPage} {...props} />
    <AuthGuard path="/trade-summary" component={TradeSummaryPage} {...props} />
    <AuthGuard path="/rewards" component={RewardsPage} {...props} />
    <AuthGuard path="/activities" component={ActivityPage} {...props} />
    <AuthGuard path="/referrals" component={ReferralPage} {...props} />
    <RegisterPage path="/signup" {...props} />
    <LoginPage path="/login" {...props} />
    <ForgetPasswordPage path="/forgot-password" {...props} />
    <ResetPasswordPage path="/reset-password" {...props} />
  </Router>
);

export default App;
