import { useState } from 'react'

import { Link } from 'react-router-dom'

function Popover({ children, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleProfileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="ml-3 relative">
      <div className="flex flex-row  ">
        <button onClick={toggleProfileMenu}>{children}</button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg">
          <div className="py-1 rounded-xl bg-white shadow-xs w-48">
            {options &&
              options.map((option, key) => (
                <Link
                  key={key}
                  to={option.path}
                  className="block flex flex-row px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option.iconName && (
                    <span className="flex items-center mr-2">
                      <ion-icon size="small" name={option.iconName}></ion-icon>
                    </span>
                  )}
                  <p>{option.name}</p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Popover
