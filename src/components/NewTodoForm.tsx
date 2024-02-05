import React, {useState} from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props)=> {

    const [description, setDescription]= useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description,assigned);
            setAssigned('');
            setDescription('');
        }
    }

    // const descriptionChange = (event) =>{
    //     console.log('description', event.target.value);
    //     setDescription(event.target.value);
    // }
    // const assignedChange = (event) =>{
    //     console.log('assigned',event.target.value);
    //     setAssigned(event.target.value);
    // }
    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned </label><br/>
                    <input 
                    type='text' 
                    className='form-contol'
                     required
                     onChange={e => setAssigned(e.target.value)}
                     value={assigned}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description </label><br/> 
                    <textarea
                    className='form-contol' 
                    rows={3} 
                    required
                    onChange={e => setDescription(e.target.value)}
                    value={description}></textarea>
                </div>
                <button 
                    type='button' 
                    className='bt btn-primary mt-3'
                     onClick={submitTodo}>
                        Add Todo
                </button>
            </form>
        </div>
    )

}

