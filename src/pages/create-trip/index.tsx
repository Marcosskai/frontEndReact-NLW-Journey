import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGhestsModal } from './invite-ghests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'

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
   <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center gap-3">

      <div className='flex items-center gap-2 flex-1'>
           <MapPin className='size-5 text-zinc-400' />
          <input disabled={isGhestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
      </div>

      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400' />
        <input disabled={isGhestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
      </div>
 
      <div className='w-px h-6 bg-zinc-800' />

      {isGhestsInputOpen ? (
        <button onClick={closeGhestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
          Alterar Local/data
          <Settings2 className='szie-5'/>
          </button>
      ): (
        <button onClick={openGhestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
          Continuar
          <ArrowRight className='size- 5' />
        </button> 
      )}

  </div>

    {isGhestsInputOpen && (

         <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center gap-3">

         <button type='button' onClick={openGhestsModal} className='flex items-center gap-2 flex-1'>
              <UserRoundPlus className='size-5 text-zinc-400' />
              {emailsToInvite.length > 0 ? (
                <span className='text-zinc-100 text-lg flex-1 text-left'>
                  {emailsToInvite.length} pessoa(s) convidada(s)
                </span>
              ) : (
                <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
              )}
         </button>
    
         <div className='w-px h-6 bg-zinc-800' />
   
       <button onClick={openConfirmTripModal}className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
         Confirmar Viagem
         <ArrowRight className='size- 5' />
       </button>
   
     </div>

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