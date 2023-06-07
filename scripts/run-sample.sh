# Generate ES384 Controller Key
docker-compose run sample \
key generate --private --alg ES384 \
--output /data/outputs/sample/private.key.ES384.json \
--debug

# # Issue and Verify Minimal Credential

# docker-compose run sample \
# credential create \
# --key /data/inputs/keys/private.ES256.json \
# --input /data/inputs/claimsets/_minimal-credential.json \
# --output /data/outputs/sample/_minimal-credential.ES256.json \
# --debug

# docker-compose run sample \
# credential verify \
# --key /data/inputs/keys/private.ES256.json \
# --input /data/outputs/sample/_minimal-credential.ES256.json \
# --output /data/outputs/sample/_minimal-credential.ES256.verified.json \
# --debug

# # Issue and Verify Minimal Presentation

# docker-compose run sample \
# credential create \
# --key /data/inputs/keys/private.ES256.json \
# --input /data/inputs/claimsets/_minimal-credential.json \
# --output /data/outputs/sample/_minimal-credential.ES256.json \
# --debug

# docker-compose run sample \
# credential verify \
# --key /data/inputs/keys/private.ES256.json \
# --input /data/outputs/sample/_minimal-credential.ES256.json \
# --output /data/outputs/sample/_minimal-credential.ES256.verified.json \
# --debug