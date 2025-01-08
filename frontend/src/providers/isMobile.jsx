import React, { createContext, useState, useEffect, useContext } from "react";

const DeviceContext = createContext();

const isMobile = () => window.innerWidth <= 768;

export const DeviceProvider = ({ children }) => {
    const [isMobileDevice, setIsMobileDevice] = useState(isMobile());

    useEffect(() => {
        const handleResize = () => {
            setIsMobileDevice(isMobile());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobileDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = () => {
    const context = useContext(DeviceContext);
    return context;
};
