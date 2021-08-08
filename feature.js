const mysql = require('mysql')

const con = mysql.createConnection(  {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "student"
});

con.connect((err)=>
{
    if(err) throw err;
    console.log('Connected to db\n...');
    executer('select *from student');
    // var values = [['vish',75,'c',10]];
    // sql = 'insert into student(name,roll,sec,age) values ?'
    // con.query(sql,[values],(err,result,field)=>
    // {
    //     if(err) throw err;
    //     console.log('executed '+sql);
    //     console.log(result);
    // });
});



function executer(sql)
{
    con.query(sql,(err,result,field)=>
    {
        if(err) throw err;
        console.log('executed '+sql);
        console.log(result);
    });
}

function mydate()
{
    return Date();
}
module.exports.DateC = mydate;
console.log(module.exports);

