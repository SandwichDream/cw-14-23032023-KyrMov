window.onload = ()=>{
    console.log(document.cookie);
    document.cookie = "userName=Tomato";
    let specialName = "last Name!&";
    let specialValue = "Value % & # Name";
    document.cookie = `${encodeURIComponent(specialName)} = ${specialValue}`;
    console.log(document.cookie);
}