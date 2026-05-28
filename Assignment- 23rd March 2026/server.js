const http = require("http");

const server = http.createServer((req, res) => {

    // Home Route
    if(req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Home Page");
    }

    // About Route
    else if(req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to About Page");
    }

    // Contact Route
    else if(req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Contact Page");
    }

    // 404 Route
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 Page Not Found");
    }

});


// Server Port
server.listen(3000, () => {

    console.log("Server running on port 3000");

});
