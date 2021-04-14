# Levelcredit Component Demo

While react component library is built with typescript, it compiles into CommonJS and includes definition types.

Here, we won't be using typescript but es6 with flow.

## Setting up

Clone this repository as well as [`js-react-levelcredit`](https://github.com/levelcredit/js-react-levelcredit). Make sure they're under the same parent folder. The component library must be same folder name as repository name (`js-react-levelcredit/`).
```
parent_folder/
| js-app-component-demo/
| js-react-levelcredit/
```

Assuming docker is installed already, just go ahead and run `bin/docker-start` to build container if it doesn't already exist.

Once the dependencies are installed and component library is built, run command `bin/docker-app bin/app-start` to start the webserver on port `:9000`

To actively watch and build component library, run command `bin/docker-app bin/component-watch`. This will watch for any file changes on the component library and rebuild into `dist/` folder.
