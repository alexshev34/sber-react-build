import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Testing from './components/Testing/Testing';

const useRoutes = isAuthenticated => {
    if(isAuthenticated){
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
            </Switch>
            <Footer/>
        </>
        )
    }
    return(
        <>
            <Header/>
            <MainPage/>
            <Footer/>
        </>
    )
}

export default useRoutes;