module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/shared/index.ts.hbs",
      },
      {
        type: "append",
        path: "../src/components/index.ts",
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}'",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Generate a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/templates/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/page/content.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/templates/{{pascalCase name}}/index.ts",
        templateFile: "templates/shared/index.ts.hbs",
      },
      {
        type: "add",
        path: "../pages/{{lowerCase name}}.ts",
        templateFile: "templates/page/page.ts.hbs",
      },
      {
        type: "append",
        path: "../src/templates/index.ts",
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}'",
      },
    ],
  });
};
