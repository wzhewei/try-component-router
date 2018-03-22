'use restrict'
import FirstClass from "./classes/FirstClass";
require("file-loader?name=index.html!./index.html");

const firstClass = new FirstClass();

var identifyFirstClass = () => {
  firstClass.print();
}

identifyFirstClass();
