import { InputField, Button } from '../../components'

function ContactInfoModal({ cancelModal, onClickBookFlight }) {
  return (
    <div className="bg-white w-2/5 rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-14 px-12 ">
      <div className=" flex flex-col space-y-2 mb-12">
        <h2 className="text-2xl font-semibold text-slate-600">
          Ticket booking contact information
        </h2>
        <p className="text-base text-slate-500">
          Please fill in all the information, we will contact you when needed, Check your
          information carefully before submitting.
        </p>
      </div>
      <div className="flex flex-col w-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <InputField label="First Name" name="firstname" iconName="person-outline" />
          </div>
          <div className="col-span-6">
            <InputField label="Last Name" name="lastname" iconName="person-outline" />
          </div>
        </div>
        <InputField label="Email" name="email" iconName="mail-outline" />
        <InputField label="Phone" type={'number'} iconName="call-outline" />
      </div>
      <div className="flex flex-row justify-end mt-4">
        <Button content="Cancel" variant="transparent" onClick={cancelModal} />
        <Button content="Book Flight" variant="primary" onClick={onClickBookFlight} />
      </div>
    </div>
  )
}

export default ContactInfoModal
