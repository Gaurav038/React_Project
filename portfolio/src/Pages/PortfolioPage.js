import React, {useState} from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Title from '../Components/Title'
import Portfolios from '../Data/Portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButton  = ['All', ...new Set(Portfolios.map((item)=> item.category) ) ]

export default function PortfolioPage() {
    const [menuItem, setMenuItem] = useState(Portfolios);
    const [button, setButton] = useState(allButton);
 
    const filter = (button)=>{
        if(button==='All'){
            setMenuItem(Portfolios)
            return
        }
        const filteredData = Portfolios.filter((item)=> item.category === button)
        setMenuItem(filteredData);
    }

    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'}/>
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}
