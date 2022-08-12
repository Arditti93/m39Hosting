
export const Users = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`,{
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