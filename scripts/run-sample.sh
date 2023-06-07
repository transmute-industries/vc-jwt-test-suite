
docker-compose run sample credential create \
--input '/data/inputs/claimsets/_minimal-credential.json' \
--output '/data/outputs/sample/_minimal-credential.proof.json' \
--key '/data/inputs/keys/private.key.ES384.json'

docker-compose run sample credential verify \
--input '/data/outputs/sample/_minimal-credential.proof.json' \
--output '/data/outputs/sample/_minimal-credential.proof.verified.json'

docker-compose run sample credential create \
--input '/data/inputs/claimsets/alumni-credential-with-schema.json' \
--output '/data/outputs/sample/alumni-credential-with-schema.proof.json' \
--key '/data/inputs/keys/private.key.ES384.json'

docker-compose run sample credential verify \
--input '/data/outputs/sample/alumni-credential-with-schema.proof.json' \
--output '/data/outputs/sample/alumni-credential-with-schema.proof.verified.json'

docker-compose run sample presentation create \
--input '/data/inputs/claimsets/_minimal-presentation.json' \
--output '/data/outputs/sample/_minimal-presentation.unsecured.json'

docker-compose run sample presentation create \
--input '/data/inputs/claimsets/_minimal-presentation.json' \
--output '/data/outputs/sample/_minimal-presentation.proof.json' \
--key '/data/inputs/keys/private.key.ES384.json'

docker-compose run sample presentation verify \
--input '/data/outputs/sample/_minimal-presentation.proof.json' \
--output '/data/outputs/sample/_minimal-presentation.proof.verified.json'

docker-compose run sample presentation create \
--input '/data/inputs/claimsets/alumni-presentation-with-holder.json' \
--output '/data/outputs/sample/alumni-presentation-with-holder.proof.json' \
--key '/data/inputs/keys/private.key.ES384.json'

docker-compose run sample presentation verify \
--input '/data/outputs/sample/alumni-presentation-with-holder.proof.json' \
--output '/data/outputs/sample/alumni-presentation-with-holder.proof.verified.json'