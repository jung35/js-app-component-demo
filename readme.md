# LevelCredit Component Demo
While react component library is built with typescript, it compiles into CommonJS and includes definition types.

Here, we won't be using typescript but es6 with flow.

## Setting up
1. Install the ui library on the same parent folder with its original repository name `js-app-component-demo`
2. cd into `js-app-component-demo/` and run command `bin/generate-certs`
3. Open up `/etc/hosts` file as admin and append the line below to end of the file
    ```
    127.0.0.1 app.dev.rt-devel.com
    ```
4. Assuming docker is installed already, just go ahead and run `bin/docker-start` to build container.
5. Once the dependencies are installed, the webserver will start on `https://app.dev.rt-devel.com`

*NOTE:* Running webserver will try and use port 80 and 443. Please close out of any other programs that might block this demo from running on port 80 and 443.
