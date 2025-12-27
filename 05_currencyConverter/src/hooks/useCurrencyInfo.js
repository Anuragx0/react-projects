import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (!currency) return;
        
        // Mock currency data as fallback (always available)
        const mockData = {
            usd: 1,
            inr: 83.12,
            eur: 0.92,
            gbp: 0.79,
            jpy: 149.34,
            aud: 1.53,
            cad: 1.36,
            chf: 0.88,
            cny: 7.24,
            sek: 10.36,
            nzd: 1.63,
            krw: 1319.5,
            sgd: 1.34,
            hkd: 7.83,
            nok: 10.68,
            mxn: 17.08,
            brl: 4.97,
            zar: 18.32,
            rub: 92.5,
            aed: 3.67,
            thb: 34.25
        };

        // Calculate rates relative to the selected currency
        const baseRate = mockData[currency.toLowerCase()] || 1;
        const calculatedRates = {};
        
        Object.keys(mockData).forEach(curr => {
            calculatedRates[curr] = mockData[curr] / baseRate;
        });

        setData(calculatedRates);

        // Optionally try to fetch real data, but use mock as fallback
        /*
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.rates) {
                    const lowercaseRates = {};
                    Object.keys(res.rates).forEach(key => {
                        lowercaseRates[key.toLowerCase()] = res.rates[key];
                    });
                    setData(lowercaseRates);
                }
            })
            .catch((error) => {
                console.log("Using mock data");
                setData(calculatedRates);
            })
        */

    }, [currency])

    return data;
}


export default useCurrencyInfo ;