Epilepsy Warning App
To start the app, you need to have installed NodeJS (https://nodejs.org/es/) to check if it is installed you can type on a new terminal npm version. You also need expo, you can open a terminal and type npm-install -g expo-cli, with this expo will be installed globally.
Now git clone the repository and open the cloned folder with your favourite text editor. Open a terminal with the text editor or open a new terminal and cd to the cloned folder. On the terminal type npm install. This will install all the libraries dependencies.
After that you can type npm start and it should open expo on a web browser. You can use Lan connection, however if it doesn’t work, we advise you to use tunnel connection option. 
You can now scan the QR code with your phone mobile, or you can also open it with an IOS emulator or android emulator.
If everything goes well, you will be able to see movies on the app, if it doesn't appear the data, there is an error with the cloud server. 

![image](https://user-images.githubusercontent.com/77886995/144872730-c39a0e65-09c2-4c7d-a5f9-9d1fa7939872.png)





If you are having this error go to the following link() and git clone the backend code, you can need to npm install and npm start, to run the code, however you will need to change the mongo database credentials on .env file, since know you need to connect it to your mongo database. You only need to connect the code with your mongo cluster, the data tables will be created automatically.
You can copy the following data:
For movies: 
{"_id":{"$oid":"618420d4c2415229c2997ec2"},"name":"Squid Game","details":"In Netflix","timeFlash":"58.91 sec","image":"https://wallpaperaccess.com/full/6998672.jpg","category":{"$oid":"61a54cdf068b503961f0b1ea"},"images":[],"dateMovie":{"$date":{"$numberLong":"1636049108114"}}}
{"_id":{"$oid":"618557da56c64d897f447716"},"name":"Halloween 11","details":"In Odeon","timeFlash":"58.91 sec","image":"https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg","category":{"$oid":"6184144c7f39703bde71ab7f"},"images":[],"dateMovie":{"$date":{"$numberLong":"1636128730266"}}}
{"_id":{"$oid":"61a9f450db545d43a2c476f9"},"name":"Marvel Avenger’s","details":"Can be streamed on Netflix & Disney+","timeFlash":"45.91 sec","image":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","category":{"$oid":"618413f17f39703bde71ab7c"},"images":[],"dateMovie":{"$date":{"$numberLong":"1638528080780"}}}
{"_id":{"$oid":"6189601e76f0f37b1087b0e6"},"name":"Scream","details":"In Odeon","timeFlash":"45.91 sec","image":"https://flxt.tmsimg.com/assets/p18852_p_v8_aa.jpg","category":{"$oid":"6184144c7f39703bde71ab7f"},"images":[],"dateMovie":{"$date":{"$numberLong":"1636392990095"}}}
Categories:
{"_id":{"$oid":"618413f17f39703bde71ab7c"},"name":"Action","icon":"icon-Action","image":"some url","__v":{"$numberInt":"0"}}
{"_id":{"$oid":"6184144c7f39703bde71ab7f"},"name":"Terror","icon":"icon-Terror","image":"some url11","__v":{"$numberInt":"0"}}
{"_id":{"$oid":"61a54cdf068b503961f0b1ea"},"name":"Series","icon":"net","image":"some url11","__v":{"$numberInt":"0"}}
Users:



