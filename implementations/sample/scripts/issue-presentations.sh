npm run cli -- presentation create \
--input '../../data/inputs/claimsets/_minimal-presentation.json' \
--output '../../data/outputs/sample/_minimal-presentation.unsecured.json'

npm run cli -- presentation create \
--input '../../data/inputs/claimsets/_minimal-presentation.json' \
--output '../../data/outputs/sample/_minimal-presentation.proof.json' \
--key '../../data/inputs/keys/private.key.ES384.json'

npm run cli -- presentation verify \
--input '../../data/outputs/sample/_minimal-presentation.proof.json' \
--output '../../data/outputs/sample/_minimal-presentation.proof.verified.json'

npm run cli -- presentation create \
--input '../../data/inputs/claimsets/alumni-presentation-with-holder.json' \
--output '../../data/outputs/sample/alumni-presentation-with-holder.proof.json' \
--key '../../data/inputs/keys/private.key.ES384.json'

npm run cli -- presentation verify \
--input '../../data/outputs/sample/alumni-presentation-with-holder.proof.json' \
--output '../../data/outputs/sample/alumni-presentation-with-holder.proof.verified.json'

npm run cli -- presentation create \
--input '../../data/inputs/claimsets/_minimal-presentation.unsecured.json' \
--output '../../data/outputs/sample/_minimal-presentation.unsecured.proof.json'

npm run cli -- presentation verify \
--input '../../data/outputs/sample/_minimal-presentation.unsecured.proof.json' \
--output '../../data/outputs/sample/_minimal-presentation.unsecured.proof.verified.json'