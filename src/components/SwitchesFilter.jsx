import { AnimatePresence,motion as m } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSeriesFilter } from '../redux/KeyboardsFilterSlice'

const SwitchesFilter = () => {
  const [series, setSeries] = useState(true)
  const dispatch = useDispatch()

  const sendSeries = (e) =>{
    dispatch(setSeriesFilter({
      isChecked:e.target.checked,
      series:e.target.id
    }))
  }
  return (
    <div className="min-w-[350px] w-[350px] border rounded-md h-full p-5">
    <h2
      className="flex items-center justify-between mb-2 cursor-pointer"
      onClick={() => setSeries(!series)}
    >
      Series
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-4 h-4 text-[#999] duration-300 ${
          series ? "rotate-180" : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </h2>
    <AnimatePresence>
      {series && (
        <m.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="overflow-hidden"
        >
          <div className="container_checkbox">
            <input type="checkbox" id="Gateron G Pro" onChange={sendSeries} />
            <span className="checkmark"></span>
            <label htmlFor="Gateron G Pro">Gateron G Pro</label>
          </div>
          <div className="container_checkbox">
            <input type="checkbox" id="Akko Cs Crystal" onChange={sendSeries} />
            <span className="checkmark"></span>
            <label htmlFor="Akko Cs Crystal">Akko Cs Crystal</label>
          </div>
          <div className="container_checkbox">
            <input type="checkbox" id="Akko CS Piano" onChange={sendSeries}  />
            <span className="checkmark"></span>
            <label htmlFor="Akko CS Piano">Akko CS Piano</label>
          </div>
          <div className="container_checkbox">
            <input type="checkbox" id="Sakura" onChange={sendSeries}  />
            <span className="checkmark"></span>
            <label htmlFor="Sakura">Sakura</label>
          </div>
          <div className="container_checkbox">
            <input type="checkbox" id="Gateron KS-22" onChange={sendSeries}  />
            <span className="checkmark"></span>
            <label htmlFor="Gateron KS-22">Gateron KS-22</label>
          </div>
          <div className="container_checkbox">
            <input type="checkbox" id="Glorious Lynx" onChange={sendSeries}  />
            <span className="checkmark"></span>
            <label htmlFor="Glorious Lynx">Glorious Lynx</label>
          </div>
          <div className="container_checkbox mb-1">
            <input type="checkbox" id="Glorious Panda" onChange={sendSeries}  />
            <span className="checkmark"></span>
            <label htmlFor="Glorious Panda">Glorious Panda</label>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  </div>
  )
}

export default SwitchesFilter