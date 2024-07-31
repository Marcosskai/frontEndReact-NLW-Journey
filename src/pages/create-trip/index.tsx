import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGhestsModal } from './invite-ghests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './trip-details/steps/destination-and-date-step'
import { InviteGuestStep } from './trip-details/steps/invite-guests-step'

export function CreateTripPage() {

  const navigate = useNavigate()

  const [ isGhestsInputOpen, setIsGhestsInputOpen ] = useState(false)
  const [ isGhestsModalOpen, setIsGhestsModalOpen ] = useState(false)
  const [ isConfirmTripModalOpen, setIsConfirmTripModalOpen ] = useState(false)

  const [ emailsToInvite, setEmailsToInvite ] = useState([
    'diego@gmail.com'
  ])



  function openGhestsInput() {
    setIsGhestsInputOpen(true)
  }

  function closeGhestsInput() {
    setIsGhestsInputOpen(false)
  }

  function openGhestsModal() {
    setIsGhestsModalOpen(true)
  }

  function closeGhestsModal() {
    setIsGhestsModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function createTrip (event: FormEvent<HTMLFormElement>) {
event.preventDefault()

    navigate('/trips/123')
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes (email)){
      return
    }

    
    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    
    setEmailsToInvite(newEmailList)
  }

  return (

  <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
    <div className="max-w-3xl w-full px-6 text-center space-y-10">
    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
    
    <div className='space-y-4'>
   <DestinationAndDateStep
    closeGhestsInput={closeGhestsInput}
    isGhestsInputOpen={isGhestsInputOpen}
    openGhestsInput={openGhestsInput} 
   />

    {isGhestsInputOpen && (
      <InviteGuestStep 
      emailsToInvite={emailsToInvite}
      openConfirmTripModal={openConfirmTripModal}
      openGhestsModal={openGhestsModal}
      />
    )}
    </div>

   <p className="texts-sm text-zinc-500">
    Ao planejar sua viagem pela plann.er você automaticamente concorda  <br />
    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
    </p>

  </div>

    {isGhestsModalOpen &&  (
      <InviteGhestsModal 
      
       emailsToInvite={emailsToInvite}
       addNewEmailToInvite={addNewEmailToInvite}
       closeGhestsModal={closeGhestsModal}
       removeEmailFromInvites={removeEmailFromInvites}
       
       />
    )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
        closeConfirmTripModal={closeConfirmTripModal}
        createTrip={createTrip}
        />
      )}

  </div>
  )
}