import "@vaadin/vaadin-lumo-styles/all-imports.js";

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
import "@vaadin/vaadin-icon";

import { flowImports } from "./flow_imports";

import { modelToJava } from "./java";

import { init, h, attributesModule, datasetModule } from "snabbdom";

const patch = init([attributesModule, datasetModule]);

const components = {};

const template = document.createElement("template");
template.innerHTML =
  '<custom-style><style include="lumo-color lumo-typography lumo-utility lumo-badge"></style></custom-style>';
document.head.appendChild(template.content);

const paletteContent = [
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
      ["img", ["img", "(", ")"]],
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
      ["vaadin-icon", ["vaadin-icon", "(", ")"]],
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
    .replace(/this/g, "thizz")
    .replace(
      /([a-zA-Z][a-zA-Z0-9]*)\s*=\s*([a-zA-Z][a-zA-Z0-9]*)\s*;/g,
      (a, b, c) => {
        return `${c}.setAttribute("__variableName","${b}")`;
      }
    );

  console.log(typelessJavaTemplate);
  let result = [];
  let isFirst = true;
  const elStack = [];
  const createStack = [];

  const fullCode = `
  const Element = function (tag) {
    const setPropAttr = (key, value) => {
      result.push(key);
      result.push(value);
      result.push("=");
    };

      createStack.push(tag);
      console.log("created new " + tag);
      elStack.push(this);
      this.appendChild = (el) => {
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
      this.setAttribute = setPropAttr;
      this.setText =  (value) => {
        result.push("textContent");
        result.push(value);
        result.push("=");
      };

      this.toString = () => {
        return tag;
      };
  };
  ${typelessJavaTemplate}
`;

  const root = {
    appendChild: () => {
      if (elStack[elStack.length - 2] !== root) {
        const latest = elStack.pop();
        while (elStack.pop() !== root) {
          result.push(")");
        }
        elStack.push(root);
        elStack.push(latest);
      } else if (!isFirst) {
        result.push(")");
      }

      isFirst = false;
      result.push(createStack.pop());
      result.push("(");
    },
  };
  elStack.push(root);
  eval(fullCode);
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

const modelToDOM = (code, inert = false) => {
  const stack = [];
  const tree = [];
  let current = { tag: "div", attributes: {}, dataset: {}, children: [] };
  code.forEach((str, index) => {
    const trimmed = str.trim();
    switch (trimmed) {
      case "(": {
        const tag = stack.pop();
        // Nested designs, attach shadow root, append style and content
        if (tag in components) {
          //const style = document.createElement("style");
          //style.textContent = storedDesigns.designs[tag].css;
          //current.shadowRoot.appendChild(style);
          tree.push(current);
          current = {
            tag: "div",
            attributes: { draggable: "true" },
            dataset: { nodeId: index },
            children: [modelToDOM(components[tag], true)],
          };
        } else {
          tree.push(current);
          current = { tag, attributes: {}, dataset: {}, children: [] };
        }
        if (!inert) {
          current.dataset["nodeId"] = index;
          current.attributes["draggable"] = "true";
        }
        break;
      }
      case ")": {
        const vnode = h(
          current.tag,
          { attrs: current.attributes, dataset: current.dataset },
          current.children
        );
        current = tree.pop();
        current.children.push(vnode);
        break;
      }
      case "=": {
        const tos = stack.pop();
        const nos = stack.pop().replace("data-temp-", ""); // for live mode
        if (!nos.startsWith("@")) {
          if (nos === "textContent") {
            current.children.push(tos);
          } else {
            current.attributes[nos] = tos;
          }
        }
        break;
      }
      default: {
        stack.push(trimmed);
      }
    }
  });
  return h(
    current.tag,
    { attrs: current.attributes, dataset: current.dataset },
    current.children
  );
};

const updateComponent = (tree, src) => {
  if (isJavaComponent(src)) {
    const { code: javaCode, importStrings } = modelToJava(tree);
    const startIndex = src.indexOf("\n", src.indexOf(JAVA_TEMPLATE_BEGIN));
    const endIndex = src.indexOf(JAVA_TEMPLATE_END);
    const updatedJavaCode =
      src.slice(0, startIndex + 1) + javaCode + src.slice(endIndex - 1);

    // 1. Split at first semicolon, if trimmed string starts with package, then store that as package declaration
    // 2. for each importString, check if it is found in the file. If not, add import statement to the top

    const firstSemicolonIndex = updatedJavaCode.indexOf(";");
    let packageDecl = updatedJavaCode.slice(0, firstSemicolonIndex + 1);
    packageDecl = packageDecl.trim().startsWith("package") ? packageDecl : "";
    let rest = updatedJavaCode.slice(
      firstSemicolonIndex + 1,
      updatedJavaCode.length
    );

    let importBlock = "";
    for (const importString of importStrings) {
      if (!rest.includes(importString)) {
        importBlock = `${importBlock}\n${importString}`;
      }
    }

    return packageDecl + "\n" + importBlock + "\n" + rest;
  } else if (isWebComponent(src)) {
    return src.replace(/html`([\s\S]*?)`;/, "html`" + ATIRToXML(tree) + "`;");
  }
};

const parseComponent = (tag, content) => {
  if (isWebComponent(content)) {
    const htmlContent = content.match(/html`([\s\S]*?)`;/)[1];
    const tree = HTMLToATIR(htmlContent);
    components[tag] = tree;
    return tree;
  } else if (isJavaComponent(content)) {
    const tree = javaToAtir(content);
    components[tag] = tree;
    return tree;
  }
  return "";
};

let initialRender = true;
let oldvnode;
const render = (tag, tree, target) => {
  components[tag] = tree;
  const vnode = modelToDOM(tree);
  if (initialRender) {
    patch(target, vnode);
    initialRender = false;
  } else {
    patch(oldvnode, vnode);
  }
  oldvnode = vnode;
};

window.Comod = {
  palette: paletteContent,
  fileExtensions: ["ts", "java"],
  parse: parseComponent,
  update: updateComponent,
  render: render,
};

console.log("### bundle loaded ###");

console.log(document.styleSheets);
