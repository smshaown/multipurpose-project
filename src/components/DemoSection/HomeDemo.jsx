import React from 'react';
import { Modals } from '../BlocksSection/Modals/Modals';
import Accordion from '../../SameSection/Accordion/Accordion';
import { ShapeDoc } from '../PagesSection/About/About1/ShapeDoc';

const HomeDemo = () => {
    return (
        <div className='myContainer'>
            <Modals />
            <Accordion />
            <ShapeDoc />
        </div>
    );
};

export default HomeDemo;