
const http = require("http")
const  employees = require("./employees")

$port = 5000
$host = "127.0.0.1"

http.createServer((req,res)=>{
    if(req.url =="/employees" && req.method == "GET"){
        res.writeHead(200,"Application-Type:Text/HTML")
        console.log(typeof(employees))
        emp=employees.employees.filter((employee)=>employee.role=="Software Engineer")
        console.log(employees)
        console.log(employees.employees)
        res.writeHead(200,"Application-Type:Text/HTML")
        res.write(JSON.stringify(emp))
        res.end()
        
    }
}).listen($port,()=>{
    console.log("server is running")
})