import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { Button } from '../Button/Button';

export const PriceCard = () => {
  return (
    <div>
        <header>
            <h1><span>$</span> <span>199</span><sub>/yr</sub> </h1>
            <h3>Premium Plan</h3>
        </header>
        <div>
            <li>< BiCheck /> <span> 100K </span>API Access</li>
            <li>< BiCheck /> <span> 200MB </span>200MB Storage</li>
            <li>< BiCheck /> <span> Weekly </span>Reports</li>
            <li>< BiCheck /> <span> 7/24 </span>Support</li>
        </div>
        <Button button="Choose Plan" />
    </div>
  )
}
