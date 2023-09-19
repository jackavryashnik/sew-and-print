import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import pages from "./pages";
import { Header } from "./components";

function App() {
    const {
        MachineryPage,
        HomePage,
        PrintsPage,
        ConsumablesPage,
        ClothesPage,
        FabricsPage,
        NotFoundPage,
        ShakerPage,
        PrinterShakerPage,
        DryerPage,
        ConveyorPage,
        A3Page,
        A4Page,
    } = pages;

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/machinery/shaker" element={<ShakerPage />} />
                <Route path="/machinery/printer_plus_shaker" element={<PrinterShakerPage />} />
                <Route path="/machinery/dryer" element={<DryerPage />} />
                <Route path="/machinery/conveyor" element={<ConveyorPage />} />
                <Route path="/machinery/A3" element={<A3Page />} />
                <Route path="/machinery/A4" element={<A4Page />} />
                <Route path="/prints" element={<PrintsPage />} />
                <Route path="/machinery" element={<MachineryPage />} />
                <Route path="/consumables" element={<ConsumablesPage />} />
                <Route path="/clothes" element={<ClothesPage />} />
                <Route path="/fabrics" element={<FabricsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
