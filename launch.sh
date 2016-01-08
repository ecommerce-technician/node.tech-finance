#!/bin/bash
# Node.tech simple node launcher!
function help () {
    echo "Node.tech-finance - a simple way to connect to the market quickly"
    echo "install     = install the packages"
    echo "run         = deploy the app"
    echo "tensorflow-linux = get real crazy with linux"
    echo "tensorflow-mac = mac version, you still get real crazy"
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
    tensorflow-linux)
     echo "installing tensorflow on linux (hopefully lolz)"
     sudo apt-get install python-pip python-dev
     echo "installing tensorflow"
     sudo pip install --upgrade https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.6.0-cp27-none-linux_x86_64.whl
    ;;
    tensorflow-mac)
     echo "installing tensorflow on linux (hopefully, yolo)"
     sudo easy_install pip
     sudo easy_install --upgrade six
     echo "installing tensorflow"
     sudo pip install --upgrade https://storage.googleapis.com/tensorflow/mac/tensorflow-0.6.0-py2-none-any.whl
    ;;
    *)
        help
    ;;
esac
else
    help
fi
