import React from 'react';
import './AddPacckageFormStyle.scss';
import {useDispatch, useSelector} from 'react-redux';
import {changeAddFormDataAction} from "../../store/reducer";

const AddPackageForm = ({addPackage}) => {
    const dispatch = useDispatch();
    const addFormData = useSelector(state => state.addFormData);

    const handleInput = (e) => {
        const input = e.target;
        dispatch(changeAddFormDataAction({...addFormData, [input.dataset.key]: input.value}));
    };

    return (
        <tr className='add-package-form'>
            <td>
                <input className='package-id' data-key='id' value={addFormData.id} onChange={handleInput} type='text' placeholder='ID'/>
            </td>
            <td>
                <input className='package-client' data-key='client' value={addFormData.client} onChange={handleInput} type='text' placeholder='Client'/>
            </td>
            <td>
                <input className='package-pickup' data-key='pickupAddress' value={addFormData.pickupAddress} onChange={handleInput} type='text' placeholder='Address'/>
            </td>
            <td>
                <input className='package-dropoff' data-key='dropoffAddress' value={addFormData.dropoffAddress} onChange={handleInput} type='text' placeholder='Address'/>
            </td>
            <td>
                <input className='package-courier' data-key='courier' value={addFormData.courier} onChange={handleInput} type='text' placeholder='Courier'/>
            </td>
            <td>
                <button className='add-btn' onClick={addPackage}>
                    Add
                </button>
            </td>
        </tr>
    );
};

export default AddPackageForm;
