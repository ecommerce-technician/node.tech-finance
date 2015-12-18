#!/bin/bash
# Node.tech simple node launcher!
function help () {
    echo "Node.tech - a simple to deploy barebones app with angular"
    echo "install = install the packages"
    echo "run     = deploy the app"
}
if [ $1 ]
then
	case "$1" in
    install)
     echo "installing npm packages!"
     npm install
     echo "installing bower packages!"
     sudo bower install --allow-root
     echo "gulping the scripts and compiling sass!"
     gulp scripts
     gulp sass
     echo "installing forever"
     npm install forever -g
     echo "all done! go to localhost:5000 in your browser after running launch.sh run"
    ;;
    run)
     echo "run!"
     forever app.js
    ;;
    *)
        help
    ;;
esac
else
    help
fi
