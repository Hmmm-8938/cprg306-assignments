import MenuBar from "../_components/menu-bar";
import NewItem from "./new-item";

export default function Week4()
{
    return(
        <div>
            <MenuBar/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <NewItem/>
            </div>
        </div>
    )
}