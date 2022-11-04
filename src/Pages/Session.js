import React from 'react';
import Navigations from '../Shareds/Navigations';

const Session = () => {
    return (
        <div>
            <Navigations></Navigations>
            <main className="pt-5 mt-3">
                <div className="continer-fluid">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h2 >  <i className="fas fa-user"></i>  Manage Session</h2>
                        </div>
                        <div>
                            <button className='d-flex btn'><p className='mx-3'> <i "fas fa-plus"></i> Add Session</p></button>
                        <p>test</p>
                    </div>
                </div>
        </div>
            </main >
        </div >
    );
};

export default Session;