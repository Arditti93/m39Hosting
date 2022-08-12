
export const Users = async (setter) => {
    console.log(process.env.REACT_APP_GET_ALL_USERS)
    try {
        const response = await fetch(process.env.REACT_APP_GET_ALL_USERS,{
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        setter(data.users);
    }
    catch(error)
    {
        console.log(error) 
    }
}