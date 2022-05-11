let weapon_url = "https://mhw-db.com/weapons"

async function apicall(url){
    return (await fetch(url)).json()
}

//call the weapon database

// check to see if there is an object i need to pop from the array

// send the data to an array and start pulling what i need

document.addEventListener("DOMContentLoaded", async () => { 
    weapon_data = await apicall(weapon_url)
    console.log(weapon_data[1298])

    for (let i = 0; i < weapon_data.length; i++) {
        console.log(weapon_data[i].name) 
        
    }
    console.log(weapon_data)

})