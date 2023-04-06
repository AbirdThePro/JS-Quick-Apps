import * as EditTool from "./edit.js";
import * as DevTool from "./devtools.js";

// displays init message
alert("QuickApps enabled! Press Ctrl + Q to open the widget.");

// creates script element from url
const loadApp = (url) => {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
};

// gets app from name
const defaultApp = (name) => {
    loadApp(`https://js-quick-apps.abirdthepro.repl.co/apps/${name}.js`);
}

// creates widget and assigns class for styling
const widget = document.createElement("div");
widget.className = "appwidget";

// adds HTML
widget.innerHTML = `
    <div class="appwidgetcontent">
        <p class="title">App Menu</p>
        <input class="appwidgetinput" type="text">
        <button class="appwidgetgetapp">Get App</button>
        <b>Default Apps:</b><br>
				Edit tool <input id="editcheck" type="checkbox"><br>
				Dev tools <input id="devcheck" type="checkbox"><br>
        <b>Other Apps:</b><br>
        <div class="apps" />
    </div>
`;

const toggleTool = (elem, tool) => {
	if (elem.checked) {
		tool.start();
	}
	else {
		tool.stop();
	}
};

// creates and sets style
const styleElement = document.createElement("style");
styleElement.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Oxygen&display=swap");

    .appwidget {
        position: fixed;
        color: white;
        background-color: #000022;
        font-family: 'Oxygen', sans-serif;
        display: none;
        width: fit-content;
        min-width: 350px;
        height: fit-content;
        bottom: 0%;
        right: 0%;
    }

    .appwidgetcontent {
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 0.5em 0.5em 0;
    }
    
    .appwidgetinput {
        background-color: #333333;
        color: white;
        border-style: none;
        display: inline-block;
        width: 70%;
    }

    .appwidgetgetapp {
        display: inline-block;
        border-style: none;
        background-color: #002984;
        color: white;
        padding: 3px;
        width: 25%;
    }

		.title {
 				font-size: 20px;
		}
`;

// adds event listener for key combo
window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "q") {
        if (widget.style.display === "none") {
            widget.style.display = "block";
        }
        else {
            widget.style.display = "none";
        }
    }
});

// adds widget to document
document.body.appendChild(widget);
document.body.appendChild(styleElement);

const editCheck = document.querySelector("#editcheck");
editCheck.onchange = () => toggleTool(editCheck, EditTool);

const devCheck = document.querySelector("#devcheck");
devCheck.onchange = () => toggleTool(devCheck, DevTool);
