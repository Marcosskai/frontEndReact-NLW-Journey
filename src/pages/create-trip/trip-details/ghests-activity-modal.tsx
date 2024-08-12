import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Jéssica White</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            jessica.white@gmail.com.br
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Dr. Rita Pachoca</span>
                        <span className="block text-sm text-zinc-400 truncate">
                        rita.pachoca@gmail.com.br
                        </span >
                    </div>
                    <CircleDashed className="text-zinc-400 size-5"/>
                </div>
            </div>
            <button className='bg-zinc-800 text-zinc-200 w-full rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 justify-center'>
                <UserCog className='szie-5'/>
                Gerenciar convidados
            </button>
        </div> 
    )
}