function Header() {

    const date = new Date();
    const currentHour = date.getHours();
    let greetings;
    
    const customStyle = {
        color: " ",
    }
    
    if (currentHour <= 12) {
        greetings = "Good morning"
        customStyle.color = "red";
    } else if (currentHour <= 18) {
        greetings = "Good evening"
        customStyle.color = "green";
    } else {
        greetings = "Good night"
        customStyle.color = "blue";
    }


    return (
        <div>
            <h1 style={customStyle}>{greetings}</h1>
        </div>
    )
}

export default Header;



