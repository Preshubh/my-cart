import React from 'react'

import Loader from './loader2.gif'

const LazyloadingData = () => {

    return (
        <>
            <img src={Loader} style={{ position: "absolute", top: "300px", left: "650px", width: "200px" }} alt="loading.." />
            
        </>
    )
}

export default LazyloadingData