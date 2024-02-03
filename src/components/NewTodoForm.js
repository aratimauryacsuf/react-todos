import React from 'react';
function NewTodoForm(){
    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text' className='form-contol' required></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type='text' className='form-contol' rows={3} required></textarea>
                </div>
                <button type='button' className='bt btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
    )

}

export default NewTodoForm