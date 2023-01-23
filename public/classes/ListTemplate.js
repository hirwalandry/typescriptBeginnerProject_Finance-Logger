export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos, remove) {
        //inputs
        let toFrom = document.querySelector("#toFrom");
        let details = document.querySelector("#details");
        let amount = document.querySelector("#amount");
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
        }
        else {
            this.container.append(li);
        }
    }
}
