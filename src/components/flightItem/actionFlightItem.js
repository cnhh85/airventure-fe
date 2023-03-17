import { formatNumberWithCommas } from '../../utils/parser'
import Button from '../button'

function actionFlightItem({
  ticketStatus = null,
  price = 0,
  isFullWidth = false,
  buttonProps = [],
}) {
  return (
    <div
      className={
        isFullWidth
          ? `flex flex-row justify-between w-full`
          : `mx-auto flex flex-col justify-around`
      }
    >
      <div className="text-center flex flex-col space-y-3 my-auto">
        <h4 className="font-semibold text-slate-400">Price</h4>
        <div className="flex flex-row space-x-2 items-end m-auto">
          <h2 className="text-2xl text-slate-600 font-semibold">{formatNumberWithCommas(price)}</h2>
          <h4 className="font-semibold text-slate-400">VNĐ</h4>
        </div>
      </div>
      <div className={isFullWidth ? `flex flex-col my-auto space-y-4` : `mx-auto`}>
        {buttonProps && buttonProps.length > 0 ? (
          buttonProps.map((buttonProp, index) => {
            return (
              <Button
                key={index}
                iconName={buttonProp.iconName}
                content={buttonProp.buttonName}
                onClick={buttonProp.onClickButton}
                variant={buttonProp.variant}
              />
            )
          })
        ) : (
          <h2 className="text-2xl text-indigo-600 font-semibold">{ticketStatus}</h2>
        )}
      </div>
    </div>
  )
}

export default actionFlightItem
