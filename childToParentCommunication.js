// parent component

Parent=()=>{
    expense=(exp)=>{
        {...exp,
        id:'newID'
    }
    }
    return(<>
    <ChildComponent parentsFunction/>
    </>)
}

// child component
ChildComponent=(props)=>{
    // this will execaute and set the parentFunction value which is a parent property
    props.parentsFunction({
        name:'tansen',
        age: '32'
    })
}