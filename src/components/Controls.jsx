import AddButton from "./AddButton";
import Colors from "./Colors";
import colors from "../assets/colors.json";

export const Controls = () => {
    return (
        <div id="controls">
            <AddButton />
            {colors.map((color) => (
                <Colors key={color.id} color={color} />
            ))}
        </div>
    )
}

export default Controls;
