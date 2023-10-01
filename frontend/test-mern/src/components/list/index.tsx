import * as React from "react"
import { typeProps } from "./interfaces"
import EditSVG from "../../assets/editSVG"
import DeleteSVG from "../../assets/DeleteSvg"
import ButtomAction from "../buttomAction"
import CreateButton from "../buttomAction/create"
import ModalCreate from "../modal/create"


export default function List(props: typeProps) {
   

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 border-black">
            <ModalCreate open={open} onClose={handleClose}/>
            <div className="mx-auto max-w-4xl">
            <CreateButton title='Create a new Workflow' handlerClick={()=>handleClickOpen()}/>
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5 border-b-2 border-stone-100 border-solid">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Name</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Init: xxxxx - End: yyyy</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                           <ButtomAction>
                               <EditSVG />
                            </ButtomAction>
                           <ButtomAction>
                               <DeleteSVG />
                            </ButtomAction>
                        </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5 border-b-2 border-stone-100 border-solid">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">asdasd</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Init: xxxxx - End: yyyy</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                           <ButtomAction>
                               <EditSVG />
                            </ButtomAction>
                           <ButtomAction>
                               <DeleteSVG />
                            </ButtomAction>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

