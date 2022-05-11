import React from "react";
import { Router } from "@reach/router";
import AuthGuard from "../auth/AuthGuard";
import { PageProps } from "gatsby";
import LoginPage from "../components/AuthPages/LoginPage";
import RegisterPage1 from "../components/AuthPages/RegisterPage1";
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
import RegisterPage2 from "../components/AuthPages/RegisterPage2";
import Page404 from "../components/pages/NotFound/404";
import ProfilePage from "../components/Profile";

const App = ({ path, ...props }: PageProps) => (
  <Router basepath="/app">
    <AuthGuard path="/drawer" component={Drawer} {...props} />
    <AuthGuard path="/profile" component={ProfilePage} {...props} />
    <AuthGuard path="/profile/settings" component={AccountPage} {...props} />
    <AuthGuard
      path="/business-center"
      component={BusinessCenterPage}
      {...props}
    />
    <AuthGuard
      path="/investment/:investmentID"
      component={SingleFundingOptionPage}
      {...props}
    />
    <AuthGuard path="/packs" component={SelectPackPage} {...props} />
    <AuthGuard path="/trade-summary" component={TradeSummaryPage} {...props} />
    <AuthGuard path="/rewards" component={RewardsPage} {...props} />
    <AuthGuard path="/activities" component={ActivityPage} {...props} />
    <AuthGuard path="/referrals" component={ReferralPage} {...props} />
    <RegisterPage1 path="/register" {...props} />
    <RegisterPage2 path="/register-complete" {...props} />
    <LoginPage path="/login" {...props} />
    <ForgetPasswordPage path="/forgot-password" {...props} />
    <ResetPasswordPage path="/reset-password" {...props} />
    <AuthGuard path="*" component={Page404} {...props} />
  </Router>
);

export default App;
