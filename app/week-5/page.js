import MenuBar from "../_components/menu-bar";
import NewItem from "./new-item";

export default function Week5()
{
    return(
        <main>
            <MenuBar/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <NewItem/>
            </div>
        </main>
    )
}