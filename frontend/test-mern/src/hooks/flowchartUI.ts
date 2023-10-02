import { SetStateAction, useState } from "react";

export function useflowchartUI() {
    const [initbox, setInixBox] = useState('')
    const [endbox, setEndBox] = useState('')
    const [arrAction, setArrActions] = useState([]);
    const [arrEdges, setArrEdges] = useState([]);
    const [arrCondition, setArr] = useState([]);


    const addInputConditions = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: "text",
                    value: "",
                    id: ''
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
                    id: ''
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

    const handleEdgesChange = (edge) => {
        setArrEdges(s => {
            return [
                ...s,
                edge
            ];
        });
        
    };


    const handlerInitBox = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInixBox(e.target.value)
    }
    const handlerEndBox = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEndBox(e.target.value)
    }

    return {
        handleChangeAction,
        handleEdgesChange,
        handleChange,
        handlerEndBox,
        handlerInitBox,
        addInputAction,
        addInputConditions,
        initbox,
        endbox,
        arrAction,
        arrCondition,
        arrEdges
    }
}