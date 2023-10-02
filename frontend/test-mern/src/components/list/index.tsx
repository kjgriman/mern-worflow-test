import * as React from "react"
import EditSVG from "../../assets/editSVG"
import DeleteSVG from "../../assets/DeleteSvg"
import ButtomAction from "../buttomAction"
import CreateButton from "../buttomAction/create"
import ModalCreate from "../modal/create"
import Loading from "../loading"
import { Suspense, useState } from "react"
import {apiData} from "../../services"

// Render as you fetch

export default function List() {

    const { data } = apiData.read();
    
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState(false);
    const handleClickOpenEdit = (item) => {
        setOpen(true);
        setSelected(item)
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    return (
        <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 border-black">
            <ModalCreate open={open} onClose={handleClose} />
            {/* <ModalEdit open={openEdit} onClose={handleCloseEdit} selected={selected} /> */}
            <div className="mx-auto max-w-4xl">
                <CreateButton title='Create a new Workflow' handlerClick={() => handleClickOpen()} />
                <Suspense fallback={<Loading />}>
                    <ul role="list" className="divide-y divide-gray-100">
                        {data ? data.map((item: any) => (
                            <li className="flex justify-between gap-x-6 py-5 border-b-2 border-stone-100 border-solid">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Init: {item.start} - End: {item.end}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <ButtomAction handlerClick={() => handleClickOpenEdit(item)}>
                                        <EditSVG />
                                    </ButtomAction>
                                    <ButtomAction>
                                        <DeleteSVG />
                                    </ButtomAction>
                                </div>
                            </li>
                        )): 
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <   span className="font-medium">Error!</span> Failed to fetch
                        </div>
                        }
                    </ul>
                </Suspense>
            </div>
        </div>
    )
}

