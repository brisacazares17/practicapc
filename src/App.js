import Card from "./components/Card";


function App() {
  let persona ={
    "id": 1,
    "name": "Brisa Cazares",
    "username": "Brisa",
    "email": "brisacecilia15@gmail.com",
    "phone": "6624256583",
    "descripcion": "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sapiente eaque, molestias illum quidem tempora placeat corporis provident. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    
  };
  return (
    <div>
    <Card
          persona={persona}
          
    />
    </div>
  );
}

export default App;
