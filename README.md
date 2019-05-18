# HTTP Calls for Roon APIs
---------------------------

These APIs are run by http calls.
There is a list below with examples that calls these APIs.

Have tried it with iOs swift and iOS' Workflow app to create widgets.

## Prerequisite

These apis are running on Node.js. Below are the steps to install it.

* On Windows, install from the above link.
* On Mac OS, you can use [homebrew](http://brew.sh) to install Node.js.
* On Linux, you can use your distribution's package manager, but make sure it installs a recent Node.js. Otherwise just install from the above link.

Make sure you are running node 5.x or higher.
```sh
node -v
```

For example:

```sh
$ node -v
v5.10.1
```

## Installing roon-extension-http-api

1. Download the repository.
* Go to [http-extension-http-api](https://github.com/st0g1e/roon-extension-http-api) page
* Click on "Clone or Download"
* Click "Download Zip"

2. Install
* Copy the downloaded zip to the desired folder
* unzip
* open terminal/command line and change directory to the folder
  ```
  cd [PATH]
  ```
* Install Dependencies
  ```
  npm install
  ```
* (Optional) To remove the running log
  Comment console.log lines at
  - node_modules/node-roon-api/lib.js
  - node_modules/node-roon-api/moo.js ( REQUEST)
  - node_modules/node-roon-api/moomsj.js (CONTINUE and COMPLETE)

3. Running
  ```
  node .
  ```
  
4. Enable the extension
   In Roon, go to Settings -> Extensions and click on the "enable" button next to the roon-extension-http-api extension details.
   
** Testing in Browser

You should now the IP address where the extension is (for the same computer, you can use localhost. the default port is 3001.
This can be changed by changing the PORT value in server.js

Open a browser and go to the following link:
```
http://localhost:3001/roon/listZones
```

## Available APIs
The full list of APIs can be seen on routes.js

The format to call these APIs are:
```
http://[IPAddress]:[Port]/roon/[APIName]
```

The APIs are:
* Transport APIs
  - getCore
  ```
     http://localhost:3001/roon/getCore
  ```
  - listZone
  ```
     http://localhost:3001/roon/listZones
  ```
  - getZone
  ```
     http://localhost:3001/roon/getZone?zoneId=[zoneId as found from listZones]
  ```
  - play_pause
  ```
     http://localhost:3001/roon/play_pause?zoneId=[zoneId as found from listZones]
  ```
  - play
  ```
     http://localhost:3001/roon/play?zoneId=[zoneId as found from listZones]
  ```
  - pause
  ```
     http://localhost:3001/roon/pause?zoneId=[zoneId as found from listZones]
  ```
  - stop
  ```
     http://localhost:3001/roon/stop?zoneId=[zoneId as found from listZones]
  ```
  - previous
  ```
     http://localhost:3001/roon/previous?zoneId=[zoneId as found from listZones]
  ```
  - next
  ```
     http://localhost:3001/roon/next?zoneId=[zoneId as found from listZones]
  ```
  - change_volume
  ```
     http://localhost:3001/roon/change_volume?volume=[Volume % from 0 to 100]&outputId=[outputId as found from listZones]
  ```
  
* Image APIs
  - getImage
  ```
     http://localhost:3001/roon/getImage?image_key=[image_key as found from the browser APIs]
  ```
  - getMediumImage
  ```
     http://localhost:3001/roon/getMediumImage?image_key=[image_key as found from the browser APIs]
  ```
  - getIcon
  ```
     http://localhost:3001/roon/getIcon?image_key=[image_key as found from the browser APIs]
  ```
  
* Browser APIs  
  - listByItemKey (list_size always returns 100)
  ```
     http://localhost:3001/roon/listByItemKey?zoneId=[zoneId]&item_key=[item_key from Browser APIs]&page=[page number]&list_size=[number of return per page]
  ```
  - listSearch (list_size always returns 100)
  ```
     http://localhost:3001/roon/listSearch?zoneId=[zoneId]&toSearch=[search string]&list_size=[hits per page]
  ```
  - goUp (list_size always returns 100)
  ```
     http://localhost:3001/roon/goUp?zoneId=[zoneId]&list_size=[hits per page]
  ```
  - goHome (list_size always returns 100)
  ```
     http://localhost:3001/roon/goHome?zoneId=[zoneId]&list_size=[hits per page]
  ```
  - listGoPage (list_size always returns 100)
  ```
     http://localhost:3001/roon/listGoPage?page=[page number]&list_size=[hits per page]
  ```
 

* Timers
  - getTimers
  ```
     http://localhost:3001/roon/getTimers
  ```
  - addTimer
  ```
     http://localhost:3001/roon/addTimer?zoneId=[zoneId]&time=[unix time in millisecond]&command=[play|[pause]&isRepeat=[0|1]
  ```
  - removeTimer
  ```
     http://localhost:3001/roon/removeTimer?zoneId=[zoneId]&time=[unix time in milliseconds]&command=[play|pause]&isRepeat=[0|1]
  ```

## Examples
There are several examples that calls the APIs above under the htmls directory.

URL: http://localhost:3001/player.html

These are: 
- player.html (simple player with play/pause, next, previous and volume slider where available)
- browser.html (simple viewer list, can play the songs)
- timers.html (simple timers to play/pause songs)

