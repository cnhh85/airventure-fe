import { Fragment } from 'react'

function RadioButton({ onClick, onChange, name, value, checked, id }) {
  return (
    <Fragment>
      <div className="flex items-center">
        <input
          id={id}
          type="radio"
          value={value}
          name={name}
          onClick={onClick}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          checked={checked === value}
        />
        <label htmlFor={id} className="w-full py-4 ml-2 font-medium text-slate-700">
          {value}
        </label>
      </div>
    </Fragment>
  )
}

export default RadioButton
