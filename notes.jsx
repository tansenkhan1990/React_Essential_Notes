// #set state based on the previous state
mainComponents=()=>{

    [handleInput, setHandleInput] = useSate(
        {inputEmail:'',
        inputName: '',
        InputAge:''
        })
        
        handleInput=(ev)=>{
        setHandleInput((prevState)=>{
        return (...prevState,ev.target.value)
        })
        }
        hanldeOnSubmit=(evt)=>{
            evt.preventDefault();
            // this check if the input is empty
            if(evt.trim().length===0){
                return;
            }
            submitData={
                email: handleInput.inputEmail,
                name: handleInput.inputName,
                age:handleInput.InputAge
            }
            // clear input data after saving
            setHandleInput({
                inputEmail:'',
                inputName: '',
                InputAge:''
            })

        }
        // *** Form onSubmit should be inside of the form tag
        <form onSubmit={hanldeOnSubmit}>
            <input type="text" style = {{backgroundColor: 'red',height:'90px'}}value={handleInput.inputEmail} onChange={handleInput}>Email</input>
            <input type="text" value={handleInput.inputName} onChange={handleInput}>name</input>
            <input type="text" value={handleInput.InputAge} onChange={handleInput}>age</input>
        </form>
         handleOnSubmit =(evt)=>{
             evt.preventDefault(); // this will stop to load the page
        
         }
}


