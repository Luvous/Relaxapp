import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import ExtendedBar from './ExtendedBar'

function ToolBar() {

    const [barStatus, changeBarStatus] = useState(false)


    return (
        <div className='toolbar' onClick={() => changeBarStatus(!barStatus)}>
            {barStatus ? <ExtendedBar /> : null}
            <Icon icon="eva:options-2-fill" width="35" color='ffffff' />
        </div>
    )
}

export default ToolBar