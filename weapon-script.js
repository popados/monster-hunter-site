let weapon_url = "https://mhw-db.com/weapons"


let weapon_names = []

let weapon_icon_urls = []

let weapon_icons = []

let i = 0

let weapon_types = new Set()

let weapon_asset = new Set()

async function apicall(url){
    return (await fetch(url)).json()
}

function seticons(icon_data) {

    // weapon_asset.forEach((icon) => {if(icon != null) {weapon_icon_urls.push(icon)}})
    const img = document.createElement("img")
    img.src = icon_data.toString()
    document.getElementById("icon").appendChild(img)


}





//call the weapon database

// check to see if there is an object i need to pop from the array

// send the data to an array and start pulling what i need

document.addEventListener("DOMContentLoaded", async () => { 
    weapon_data = await apicall(weapon_url)
    // console.log(weapon_data[1298])

    for (i = 0; i < weapon_data.length; i++) {
        // console.log(weapon_data[i].name)
        weapon_names.push(weapon_data[i].name)
        weapon_types.add(weapon_data[i].type)
        weapon_icons.push(weapon_data[i].assets)
        
    }

    // seticons()

    for (i = 0; i <= weapon_icons.length; i++) {
        // console.log(weapon_icon_urls[i].icon)
        if (weapon_icons[i] != null) {
            weapon_icon_urls.push(weapon_icons[i].icon)

        }
        else if (typeof weapon_icons[i] === null) {
            delete weapon_icons[i]
        }
    }
    //displays all the icons on the page
    //weapon_icon_urls.forEach(link => { seticons(link) })

    

})

