import { Button } from '../../components'

function ConfirmModal({ cancelModal, onClickBookFlight }) {
  return (
    <div className="bg-white max-w-lg rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-12 px-9 ">
      <div className=" flex flex-col space-y-3 mb-8">
        <h2 className="text-2xl font-semibold text-slate-600">Confirm cancel flight booking</h2>
        <p className="text-base text-slate-500">
          Are you sure want to cancel booking this flight, this action can not be undone.
        </p>
      </div>
      <div className="flex flex-row justify-end mt-3">
        <Button content="Back" variant="transparent" onClick={cancelModal} />
        <Button content="Confirm Cancel" variant="primary" onClick={onClickBookFlight} />
      </div>
    </div>
  )
}

export default ConfirmModal
