import Card from "./components/Card"
import contacts from "./contacts"
import Avatar from "./components/Avatar"

// Props 

function App() {

  return (
    <div>
      <Avatar 
      img="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.21.1/CHAMPION_SKIN/99018/ICON"
      />
      <h1 className="heading">My Contacts</h1>
      <Card 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
      />
      <Card 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />
      <Card 
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
    </div>
    )
}

export default App
