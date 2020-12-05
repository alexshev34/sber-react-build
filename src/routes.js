import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MessageCustomer from './components/MessageCustomer/MessageCustomer';
import HeaderCustomer from './components/Header/HeaderCustomer/HeaderCustomer';
import SpecialistOrders from './components/SpecialistOrders/SpecialistOrders';
import Logout from './components/Header/HeaderCustomer/Logout/Logout';
import SpecialistProfile from './components/SpecialistProfile/SpecialistProfile';
import HistoryMoney from './components/SpecialistProfile/HistoryMoney/HistoryMoney';
import SpecialistPortfolio from './components/SpecialistProfile/SpecialistPortfolio/SpecialistPortfolio';
import PortfolioEdit from './components/SpecialistProfile/SpecialistPortfolio/PortfolioEdit/PortfolioEdit';
import SpecialistReviews from './components/SpecialistProfile/SpecialistReviews/SpecialistReviews';
import PayoutMoney from './components/SpecialistProfile/PayoutMoney/PayoutMoney';
import Arbitration from './components/SpecialistProfile/Arbitration/Arbitration';
import HeaderExecutor from './components/Header/HeaderExecutor/HeaderExecutor';
import ExecutorProfile from './components/ExecutorProfile/ExecutorProfile';
import AddOrder from './components/ExecutorProfile/AddOrder/AddOrder';
import ExecutorOrders from './components/ExecutorProfile/ExecutorOrders/ExecutorOrders';
import ExecutorMessage from './components/ExecutorProfile/ExecutorMessage/ExecutorMessage';
import LogoutExecutor from './components/ExecutorProfile/LogoutExecutor/LogoutExecutor';
import HistoryExecutor from './components/ExecutorProfile/HistoryExecutor/HistoryExecutor';
import SettingsExecutorProfile from './components/ExecutorProfile/SettingsExecutorProfile/SettingsExecutorProfile';
import DepositMoney from './components/ExecutorProfile/DepositMoney/DepositMoney';
import ReviewsExecutor from './components/ExecutorProfile/ReviewsExecutor/ReviewsExecutor';
import AllOrder from './components/ExecutorProfile/AllOrder/AllOrder';

const useRoutes = isAuthenticated => {
    if(localStorage.getItem('client')){
        return(
           <>
            <HeaderExecutor/>
            <Switch>
                <Route exact path="/profile" render={() => <ExecutorProfile/>}/>
                <Route exact path="/new-order" render={() => <AddOrder/>}/>
                <Route exact path="/my-orders" render={() => <ExecutorOrders/>}/>
                <Route exact path="/my-message" render={() => <ExecutorMessage/>}/>
                <Route exact path="/logout" render={() => <LogoutExecutor/>}/>
                <Route exact path="/my-history" render={() => <HistoryExecutor/>}/>
                <Route exact path="/settings" render={() => <SettingsExecutorProfile/>}/>
                <Route exact path="/deposit-money" render={() => <DepositMoney/>}/>
                <Route exact path="/my-reviews" render={() => <ReviewsExecutor/>}/>
            </Switch>
            <Footer/>
        </>
        );
    }
    if(localStorage.getItem('specialist')){
        return(
        <>
            <HeaderCustomer/>
            <Switch>
                <Route exact path="/" render={() => <SpecialistProfile/>}/>
                <Route exact path="/settings" render={() => <Dashboard/>}/>
                <Route exact path="/message" render={() => <MessageCustomer/>}/>
                <Route exact path="/my-orders" render={() => <SpecialistOrders/>}/>
                <Route exact path="/logout" render={() => <Logout/>}/>
                <Route exact path="/profile" render={() => <SpecialistProfile/>}/>
                <Route exact path="/my-history" render={() => <HistoryMoney/>}/>
                <Route exact path="/portfolio" render={() => <SpecialistPortfolio/>}/>
                <Route exact path="/portfolio-add" render={() => <PortfolioEdit/>}/>
                <Route exact path="/my-reviews" render={() => <SpecialistReviews/>}/>
                <Route exact path="/payout-money" render={() => <PayoutMoney/>}/>
                <Route exact path="/arbitration" render={() => <Arbitration/>}/>
                <Route exact path="/all-order" render={() => <AllOrder/>}/>
                <Redirect to="/" />
            </Switch>
            <Footer/>
        </> 
    );
    }
    else{
        return(
            <>
                <Header/>
                <MainPage/>
                <Footer/>
            </>
        );
    }
}

export default useRoutes;