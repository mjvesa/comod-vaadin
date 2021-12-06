/**
 *  Exporter from model to Flow. Exports full project buildable with maven.
 */
import flowImports from "./flow_imports.js";

const kebabToPascalCase = (str) => {
  const parts = str.split("-");
  let result = "";
  for (const i in parts) {
    result = result.concat(parts[i][0].toUpperCase() + parts[i].slice(1));
  }
  return result;
};

const kebabToCamelCase = (str) => {
  const pascal = kebabToPascalCase(str).replace("/Vaadin/g", "");
  return pascal.charAt(0).toLowerCase() + pascal.substring(1);
};

export const packageToFolder = (packageName) => {
  return "src/main/java/" + packageName.replace(/\./g, "/") + "/";
};

const classForTag = (tag) => {
  return flowImports[tag] ? flowImports[tag].name : kebabToPascalCase(tag);
};

export const modelToJava = (code) => {
  const singleIndent = "    ";
  const doubleIndent = singleIndent + singleIndent;
  const importedTags = new Set();
  let internalClasses = "";
  const stack = [];
  const tree = [];
  const variableStack = [];
  const varNames = {};
  let fields = "";

  let variableCount = 0;

  let current = document.createElement("div");
  let currentTag = "";
  let currentVar = "this";
  let currentVarDefinition = "";
  let gridHadEntity = false;
  let importStrings = "";

  importedTags.add("div");

  let result = "";
  code.forEach((str) => {
    const trimmed = str.trim();
    switch (trimmed) {
      case "(": {
        currentTag = stack.pop();
        const elementClass = classForTag(currentTag);

        //Create an element in the DOM
        const old = current;
        tree.push(current);
        current = document.createElement(currentTag);
        old.appendChild(current);

        const varName = "_" + kebabToCamelCase(elementClass);
        let varCount = varNames[varName] || 0;
        varCount++;
        varNames[varName] = varCount;
        const newVar = varName + (varCount === 1 ? "" : varCount);
        variableCount++;

        if (currentTag === "leiskator-grid") {
          gridHadEntity = false;
          currentVarDefinition = `${elementClass}<GridTypePlaceholder> ${newVar}`;
          result +=
            `${doubleIndent}${currentVarDefinition} = new ${elementClass}<>();\n` +
            `${doubleIndent}${currentVar}.add(${newVar});\n`;
        } else {
          currentVarDefinition = `${elementClass} ${newVar}`;
          result +=
            `${doubleIndent}${currentVarDefinition} = new ${elementClass}();\n` +
            `${doubleIndent}${currentVar}.add(${newVar});\n`;
        }
        variableStack.push(currentVar);
        currentVar = newVar;

        if (currentTag in flowImports) {
          importedTags.add(currentTag);
        }
        break;
      }
      case ")":
        current = tree.pop();
        currentVar = variableStack.pop();
        break;
      case "=": {
        const tos = stack.pop();
        const nos = stack.pop();
        if (!nos || !tos) {
          return;
        }

        if (nos === "targetRoute") {
          result = result.concat(
            `${doubleIndent}${currentVar}.getElement().addEventListener("click", e-> {\n` +
              `${doubleIndent}${singleIndent}${currentVar}.getUI().ifPresent(ui -> ui.navigate("${kebabToPascalCase(
                tos
              )}"))\n;` +
              `${doubleIndent}});`
          );
        } else if (nos === "fieldName") {
          const fieldName = tos;
          result = result.replace(currentVarDefinition, fieldName);
          const re = new RegExp(currentVar, "g");
          result = result.replace(re, fieldName);
          fields =
            fields +
            `${singleIndent}${
              currentVarDefinition.split(" ")[0]
            } ${fieldName};\n`;
          currentVar = fieldName;
        } else if (nos in current) {
          try {
            JSON.parse(tos);
            if (nos === "textContent") {
              result = result.concat(
                `        ${currentVar}.getElement().setText("${tos}");\n`
              );
            } else {
              result = result.concat(
                `${doubleIndent}${currentVar}.getElement().setProperty("${nos}","${tos.replace(
                  /"/g,
                  "'"
                )}");\n`
              );
            }
          } catch (e) {
            if (nos === "textContent") {
              result = result.concat(
                `${doubleIndent}${currentVar}.getElement().setText("${tos.replace(
                  /"/g,
                  '\\"'
                )}");\n`
              );
            } else {
              result = result.concat(
                `${doubleIndent}${currentVar}.getElement().setProperty("${nos}","${tos}");\n`
              );
            }
          }
        } else {
          result = result.concat(
            `${doubleIndent}${currentVar}.getElement().setAttribute("${nos}","${tos}");\n`
          );
        }
        break;
      }
      default:
        stack.push(trimmed);
    }
  });

  importedTags.forEach((tag) => {
    importStrings = importStrings.concat(`${flowImports[tag].import}\n`);
  });

  return result;
};
