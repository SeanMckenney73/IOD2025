import { useState } from "react";

function BigCats(){
const cats = [
{ id: 1,  name: 'Cheetah', latinName: 'Acinonyx jubatus'},
{ id: 2,  name: 'Cougar', latinName: 'Puma concolor'},
{ id: 3,  name: 'Jaguar', latinName: 'Panthera onca'},
{ id: 4,  name: 'Leopard', latinName: 'Panthera pardus'},
{ id: 5,  name: 'Lion', latinName: 'Panthera leo' },
{ id: 6,  name: 'Snow leopard', latinName: 'Panthera uncia'},
{ id: 7,  name: 'Tiger', latinName: 'Panthera tigris'}
]

const [currentCats, setCurrentCats] = useState(cats);

// const bigCats = cats.map(cat => (
//     <li>{cat.name}</li>
// ))

const catItems = currentCats.map(cat => (
    <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName}/>
))


function SingleCat(name, latinName) {
    return(
        <li>
            <h2>{name}</h2>
            <div>{latinName}</div>
        </li>
    )
}


const handleReverseCats = () => {
let newCats = [...currentCats];
newCats.reverse(); //
setCurrentCats(newCats);
}

return (
    <div className="BigCatsList FancyBox">
        <ul>{ catItems }</ul>
        <button onClick={handleReverseCats}>Reverse List</button>
    </div>
)
}




export default BigCats
