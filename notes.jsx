// #set state based on the previous state
// import styled components
import style form '/newCss.module'
// for that .module.css we have to call class name like
// <div className={style.styleClassname}>
import styled form 'styled-components'
mainComponents=()=>{
    [checkClass,setCheckClass] = useSate(true);
    [handleInput, setHandleInput] = useSate(
        {inputEmail:'',
        inputName: '',
        InputAge:''
        })
        const Form= styled.Form`
            background-color: ${props=>(props.isValid?'red':'blue')};
        `
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
        <Form isValid='true' onSubmit={hanldeOnSubmit} className=`form-control ${checkClass?'valid':''}`>
            <input type="text" style = {{backgroundColor: 'red',height:'90px'}}value={handleInput.inputEmail} onChange={handleInput}>Email</input>
            <input type="text" style={backgroundColor: handleInput.inputEmail?'green':'red' } value={handleInput.inputName} onChange={handleInput}>name</input>
            <input type="text" value={handleInput.InputAge} onChange={handleInput}>age</input>
        </Form>
         handleOnSubmit =(evt)=>{
             evt.preventDefault(); // this will stop to load the page
        
         }
}


