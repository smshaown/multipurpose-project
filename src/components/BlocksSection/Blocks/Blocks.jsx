import React, { useState } from 'react'

export const Blocks = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    }
  

  return (
    <div className="max-w-md mx-auto mt-10">  

        {activeTab === 0 && <div>Content for Tab 100</div>}

      <div className="flex">
        <div
          className={`mr-2 px-4 py-2 cursor-pointer ${activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`mr-2 px-4 py-2 cursor-pointer ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 0 && <div>Content for Tab 1000000</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}        
      </div>
    </div>
  )
}
