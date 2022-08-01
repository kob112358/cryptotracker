import React, {useState} from 'react';
import NewTransactionForm from './NewTransactionForm';

const NewTransaction = (props) => {
    const [addNewScreen, setAddNewScreen] = useState(false);

    const addNewToggle = () => {
        setAddNewScreen(!addNewScreen);
    }

    return (
        <div>
            <button onClick={addNewToggle}>Add new transaction</button>
            {addNewScreen && <NewTransactionForm onAddNewTransaction={props.addNewTransaction} addNewToggle={addNewToggle}/>}
        </div>
    );
};

export default NewTransaction;