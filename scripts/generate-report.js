
const fs = require("fs");
const path = require("path");

const reportOutputsDir = path.resolve(__dirname, '../data/outputs');
const finalReport = path.resolve(__dirname, '../data/report.json');

(async ()=>{
  const report = {};
  const imps = fs.readdirSync(reportOutputsDir);
  imps.forEach((imp)=>{
    const outputs = fs.readdirSync(`data/outputs/${imp}`).filter((name)=>!name.includes('verified'));
    report[imp] = {};
    outputs.forEach((fileName)=>{
      const file = fs.readFileSync(`data/outputs/${imp}/${fileName}`);
      const { jwt } = JSON.parse(file.toString())
      let result = {
        jwt
      }
      if (fileName.includes('proof')){
        const file = fs.readFileSync(`data/outputs/${imp}/${fileName.replace('.proof.', '.proof.verified.')}`);
        const verification = JSON.parse(file.toString())
        result = {...result, ...verification}
      }
      report[imp] = {
        ...report[imp], 
        [fileName]: result
      }
    })
  })
  fs.writeFileSync(finalReport, JSON.stringify(report, null, 2))
})()