
interface propsType {
    handlerClick?: any;
    children?:JSX.Element;
}
export default function ButtomAction({handlerClick,children}:propsType){

    return (
        <p 
        onClick={handlerClick}
        className="text-xs leading-6 text-gray-500 hover:text-red-900">
           {children}
        </p>
    )
}