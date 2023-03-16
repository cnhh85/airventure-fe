import { formatNumberWithCommas } from '../../utils/parser'
import Button from '../button'

function ActionFlightList({
  price = 0,
  isFullWidth = false,
  buttonName = 'button1',
  onClickButton,
  buttonName2 = 'button2',
  onClickButton2,
  iconName = null,
  iconName2 = null,
}) {
  if (!isFullWidth) {
    return (
      <div className="mx-auto flex flex-col justify-around">
        <div className="text-center flex flex-col space-y-3">
          <h4 className="font-semibold text-slate-400">Price</h4>
          <div className="flex flex-row space-x-2 items-end m-auto">
            <h2 className="text-2xl text-slate-600 font-semibold">
              {formatNumberWithCommas(price)}
            </h2>
            <h4 className="font-semibold text-slate-400">VNĐ</h4>
          </div>
        </div>
        <div className="mx-auto">
          <Button iconName={iconName} content={buttonName} onClick={onClickButton} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="my-auto flex flex-row justify-between w-full">
        <div className="text-center my-auto flex flex-col space-y-3">
          <h4 className="font-semibold text-slate-400">Price</h4>
          <div className="flex flex-row space-x-2 items-end m-auto">
            <h2 className="text-2xl text-slate-600 font-semibold">
              {formatNumberWithCommas(price)}
            </h2>
            <h4 className="font-semibold text-slate-400">VNĐ</h4>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            iconName={iconName}
            content={buttonName}
            variant="outline"
            onClick={onClickButton}
          />
          <Button
            iconName={iconName2}
            variant="primary"
            content={buttonName2}
            onClick={onClickButton2}
          />
        </div>
      </div>
    )
  }
}

export default ActionFlightList
