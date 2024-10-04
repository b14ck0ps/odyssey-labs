import React from 'react'
import ServiceSectionBtn from './components/ServiceSectionBtn'
import UIDesignDetails from './UIDesignDetails'

const ServicesList = () => {
    return (
        <div>
            <ServiceSectionBtn IsActive no={`01`} label='UI/UX Design' />
            <UIDesignDetails />
            <ServiceSectionBtn IsActive={false} no={`02`} label='Web Development' />
            <ServiceSectionBtn IsActive={false} no={`03`} label='SEO Optimization' />
        </div>
    )
}

export default ServicesList