import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {

    const [value1, setValue1] = useState(0)   
    const inc = useCallback(function (x) {
        setValue1(curr => curr + x)
    }, [setValue1])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">
                    {value1}
                </span>
                <div>
                   <UseCallbackButtons inc={inc}></UseCallbackButtons>
                </div>
            </div>

        </div>
    )
}

export default UseCallback