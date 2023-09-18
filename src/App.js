import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import pages from "./pages";
import { Header } from "./components";


function App() {

    const {
        HomePage,
        PrintersPage,
        PrintsPage,
        ConsumablesPage,
        ClothesPage,
        FabricsPage,
        NotFoundPage,
    } = pages;

    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/printers" element={<PrintersPage />}/>
            <Route path="/prints" element={<PrintsPage />}/>
            <Route path="/consumables" element={<ConsumablesPage />}/>
            <Route path="/clothes" element={<ClothesPage />}/>
            <Route path="/fabrics" element={<FabricsPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        </>
    );
}

export default App;
