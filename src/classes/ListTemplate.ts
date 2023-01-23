import { HasFormatter } from "../interfaces/HasFormatter.js";
export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(
    item: HasFormatter,
    heading: string,
    pos: "start" | "end",
    remove: string
  ) {
    //inputs
    let toFrom = document.querySelector("#toFrom") as HTMLInputElement;
    let details = document.querySelector("#details") as HTMLInputElement;
    let amount = document.querySelector("#amount") as HTMLInputElement;

    // create list item
    const li = document.createElement("li");
    let divList = document.createElement("div");
    divList.className = "divList";
    li.append(divList);
    let divHeaderPar = document.createElement("div");
    divHeaderPar.className = "divHeaderPar";
    divList.append(divHeaderPar);
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    divHeaderPar.append(h4);
    const p = document.createElement("p");
    p.innerText = item.format();
    divHeaderPar.append(p);
    let divButton = document.createElement("div");
    divButton.className = "divButton";
    divList.append(divButton);
    const button = document.createElement("button");
    button.type = "submit";
    button.onclick = () => {
      li.remove();
      toFrom.value = "";
      details.value = "";
      amount.value = "";
    };
    button.innerText = remove;
    divButton.append(button);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
