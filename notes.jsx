// #set state based on the previous state

[handleInput, setHandleInput] = useSate(
{inputEmail:'',
inputName: '',
InputAge:''
})

handleInput(ev)=>{
setHandleInput((prevState)=>{
return (...prevState,ev.target.value)
})
}

// *** Form onSubmit should be inside of the form tag
<form onSubmit={hanldeOnSubmit}>
</form>
 handleOnSubmit =(evt)=>{
     evt.preventDefault(); // this will stop to load the page

 }

