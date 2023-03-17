function Button({
  content = null,
  iconName = null,
  onClick,
  variant = 'primary',
  isWidthFull = false,
}) {
  switch (variant) {
    case 'primary':
      return (
        <button
          onClick={onClick}
          className={`flex items-center justify-center bg-primary hover:bg-primaryHover text-white font-semibold py-3 px-7 rounded-xl ${
            isWidthFull ? 'w-full' : ''
          }`}
        >
          <span>{content}</span>
          {iconName && (
            <span className="flex items-center ml-2">
              <ion-icon style={{ fontSize: '22px' }} name={iconName}></ion-icon>
            </span>
          )}
        </button>
      )
      break
    case 'outline':
      return (
        <button
          onClick={onClick}
          className={`flex items-center outline outline-1 text-slate-500 hover:text-primaryHover hover:outline-primaryHover outline-slate-300 justify-center font-semibold py-3 px-7 rounded-xl${
            isWidthFull ? 'w-full' : ''
          }`}
        >
          <span>{content}</span>
          {iconName && (
            <span className="flex items-center ml-2">
              <ion-icon style={{ fontSize: '22px' }} name={iconName}></ion-icon>
            </span>
          )}
        </button>
      )
      break
    case 'transparent':
      return (
        <button
          onClick={onClick}
          className={`flex items-center justify-cente text-slate-500 hover:text-slate-600 font-semibold py-3 px-7 rounded-xl${
            isWidthFull ? 'w-full' : ''
          }`}
        >
          <span>{content}</span>
          {iconName && (
            <span className="flex items-center ml-2">
              <ion-icon style={{ fontSize: '22px' }} name={iconName}></ion-icon>
            </span>
          )}
        </button>
      )
      break
    default:
      break
  }
}

export default Button
