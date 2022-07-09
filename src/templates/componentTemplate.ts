import { handleChangeObjectState, useStateObject } from "./utilSnippets.js";
import { functionImport } from "./imports.js";
import { capitalize } from "../utils.js";
import dataTypes from "../templates/dataTypes.js";
import { Input } from '../types'

const inputGenerator = (inputs: Input[]) => {
  if (inputs.length == 0) return "";
  return `
        <div id="inputs">
        ${inputs
          .map(({ name, type }) => {
            return `<input name="${name}" onChange={handleChange} type="${dataTypes[type]}" placeholder="${name}"/>`;
          })
          .join("\n")}
        </div>
`;
};

export default function componentTemplate(name: string, inputs: Input[], outputs: [], inlineFunc: boolean, inline: boolean): string {
  return `
${
  inline ? "" : 
`
import React, { useState } from 'react';
${functionImport(name, '..', inlineFunc)}

type State = {
  [key: string]: string
}
`
}
${inline ? "export" : "export default"} function ${capitalize(name)}() {
  ${useStateObject}
  ${handleChangeObjectState}
  return (
    <div id="functionBox">
      <div id="heading">
        <h1>${name}</h1>
        <p>Function inputs: (${inputs
          .map(({ name, type }) => `${type + " " + `${name}`}: ${dataTypes[type]}`)
          .join(", ")})</p>
        ${inputGenerator(inputs)}
      </div>
      <button onClick={async () => await ${name}(${inputs.map(({ name }) => "state?." + name).join(" ,")})} value="" >${name}</button>
    </div>
  )
}
`;
}
