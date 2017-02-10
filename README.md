# electron-java

This is a sample electron application with executing java function for calculating in Java. 


#Install & Run
```bash
# Clone the repo
git clone https://github.com/mrVragec/electron-java.git
# Go into the repo folder
cd electron-java
# Install dependencies & run the application
npm install && npm start
```
#Known issues
Error: Module version mismatch. Expected 50, got XX.
```bash
npm rebuild --runtime=electron --target=1.4.3 --disturl=https://atom.io/download/atom-shell --build-from-source
```
