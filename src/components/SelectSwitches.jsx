import React, { useState } from 'react'

const SelectSwitches = () => {
    const [activeSwitch, setActiveSwitch] = useState(0)
    const SwitchSeriesArray = [
        {
            id: 1,
            switchName: "Switch"
        },
        {
            id: 2,
            switchName: "Switch"
        },
        {
            id: 3,
            switchName: "Switch"
        },
        {
            id: 4,
            switchName: "Switch"
        },
        {
            id: 5,
            switchName: "Switch"
        },
    ]
    return (
        <div className='flex items-center gap-3'>
            {
                SwitchSeriesArray.map(switches => (
                    <div key={switches.id} className={`border-2 border-[#d6d6d6] rounded-md w-[55px] h-[55px] flex items-center justify-center cursor-pointer bg-[#d6d6d6] ${activeSwitch === switches.id ? "border-orange-600" : ""}`} onClick={() => setActiveSwitch(switches.id)}>
                        <div className='w-[42px] h-[42px] border border-[#e1e1e1] rounded-md bg-[#e1e1e1]'></div>
                    </div>
                ))
            }
        </div>
    )
}

export default SelectSwitches