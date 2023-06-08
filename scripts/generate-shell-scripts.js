
const fs = require("fs");
const path = require("path");

const inputKeysDir = path.resolve(__dirname, '../data/inputs/keys');
const inputClaimsDir = path.resolve(__dirname, '../data/inputs/claimsets');

const finalScript = path.resolve(__dirname, './run-sample.sh');

const VC_RDF_CLASS = 'VerifiableCredential'
const VP_RDF_CLASS = 'VerifiablePresentation'

const isVC = (claimset)=>{
  return claimset.type === VC_RDF_CLASS || claimset.type.includes(VC_RDF_CLASS)
}
const isVP = (claimset)=>{
  return claimset.type === VP_RDF_CLASS || claimset.type.includes(VP_RDF_CLASS)
}

const implementationName = 'sample';

(async ()=>{
  let scriptContent = ``
  fs.readdirSync(inputKeysDir).forEach((keyFileName)=>{
   fs.readdirSync(inputClaimsDir).forEach((claimsetFileName)=>{
    const claimset = JSON.parse(fs.readFileSync(`${inputClaimsDir}/${claimsetFileName}`).toString());
    if (isVC(claimset)){
      // console.log('VC', claimset)
      const proofFileName = claimsetFileName.replace('.json', '.proof.json')
      const verifiedFileName = proofFileName.replace('.proof.json', '.proof.verified.json')
      scriptContent += `docker-compose run ${implementationName} credential create \
--input '/data/inputs/claimsets/${claimsetFileName}' \
--output '/data/outputs/${implementationName}/${proofFileName}' \
--key '/data/inputs/keys/${keyFileName}'
`
      scriptContent += `docker-compose run ${implementationName} credential verify \
--input '/data/outputs/${implementationName}/${proofFileName}' \
--output '/data/outputs/${implementationName}/${verifiedFileName}' \
--key '/data/inputs/keys/${keyFileName}'
`
    }
    if (isVP(claimset)){
      if (claimsetFileName.includes('unsecured')){
        // console.log('unsecured VP', claimset)
        const proofFileName = claimsetFileName.replace('.json', '.proof.json')
        scriptContent += `docker-compose run ${implementationName} presentation create \
--input '/data/inputs/claimsets/${claimsetFileName}' \
--output '/data/outputs/${implementationName}/${proofFileName}'
`
        scriptContent += `docker-compose run ${implementationName} presentation verify \
--input '/data/outputs/${implementationName}/${proofFileName}' \
--output '/data/outputs/${implementationName}/${verifiedFileName}'
`
      } else {
        // console.log('secured VP', claimset)
        const proofFileName = claimsetFileName.replace('.json', '.proof.json')
        const verifiedFileName = proofFileName.replace('.proof.json', '.proof.verified.json')
        scriptContent += `docker-compose run ${implementationName} presentation create \
--input '/data/inputs/claimsets/${claimsetFileName}' \
--output '/data/outputs/${implementationName}/${proofFileName}' \
--key '/data/inputs/keys/${keyFileName}'
`
      scriptContent += `docker-compose run ${implementationName} presentation verify \
--input '/data/outputs/${implementationName}/${proofFileName}' \
--output '/data/outputs/${implementationName}/${verifiedFileName}' \
--key '/data/inputs/keys/${keyFileName}'
`
      }
    }
   })
  })
  fs.writeFileSync(finalScript, scriptContent)
})()