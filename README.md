# Personal Blog Template

A lightweight markdown blog with build from scratch with HTML, CSS, JS, and Mustache. Complete with katex (rendering math quickly with latex), highlighted code blocks, and development tools.

## Usage 

First create a new repository using this one as a template.

Configuring the text and adding posts can be done in the `src` directory. Edit the home page with `site.home.json`. Create new markdown files in the `blog` directory to add writing. 

To build the project, run:

```sh
npm run build
```

To automatically run `npm run build` whenever there is a change, use

```sh
npm run start
```

To deploy the `build` folder (assuming that you have a git repository in there, such as [https://github.com/sripkunda/sripkunda.github.io](https://github.com/sripkunda/sripkunda.github.io)), run: 

```sh
npm run deploy
```

The command basically just builds the project, then commits and pushes the changes to the main branch of the repo in the build folder. In order for this to work, you should set up a repository for your site through github.
