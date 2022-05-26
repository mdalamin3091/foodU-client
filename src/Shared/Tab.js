import React, {useState} from 'react'

const Tab = ({openTab, setOpenTab}) => {
  
  return (
    <>
        <div className="tab-wrapper flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            className={
              openTab === "Pizza"
                ? "btn-tab bg-primary border-primary text-white"
                : "btn-tab"
            }
            onClick={() => setOpenTab("Pizza")}
          >
            Pizza
          </button>
          <button
            className={
              openTab === "Sushi"
                ? "btn-tab bg-primary border-primary text-white"
                : "btn-tab"
            }
            onClick={() => setOpenTab("Sushi")}
          >
            Sushi
          </button>
          <button
            className={
              openTab === "Salats"
                ? "btn-tab bg-primary border-primary text-white"
                : "btn-tab"
            }
            onClick={() => setOpenTab("Salats")}
          >
            Salats
          </button>
          <button
            className={
              openTab === "Burger"
                ? "btn-tab bg-primary border-primary text-white"
                : "btn-tab"
            }
            onClick={() => setOpenTab("Burger")}
          >
            Burger
          </button>
          <button
            className={
              openTab === "Dersest"
                ? "btn-tab bg-primary border-primary text-white"
                : "btn-tab"
            }
            onClick={() => setOpenTab("Dersest")}
          >
            Dersest
          </button>
        </div>
    </>
  )
}

export default Tab