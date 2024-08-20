// src/ContextProvider.tsx
import React, { createContext, useState, useContext } from "react";
import { langDataEN, langDataMM, alertsEN, alertsMM, dLabelsEN, dLabelsMM } from "./LanguageData";

export type Language = "EN" | "MM";

interface ContextProps {
    language: Language;
    langData: any;
    alerts: any;
    dLabels: any;
    toggleLanguage: (changeTo: Language) => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const useLanguageContext = (): ContextProps => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useLanguageContext must be used within a ContextProvider");
    }
    return context;
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem("elibLang") as Language) || "MM"
    );
    const [langData, setLangData] = useState(
        language === "EN" ? langDataEN : langDataMM
    );
    const [alerts, setAlerts] = useState(language === "EN" ? alertsEN : alertsMM);
    const [dLabels, setDLabels] = useState(language === "EN" ? dLabelsEN : dLabelsMM);

    const toggleLanguage = (changeTo: Language) => {
        if (changeTo === "MM") {
            setLanguage("MM");
            localStorage.setItem("elibLang", "MM");
            setLangData(langDataMM);
            setAlerts(alertsMM);
            setDLabels(dLabelsMM);
        } else {
            setLanguage("EN");
            localStorage.setItem("elibLang", "EN");
            setLangData(langDataEN);
            setAlerts(alertsEN);
            setDLabels(dLabelsEN);
        }
    };

    return (
        <Context.Provider value={{ language, langData, alerts, dLabels, toggleLanguage }}>
            {children}
        </Context.Provider>
    );
};
