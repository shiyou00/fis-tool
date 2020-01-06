const fs = require("fs");

fs.readdir('./src',(err,files) => {
  if(err) throw err;
  const data = files.filter(item=> item !== "index.js").map(item => `export * from "./${item}";`).join("\n");
  fs.writeFile('./src/index.js',data,{ encoding: 'utf8'}, (err)=>{
    if(err) throw err;
    console.log('文件写入完毕');
  });
});
