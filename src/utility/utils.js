export const isValidEmail=(recipient)=>{
    const regex= /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(recipient);
}


export const decideRole=(email,password)=>{
    if(email==="test-admin@gmail.com" && password==="test-admin")
    {
        return "admin";
    }
    if(email==="test-sales@gmail.com" && password==="test-sales"){
        return "sales"
    }
    return null;
}

export const updateLocalStorage=(key,payload)=>{
try{
    const item = window.localStorage.getItem(key);
    const data= item ? JSON.parse(item) : null;
    if(data)
    {
        const valueToStore=JSON.stringify(payload);
        window.localStorage.setItem(key,valueToStore);  
    }else{
        const valueToStore=JSON.stringify(payload);
        window.localStorage.setItem(key,valueToStore)
    }
}catch(e)
{
    console.log(e,"error while lodging in localhost")
}
}

export const getLocalStorageState=(key)=>{
    try{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : [];
      
    }catch(e)
    {
        console.log(e,"error while lodging in localhost")
    }
}