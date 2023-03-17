import { Fragment } from 'react'

export default function Modal({ showModal, onClick, children }) {
  return (
    <Fragment>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-screen h-screen bg-black opacity-40"
              onClick={onClick}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full flex">{children}</div>
            </div>
          </div>
        </>
      ) : null}
    </Fragment>
  )
}
