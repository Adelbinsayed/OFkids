const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

const json = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
const videoLink = JSON.parse(json);
//console.log(videoLink);
const server = http.createServer((req,res)=>{

    const pathName =url.parse(req.url,true).pathname;
    console.log(pathName);
    const id =url.parse(req.url,true).query.id;
    console.log(url.parse(req.url,true));
    console.log(id);

    if (pathName ==='/video' && id < videoLink.length ) {
        res.writeHead(200,{'Content-type':'text/html'});
         //res.end(`Ha..ami e ${id} number Laptop`);
         fs.readFile(`${__dirname}/video.html`,'utf-8',(err,data)=>{
            const video = videoLink[id];
            //const output = replaceTemplate(data,laptop);
            
            let output = data.replace(/{%course%}/g, video.course);
                output = output.replace(/{%trainer%}/g, video.trainer);
                output = output.replace(/{%url%}/g, video.url);
                output = output.replace(/{%difficulty%}/g, video.difficulty);
                                        
            res.end(output);       
        });
    }else if(pathName === '/home' || pathName === '/'){
        fs.readFile(`${__dirname}/index.html`,'utf-8',(err,data)=>{
            const video = videoLink[id];
            //const output = replaceTemplate(data,laptop);
            

            res.end(data);       
        });
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        console.log(cssPath);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    } 
    else if (req.url.match("\.png$")) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res) ;
        
    }
    else if(req.url.match("\.jpg$")){ 
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);   
    }   
    else if(req.url.match("\.js$")){
        var scriptPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(scriptPath);
        res.writeHead(200, {"Content-Type": "script/js"});
        fileStream.pipe(res);
    }else if(req.url.match("\.svg$")){
        var svgPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(svgPath);
        res.writeHead(200, {"Content-Type": "image/svg"}) ;
        fileStream.pipe(res)    ; 
    }
               
    else { 
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('404 error not found');
    }

    // res.writeHead(200,{'Content-type':'text/html'});
    // res.end('hi bro...wassup');
});
server.listen(8080,'127.0.0.1',()=>{
    console.log('started listening')
});       