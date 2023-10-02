import { Fragment, SetStateAction, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FlowChartView } from '../../flowchart';

interface SimpleDialogProps {
    open: boolean;
    onClose: any;
    selected?: any;
}

export default function ModalEdit(props: SimpleDialogProps) {
    
    
    const { onClose, open,selected } = props;
    const cancelButtonRef = useRef(null)
    console.log('selected',selected);

    const [initbox, setInixBox] = useState('')
    const [endbox, setEndBox] = useState('')
    const [arr, setArr] = useState([]);
    const [arrAction, setArrActions] = useState([]);

    const addInput = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: "text",
                    value: "",
                    id:''
                }
            ];
        });
    };
    const addInputAction = () => {
        setArrActions(s => {
            return [
                ...s,
                {
                    type: "text",
                    value: "",
                    id:''
                }
            ];
        });
    };

    const handleChange = (e: { preventDefault: () => void; target: { id: any; value: any; }; }) => {
        e.preventDefault();
        const index = e.target.id.split('_');
        setArr(s => {
            const newArr = s.slice();
            newArr[index[1]].value = e.target.value;
            newArr[index[1]].id = e.target.id;
            return newArr;
        });
    };
    const handleChangeAction = (e: { preventDefault: () => void; target: { id: any; value: any; }; }) => {
        e.preventDefault();
        const index = e.target.id.split('_');
        setArrActions(s => {
            const newArrActions = s.slice();
            newArrActions[index[1]].value = e.target.value;
            newArrActions[index[1]].id = e.target.id;
            return newArrActions;
        });
    };


    const handlerInitBox = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInixBox(e.target.value)
    }
    const handlerEndBox = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEndBox(e.target.value)
    }

    

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-full overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-solid border-b-2">
                                    <div className="sm:flex sm:items-start ">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                            +
                                        </div>
                                        <div className=" mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className=" text-base font-semibold leading-6 text-gray-900">
                                                Create a new Workflow
                                            </Dialog.Title>
                                            <div className="">
                                                <input type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Name" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-solid border-b-2">
                                    <div className="sm:flex sm:items-start ">
                                        <div className=" flex">
                                            <aside className=" gap-5 flex flex-col items-baseline  top-0 left-0 z-40 w-64  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                                                <button
                                                    type="button"
                                                    disabled={initbox ? false : true}
                                                    className="disabled:bg-gray-200 inline-flex w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                    onClick={addInput}
                                                >
                                                    + Conditions
                                                </button>
                                                <button
                                                    type="button"
                                                    disabled={initbox ? false : true}
                                                    className="disabled:bg-gray-200 inline-flex w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                    onClick={addInputAction}
                                                >
                                                    + Actions
                                                </button>
                                            </aside>
                                            <div className="">
                                                <div className="">
                                                    <input type="text"
                                                        value={initbox}
                                                        onChange={handlerInitBox}
                                                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="init Box" />
                                                </div>
                                                <div className="mt-2">
                                                    <input type="text"
                                                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="end Box"
                                                        value={endbox}
                                                        onChange={handlerEndBox}
                                                    />
                                                </div>
                                                {/* dinamyc input  */}
                                                Conditions
                                                {arr.map((item:any, i) => {
                                                    return (
                                                        <div className="my-2">
                                                            <input
                                                                onChange={handleChange}
                                                                value={item.value}
                                                                id={`condition_${i}`}
                                                                key={`condition_key_${i}`}
                                                                type={item.type}
                                                                placeholder={`condition Box ${i}`}
                                                                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                Actions
                                                {arrAction.map((item:any, i) => {
                                                    return (
                                                        <div className="my-2">
                                                            <input
                                                                onChange={handleChangeAction}
                                                                value={item.value}
                                                                id={`action_${i}`}
                                                                key={`action_key_${i}`}
                                                                type={item.type}
                                                                placeholder={`action Box ${i}`}
                                                                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    );
                                                })}

                                                <FlowChartView init={initbox} end={endbox} conditions={arr} actions={arrAction} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                        onClick={() => onClose()}
                                    >
                                        Create
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 hover:bg-red-500 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => onClose()}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}