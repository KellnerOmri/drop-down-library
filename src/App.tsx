import "./styles.css";
import { DropDownContainer } from "./components/drop-down-container/DropDownContainer";
import { DropDownList } from "./components/drop-down-list/DropDownList";
import { Header } from "./components/header/Header";
import { DropDownModel } from "./models/drop-down.model";

export default function App() {
  // example for functions that will calling by click
  const renameItem = (): void => {
    console.log("Rename");
  };
  const deleteItem = () => {
    console.log("Delete");
  };

  const shareItem = () => {
    console.log("Share");
  };
  /*  Data - every object should get:
    name - type string
    function -(optional)
    iconName - (optional)
    isDisable - (optional)
    The component is dynamic - you allow to add how manny items that you want, just add to the list. 
*/

  const dropDownData: DropDownModel[] = [
    { name: "Rename", functionAction: renameItem },
    { name: "Delete", functionAction: deleteItem },
    { name: "Share", functionAction: shareItem, isDisable: true }
  ];

  /* DropDownContainer props :
   width - set the width of the coponent (defualt "auto")
   isLeftAligned - set aling left/right (defualt right)
   isOpenToTheLeft - set the more-icon aling left/right (defualt right)
   marginLeft - set parant margin left (defualt 0),
   marginRight - set parant margin right (defualt 0),
   marginTop - set parant margin top (defualt 0),
   marginBottom - set parant margin bottom (defualt 0),
   */
  return (
    <div className="App">
      <Header />
      <DropDownContainer
        marginLeft={30}
        width={120}
        isLeftAligned
        isOpenToTheLeft
      >
        <DropDownList data={dropDownData} />
      </DropDownContainer>
    </div>
  );
}
