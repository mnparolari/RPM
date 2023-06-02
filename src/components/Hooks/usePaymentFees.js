import { useEffect, useState } from 'react';

const usePaymentFees = ({ totalAmount }) => {
    const [feeCount, setFeeCount] = useState(1);
    const [interestRate, setInterestRate] = useState(0);
    const [totalWithInterest, setTotalWithInterest] = useState(0);
    const [feeAmount, setFeeAmount] = useState(0);

    useEffect(() => {
        const calculateInterest = () => {
            let rate = 0;
            if (feeCount === 3) {
                rate = 0.15;
            } else if (feeCount === 6) {
                rate = 0.25;
            } else if (feeCount === 12) {
                rate = 0.35;
            }
            setInterestRate(rate);
        };
        calculateInterest();
    }, [feeCount]);

    useEffect(() => {
        const calculateTotalWithInterest = () => {
            const interest = totalAmount * interestRate;
            const total = totalAmount + interest;
            setTotalWithInterest(total);
        };
        calculateTotalWithInterest();
    }, [totalAmount, interestRate]);

    useEffect(() => {
        const calculateInstallmentAmount = () => {
            const amount = totalWithInterest / feeCount;
            setFeeAmount(amount);
        };
        calculateInstallmentAmount();
    }, [feeCount, totalWithInterest]);


    return { feeCount, setFeeCount, interestRate, totalWithInterest, feeAmount, totalAmount }

}

export default usePaymentFees