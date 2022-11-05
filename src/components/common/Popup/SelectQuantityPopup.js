import { Modal, Select } from "antd";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

const {Option} = Select;

const Options = [0,1,2,3,4,5,6,7,8,9,10];

const SelectQuantityPopup = ({popup,setPopup,item ,cart, setCart})=>{
    const [quantity,setQuantity] = useState(0);

    useEffect(()=>{
        setQuantity(cart?.items?.find((x)=>x?.id === item?.id)?.quantity || 0);
    },[cart])

    const handleAdd = ()=>{
        const exist = cart?.items?.findIndex((x)=>x?.id === item?.id);

        if(exist !== -1 && exist !== undefined){
            let itemsWithoutObj = cart?.items?.filter((x)=>x?.id !== item?.id);

            let amt = 0;
            itemsWithoutObj?.map((x)=>amt+=(x?.price * x?.quantity));
            amt += (item?.price * quantity);

            itemsWithoutObj?.push({...item, quantity, total_amt: amt})
            setCart({...cart, items: itemsWithoutObj});
        }
        else{
            let obj = {...item,quantity};

            let amt = 0;
            cart?.items?.map((x)=>amt+=(x?.price * x?.quantity));
            amt += (item?.price * quantity);

            setCart({...cart, items:[ ...cart?.items, obj ], total_amt: amt});
        }
    }

    console.log('cart ->',cart);

    return (
        <Modal
            open={popup}
            onCancel={()=>setPopup(false)}
            closable={false}
            centered
            okText='Submit'
            onOk={()=>{
                handleAdd();
                setPopup(false);
            }}
        >
            <div className="quantity_container">
                <p className="quantity_label">Quantity</p>

                <Select
                value={quantity}
                    className='quantity_select'
                    onChange={(e)=>setQuantity(e)}
                >
                    {Options?.map((x,i)=>(
                        <Option key={i} value={x}>{x}</Option>
                    ))}
                </Select>
            </div>
        </Modal>
    )
}

export default SelectQuantityPopup;