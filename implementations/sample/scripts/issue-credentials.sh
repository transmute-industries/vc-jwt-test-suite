
npm run cli -- credential create \
--input '../../data/inputs/claimsets/_minimal-credential.json' \
--output '../../data/outputs/sample/_minimal-credential.proof.json' \
--key '../../data/inputs/keys/private.key.ES384.json'

npm run cli -- credential verify \
--input '../../data/outputs/sample/_minimal-credential.proof.json' \
--output '../../data/outputs/sample/_minimal-credential.proof.verified.json'

npm run cli -- credential create \
--input '../../data/inputs/claimsets/alumni-credential-with-schema.json' \
--output '../../data/outputs/sample/alumni-credential-with-schema.proof.json' \
--key '../../data/inputs/keys/private.key.ES384.json'

npm run cli -- credential verify \
--input '../../data/outputs/sample/alumni-credential-with-schema.proof.json' \
--output '../../data/outputs/sample/alumni-credential-with-schema.proof.verified.json'

