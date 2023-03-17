import { Fragment } from 'react'

import { Navbar, InputField, Button } from '../../../components'

export const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container my-10 rounded-xl bg-white w-[766px] m-auto p-16 ">
        <div className="flex flex-col w-3/4">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
            User account settings
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Update and manage your personal information for a better experience in connecting with
            AirVenture.
          </p>
        </div>
        <div className="flex flex-row my-8 space-x-16">
          <div className="flex flex-col w-4/6">
            <InputField label="Avatar" name="avatar" iconName="camera-outline" />
            <div className="flex flex-row space-x-4">
              <InputField label="Last Name" name="name" iconName="person-outline" />
              <InputField label="First Name" name="username" iconName="person-outline" />
            </div>
            <InputField label="Email" name="email" iconName="mail-outline" />
            <InputField label="Phone" type={'number'} iconName="call-outline" />
          </div>
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="h-28 w-28 m-2 rounded-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="flex flex-row">
          <Button content="Save Change" variant="primary" />
          <Button content="Cancel" variant="transparent" />
        </div>
      </div>
    </Fragment>
  )
}
export default Profile
