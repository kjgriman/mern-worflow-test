import {typeProps} from './interfaces'

export default function CreateButton(props:typeProps){
    const {title, handlerClick} = props
    return (
        
        <button
        onClick={handlerClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title}     
         </button>
    )
}