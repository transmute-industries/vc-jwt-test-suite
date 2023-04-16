
const fs = require("fs");

(async ()=>{
  const report = {};
  const imps = fs.readdirSync('data/outputs');
  imps.forEach((imp)=>{
    const outputs = fs.readdirSync(`data/outputs/${imp}`).filter((name)=>!name.includes('verified'));
    report[imp] = {};
    outputs.forEach((fileName)=>{
      const file = fs.readFileSync(`data/outputs/${imp}/${fileName}`);
      const {jwt} = JSON.parse(file.toString())
      const verified = fs.readFileSync(`data/outputs/${imp}/${fileName.replace('.json', '.verified.json')}`);
      report[imp] = {...report[imp], [jwt]: JSON.parse(verified)}
    })
  })
  fs.writeFileSync(`data/report.json`, JSON.stringify(report, null, 2))
})()