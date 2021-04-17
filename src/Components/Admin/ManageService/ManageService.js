import React, { useEffect, useState } from 'react';
import ManagePackageCard from './ManagePackageCard/ManagePackageCard';

const ManageService = () => {

    const [packages, setPackages]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])

    console.log(packages)
    return (
        <table>
            <thead>
                <td>Package</td>
                <td>Price</td>
                <td>Date</td>
                <td>Action</td>
            </thead>

            { 
                packages.map(info =><ManagePackageCard info={info}></ManagePackageCard>)
            }
        </table>
    );
};

export default ManageService;