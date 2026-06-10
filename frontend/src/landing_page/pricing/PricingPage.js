import React from 'react';
import Hero from './Hero';
import BrokerageTabs from './BrokerageTabs';
import AccountCharges from './AccountCharges';
import DematAMC from './DematAMC';
import ValueAddedServices from './ValueAddedServices';
import ChargesExplained from './ChargesExplained';

function PricingPage() {
    return (
        <div>
            <Hero />
            <BrokerageTabs />
            <AccountCharges />
            <DematAMC />
            <ValueAddedServices />
            <ChargesExplained />
        </div>
    );
}

export default PricingPage;
