export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos, update, remove) {
        //divWrapper
        const divWrapper = document.querySelector(".wrapper");
        //inputs
        let toFrom = document.querySelector("#toFrom");
        let details = document.querySelector("#details");
        let amount = document.querySelector("#amount");
        // create list item
        let li = document.createElement("li");
        //divList_parent
        let divList = document.createElement("div");
        divList.className = "divList";
        li.append(divList);
        //divHeaderPar
        let divHeaderPar = document.createElement("div");
        divHeaderPar.className = "divHeaderPar";
        divList.append(divHeaderPar);
        let h4 = document.createElement("h4");
        h4.innerText = heading;
        divHeaderPar.append(h4);
        let p = document.createElement("p");
        p.id = "message";
        p.innerText = item.format();
        divHeaderPar.append(p);
        //divButton
        let divButton = document.createElement("div");
        divButton.className = "divButton";
        divList.append(divButton);
        let updateButton = document.createElement("button");
        updateButton.type = "submit";
        updateButton.id = "updateButton";
        updateButton.onclick = () => {
            if (updateButton.innerText == "Done") {
                updateButton.innerText = update;
                const inputValue = document.getElementsByTagName("input")[0].value;
                const inputValue1 = document.getElementsByTagName("input")[1].value;
                h4.innerText = inputValue;
                p.innerText = inputValue1;
                divHeaderPar.replaceChild(h4, divHeaderPar.childNodes[0]);
                divHeaderPar.replaceChild(p, divHeaderPar.childNodes[1]);
            }
            else {
                updateButton.innerText = "Done";
                const textMessage = divHeaderPar.childNodes[0].textContent;
                const pMessage = divHeaderPar.childNodes[1].textContent;
                let input = document.createElement("input");
                input.type = "text";
                input.placeholder = "enter invoice";
                input.id = "input1";
                input.value = textMessage;
                let input2 = document.createElement("input");
                input2.type = "text";
                input2.id = "input2";
                input2.placeholder = "enter invoice";
                input2.value = pMessage;
                divHeaderPar.replaceChild(input, divHeaderPar.childNodes[0]);
                divHeaderPar.replaceChild(input2, divHeaderPar.childNodes[1]);
            }
        };
        updateButton.innerText = update;
        divButton.append(updateButton);
        const removeButton = document.createElement("button");
        removeButton.type = "submit";
        removeButton.id = "removeButton";
        removeButton.onclick = () => {
            li.remove();
            toFrom.value = "";
            details.value = "";
            amount.value = "";
            if (this.container.childElementCount <= 0) {
                const h3 = document.createElement("h3");
                h3.innerText = "Nothing is here, Please add finance logger!";
                h3.className = "textOne";
                divWrapper === null || divWrapper === void 0 ? void 0 : divWrapper.append(h3);
            }
        };
        removeButton.innerText = remove;
        divButton.append(removeButton);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
