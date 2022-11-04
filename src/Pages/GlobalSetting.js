import React from 'react';
import Navigations from '../Shareds/Navigations';

const GlobalSetting = () => {
    return (
        <div>
            <Navigations></Navigations>
            <main className="pt-5 mt-3">
                <div className="continer-fluid">
                    <h2>this is global setting</h2>
                </div>
            </main>
        </div>
    );
};

export default GlobalSetting;