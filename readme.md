# LevelCredit Component Demo

While react component library is built with typescript, it compiles into CommonJS and includes definition types.

Here, we won't be using typescript but es6 with flow.

## Setting up

1. Clone the demo repository and `cd` into it
   ```sh
   git clone git@github.com:levelcredit/js-app-component-demo.git
   cd js-app-component-demo
   ```
2. Copy the `.env.example` name it `.env`
3. Create self-signed ssl certs by running command
   ```sh
   bin/generate-certs
   ```
4. Open up `/etc/hosts` file as admin and add the line below to end of the file
   ```
   127.0.0.1 app.dev.rt-devel.com
   ```
5. Assuming docker is installed already, run `bin/docker-start` to build container and start webserver.
6. Once the dependencies are installed, the webserver will start on `https://app.dev.rt-devel.com`

_NOTE:_ Running webserver will try and use port 80 and 443. Please close out of any other programs that might block this demo from running on port 80 and 443.
