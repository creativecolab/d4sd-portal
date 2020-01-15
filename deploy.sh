#!/bin/bash
echo $1 | sudo -S docker stop d4sd-staging
echo $1 | sudo -S docker rm d4sd-staging
echo $1 | sudo -S docker image rm udayantandon/d4sd-staging:latest
echo $1 | sudo -S docker pull udayantandon/d4sd-staging:latest
echo $1 | sudo -S docker run -d -p 5000:80 --name d4sd-staging udayantandon/d4sd-staging:latest