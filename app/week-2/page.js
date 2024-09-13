import MenuBar from "../_components/menu-bar";
import StudentInfo from "./student-info";

export default function ShoppingList()
{
    return(
        <main>
            <MenuBar/>
            <h1 className="text-6xl">Shopping List</h1>
            <StudentInfo/>
        </main>
    )
}