import MenuBar from "../_components/menu-bar";
import ItemList from "./item-list";
import Spacer from "./spacer";

export default function ShoppingList()
{
    return(
        <main>
            <MenuBar/>
            <h1 className="text-6xl">Shopping List</h1>
            <Spacer size="20px"/>
            <ItemList/>
            
        </main>
    )
}