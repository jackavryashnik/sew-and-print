import React from "react";

import {
    AddProduct,
    HowToOrder,
    Printers,
    MainScreen,
    Prints,
    ProductionProcess,
    // OrderScreen,
} from "../container";
import { TopLine, Footer } from "../components";


export const  HomePage = () => {
    return (
        <div className="App">
            <MainScreen/>
            <TopLine />
            <Printers/>
            <Prints />
            <AddProduct/>
            <ProductionProcess />
            <HowToOrder />
            {/* <OrderScreen/> */}
            <Footer />
        </div>
    );
}

export default HomePage;
