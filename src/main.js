import "@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js";
import "@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js";
import "@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js";
import "@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js";
import "@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox-group.js";
import "@vaadin/vaadin-button/theme/lumo/vaadin-button.js";
import "@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js";
import "@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js";
import "@vaadin/vaadin-split-layout/theme/lumo/vaadin-split-layout.js";
import "@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js";
import "@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js";
import "@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js";
import "@vaadin/vaadin-custom-field/theme/lumo/vaadin-custom-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-number-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js";
import "@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-password-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js";
import "@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js";
import "@vaadin/vaadin-context-menu/src/vaadin-device-detector.js";
import "@vaadin/vaadin-context-menu/src/vaadin-context-menu-overlay.js";
import "@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js";
import "@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js";
import "@vaadin/vaadin-item/theme/lumo/vaadin-item.js";
import "@vaadin/vaadin-material-styles/version.js";
import "@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js";
import "@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js";
import "@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js";
import "@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js";
import "@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js";
import "@vaadin/vaadin-select/src/vaadin-select.js";
import "@vaadin/vaadin-upload/src/vaadin-upload-file.js";
import "@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js";
import "@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js";
import "@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js";
import "@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js";
import "@vaadin/vaadin-icons";
import "./leiskator-grid.js";

const paletteContent = [
  [
    "<h2>Templates</h2>",
    [
      [
        "login-form",
        [
          "div",
          "  (",
          "style",
          "width: 100%; height: 100%",
          "=",
          "div",
          "(",
          "style",
          "width: 100%; display:grid;grid-template-columns: 10em auto; background-color: #ddf;padding: 1em; box-sizing:border-box;",
          "=",
          "span",
          "(",
          "textContent",
          " name",
          "=",
          ")",
          "vaadin-text-field",
          "(",
          ")",
          "span",
          "(",
          "textContent",
          " password",
          "=",
          ")",
          "vaadin-password-field",
          "(",
          ")",
          "span",
          "(",
          ")",
          "span",
          "(",
          "style",
          " display:flex",
          "=",
          "vaadin-button",
          "(",
          "textContent",
          "login",
          "=",
          ")",
          "vaadin-button",
          "(",
          "textContent",
          "register",
          "=",
          ")",
          ")",
          ")",
          "  )",
        ],
      ],
    ],
  ],
  [
    "<h2>Native HTML</h2>",
    [
      ["a", ["a", "(", ")"]],
      ["article", ["article", "(", ")"]],
      ["aside", ["aside", "(", ")"]],
      ["div", ["div", "(", ")"]],
      ["h1", ["h1", "(", "textContent", "h1 header", "=", ")"]],
      ["h2", ["h2", "(", "textContent", "h2 header", "=", ")"]],
      ["h3", ["h3", "(", "textContent", "h3 header", "=", ")"]],
      ["h4", ["h4", "(", "textContent", "h4 header", "=", ")"]],
      ["h5", ["h5", "(", "textContent", "h5 header", "=", ")"]],
      ["h6", ["h6", "(", "textContent", "h6 header", "=", ")"]],
      ["hr", ["hr", "(", "style", "width:100px;", "=", ")"]],
      ["header", ["header", "(", ")"]],
      ["image", ["image", "(", ")"]],
      ["input text", ["input", "(", "type", "text", "=", ")"]],
      ["input range", ["input", "(", "type", "range", "=", ")"]],
      ["label", ["label", "(", ")"]],
      ["li", ["li", "(", ")"]],
      ["p", ["p", "(", "textContent", "Paragraph", "=", ")"]],
      ["span", ["span", "(", "textContent", "Span", "=", ")"]],
      [
        "ol",
        [
          "ol",
          "(",
          "li",
          "(",
          "textContent",
          "item1",
          "=",
          ")",
          "li",
          "(",
          "textContent",
          "item2",
          "=",
          ")",
          ")",
        ],
      ],
      [
        "ul",
        [
          "ul",
          "(",
          "li",
          "(",
          "textContent",
          "item1",
          "=",
          ")",
          "li",
          "(",
          "textContent",
          "item2",
          "=",
          ")",
          ")",
        ],
      ],
    ],
  ],
  [
    "<h2>Buttons</h2>",
    [
      ["button", ["vaadin-button", "(", ")"]],
      ["checkbox", ["vaadin-checkbox", "(", ")"]],
      [
        "checkbox-group",
        [
          "vaadin-checkbox-group",
          "(",
          "vaadin-checkbox",
          "(",
          ")",
          "vaadin-checkbox",
          "(",
          ")",
          ")",
        ],
      ],
      ["radio-button", ["vaadin-radio-button", "(", ")"]],
      [
        "radio-group",
        [
          "vaadin-radio-group",
          "(",
          "vaadin-radio-button",
          "(",
          ")",
          "vaadin-radio-button",
          "(",
          ")",
          ")",
        ],
      ],
      [
        "tabs",
        [
          "vaadin-tabs",
          "(",
          "vaadin-tab",
          "(",
          "textContent",
          "Tab1",
          "=",
          ")",
          "vaadin-tab",
          "(",
          "textContent",
          "Tab2",
          "=",
          ")",
          ")",
        ],
      ],
      ["tab", ["vaadin-tab", "(", ")"]],
    ],
  ],

  [
    "<h2>Fields</h2>",
    [
      ["combo-box", ["vaadin-combo-box", "(", ")"]],
      ["context-menu", ["vaadin-context-menu", "(", ")"]],
      ["item", ["vaadin-item", "(", ")"]],
      ["date-picker", ["vaadin-date-picker", "(", ")"]],
      ["grid", ["leiskator-grid", "(", ")"]],
      ["list-box", ["vaadin-list-box", "(", ")"]],
      ["text-field", ["vaadin-text-field", "(", ")"]],
      ["text-area", ["vaadin-text-area", "(", ")"]],
      ["time-picker", ["vaadin-time-picker", "(", ")"]],
      ["password-field", ["vaadin-password-field", "(", ")"]],
      ["email-field", ["vaadin-email-field", "(", ")"]],
      ["number-field", ["vaadin-number-field", "(", ")"]],
      ["custom-field", ["vaadin-custom-field", "(", ")"]],
    ],
  ],
  [
    "<h2>Layout</h2>",
    [
      ["accordion", ["vaadin-accordion", "(", ")"]],
      ["app-layout", ["vaadin-app-layout", "(", ")"]],
      ["form-layout", ["vaadin-form-layout", "(", ")"]],
      ["form-item", ["vaadin-form-item", "(", ")"]],
      [
        "horizontal-layout",
        [
          "vaadin-horizontal-layout",
          "(",
          "span",
          "(",
          "textContent",
          "Placeholder 1",
          "=",
          ")",
          "span",
          "(",
          "textContent",
          "Placeholder 2",
          "=",
          ")",
          ")",
        ],
      ],
      [
        "vertical-layout",
        [
          "vaadin-vertical-layout",
          "(",
          "span",
          "(",
          "textContent",
          "Placeholder 1",
          "=",
          ")",
          "span",
          "(",
          "textContent",
          "Placeholder 2",
          "=",
          ")",
          ")",
        ],
      ],
      [
        "split-layout horizontal",
        [
          "vaadin-split-layout",
          "(",
          "span",
          "(",
          "textContent",
          "Placeholder 1",
          "=",
          ")",
          "span",
          "(",
          "textContent",
          "Placeholder 2",
          "=",
          ")",
          ")",
        ],
        "split-layout vertical",
        [
          "vaadin-split-layout",
          "(",
          "orientation",
          "vertical",
          "=",
          "span",
          "(",
          "textContent",
          "Placeholder 1",
          "=",
          ")",
          "span",
          "(",
          "textContent",
          "Placeholder 2",
          "=",
          ")",
          ")",
        ],
      ],
    ],
  ],
  [
    "<h2>Misc</h2>",
    [
      ["dialog", ["vaadin-dialog", "(", ")"]],
      ["notification", ["vaadin-notification", "(", ")"]],
      ["progress-bar", ["vaadin-progress-bar", "(", ")"]],
      ["upload-file", ["vaadin-upload-file", "(", ")"]],
      ["upload", ["vaadin-upload", "(", ")"]],
    ],
  ],
];

const HTMLToATIR = (html, ignoreHead = false) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");
  const atir = [];

  const parseTree = (parent) => {
    for (let el of parent.childNodes) {
      if (el.nodeType === 3) {
        if (/\S/.test(el.textContent)) {
          atir.push("textContent");
          atir.push(el.textContent);
          atir.push("=");
        }
      } else {
        atir.push(el.tagName.toLowerCase());
        atir.push("(");
        const attributes = el.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const attr = attributes.item(i);
          atir.push(attr.name);
          atir.push(attr.value);
          atir.push("=");
        }

        if (el.children) {
          parseTree(el);
        }
        atir.push(")");
      }
    }
  };
  if (!ignoreHead) {
    parseTree(document.head);
  }
  parseTree(document.body);
  console.log("THE MODEL: " + JSON.stringify(atir));
  return atir;
};
const javaToAtir = (code) => {
  const index = code.indexOf(JAVA_TEMPLATE_BEGIN);
  const index2 = code.indexOf(JAVA_TEMPLATE_END, index);
  const javaTemplate = code.slice(code.indexOf("\n", index), index2);
  const typelessJavaTemplate = javaTemplate
    .replace(/^\s*([A-Z]\S*)/gm, "let")
    .replace(/this/g, "thizz");
  console.log(typelessJavaTemplate);
  let result = [];
  let isFirst = true;
  const elStack = [];
  const createStack = [];

  const makeTag = function (tag) {
    const setPropAttr = (key, value) => {
      result.push(key);
      result.push(value);
      result.push("=");
    };

    return function () {
      createStack.push(tag);
      console.log("created new " + tag);
      elStack.push(this);
      this.add = (el) => {
        console.log(tag + " : " + elStack);
        // If this is not the second last element, then remove elements until this one is left and add back the new one
        if (elStack[elStack.length - 2] !== this) {
          const latest = elStack.pop();
          while (elStack.pop() !== this) {
            result.push(")");
          }
          elStack.push(this);
          elStack.push(latest);
        }
        result.push(createStack.pop());
        result.push("(");
      };
      this.getElement = () => {
        return {
          setAttribute: setPropAttr,
          setProperty: setPropAttr,
          setText: (value) => {
            result.push("textContent");
            result.push(value);
            result.push("=");
          },
        };
      };

      this.toString = () => {
        return tag;
      };
    };
  };

  const Button = makeTag("vaadin-button");
  const Div = makeTag("div");
  const Tab = makeTag("vaadin-tab");
  const Tabs = makeTag("vaadin-tabs");
  const TextField = makeTag("vaadin-text-field");
  const VerticalLayout = makeTag("vaadin-vertical-layout");
  const HorizontalLayout = makeTag("vaadin-horizontal-layout");
  const IronIcon = makeTag("iron-icon");

  const thizz = {
    add: () => {
      if (elStack[elStack.length - 2] !== thizz) {
        const latest = elStack.pop();
        while (elStack.pop() !== thizz) {
          result.push(")");
        }
        elStack.push(thizz);
        elStack.push(latest);
      } else if (!isFirst) {
        result.push(")");
      }

      isFirst = false;
      result.push(createStack.pop());
      result.push("(");
    },
  };
  elStack.push(thizz);
  eval(typelessJavaTemplate);
  elStack.pop();
  elStack.forEach((el) => {
    result.push(")");
  });
  console.log(JSON.stringify(result));
  return result;
};

const isWebComponent = (content) => {
  return content.includes("@customElement");
};

const JAVA_TEMPLATE_BEGIN = "// GUI CONSTRUCTION BEGIN";
const JAVA_TEMPLATE_END = "// GUI CONSTRUCTION END";

const isJavaComponent = (content) => {
  return (
    content.includes(JAVA_TEMPLATE_BEGIN) && content.includes(JAVA_TEMPLATE_END)
  );
};

const parseComponent = (content) => {
  if (isWebComponent(content)) {
    return HTMLToATIR(content);
  } else if (isJavaComponent(content)) {
    return javaToAtir(content);
  }
  return "";
};

const ATIRToXML = (atir) => {
  let stack = [];
  let tagTree = [];

  let currentTag = "";
  let currentClosed = true;
  let hasTextContent = false;
  let textContent = "";

  let result = "";
  atir.forEach((str) => {
    let trimmed = str.trim();
    switch (trimmed) {
      case "(": {
        if (!currentClosed) {
          result = result.concat(`>${hasTextContent ? textContent : ""}`);
          currentClosed = true;
        }
        tagTree.push(currentTag);
        currentTag = stack.pop();
        result = result.concat("<" + currentTag);
        hasTextContent = false;
        currentClosed = false;
        break;
      }
      case ")": {
        if (!currentClosed) {
          result = result.concat(`>${hasTextContent ? textContent : ""}`);
          currentClosed = true;
        }
        result = result.concat(`</${currentTag}>\n`);
        currentTag = tagTree.pop();
        break;
      }
      case "=": {
        let tos = stack.pop();
        let nos = stack.pop();
        if (!nos || !tos || nos.startsWith("data-temp-")) {
          return;
        }
        if (nos === "textContent") {
          hasTextContent = true;
          textContent = tos;
        } else {
          result = result.concat(` ${nos}="${tos.replace(/\"/g, "&quot;")}"`);
        }
        break;
      }
      default:
        stack.push(trimmed);
    }
  });
  return result;
};

const modelToDOM = (code, target, inert = false) => {
  const stack = [];
  const tree = [];
  let current = target;
  // current = target;
  code.forEach((str, index) => {
    const trimmed = str.trim();
    switch (trimmed) {
      case "(": {
        const old = current;
        tree.push(current);
        const tag = stack.pop();
        // Nested designs, attach shadow root, append style and content
        /*    if (tag in storedDesigns.designs) {
            current = document.createElement("div");
            current.attachShadow({ mode: "open" });
            const style = document.createElement("style");
            style.textContent = storedDesigns.designs[tag].css;
            current.shadowRoot.appendChild(style);
            modelToDOM(storedDesigns.designs[tag].tree, current.shadowRoot, true);
          } else {
            current = document.createElement(tag);
          }*/
        current = document.createElement(tag);
        if (!inert) {
          current.setAttribute("data-design-id", index);
          /*
            current.ondragstart = (event) => {
              startDragFromModel(index, event);
            };
            current.ondblclick = (event) => {
              navigateTo(event);
            };
  
            current.oncontextmenu = (event) => {
              insertCssRule(event.target);
              event.stopPropagation();
              event.preventDefault();
            };*/
          current.draggable = true;
        }
        old.appendChild(current);
        break;
      }
      case ")": {
        current = tree.pop();
        break;
      }
      case "=": {
        if (current && current !== target) {
          const tos = stack.pop();
          const nos = stack.pop().replace("data-temp-", "");
          if (nos in current) {
            try {
              const json = JSON.parse(tos);
              current[nos] = json;
            } catch (e) {
              current[nos] = tos;
              current.setAttribute(nos, tos);
            }
          } else {
            current.setAttribute(nos, tos);
          }

          break;
        }
      }
      default: {
        stack.push(trimmed);
      }
    }
  });
  return current;
};

window.Comod = {
  palette: paletteContent,
  fileExtensions: ["ts", "java"],
  parse: parseComponent,
  update: (tree, src) =>
    src.replace(/html`([\s\S]*)`;/, "html`" + ATIRToXML(tree) + "`;"),
  render: modelToDOM,
};

console.log("bundle loaded");
