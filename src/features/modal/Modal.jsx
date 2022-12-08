import React from 'react'

const Modal = (setModalOpen) => {
  return (
    <>
      <div>Employee Created !!</div>
      <button onClick={() => setModalOpen(false)}>close</button>
    </>
  )
}

export default Modal
