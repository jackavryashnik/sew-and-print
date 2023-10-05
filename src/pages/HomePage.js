import React from "react";

import {
    AddProduct,
    HowToOrder,
    Printers,
    MainScreen,
    Prints,
    ProductionProcess,
    EaseSteps,
    OrderScreen,
    AboutUs,
    PrintDesign,
} from "../container";
import { Merch, Achievements, TopLine } from "../components";


export const  HomePage = () => {
    return (
        <div className="App">
            <MainScreen/>
            <Achievements />
            <EaseSteps />
            <Printers/>
            <Prints />
            <PrintDesign/>
            <Merch />
            <TopLine/>
            <AddProduct/>
            <HowToOrder />
            <ProductionProcess />
            <AboutUs />
            <OrderScreen />
        </div>
    );
}

export default HomePage;
