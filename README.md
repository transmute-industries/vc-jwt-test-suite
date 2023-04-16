# TODO

```sh
IMPLEMENTATION=sample
INPUT=/data/credentials/credential-0.json
KEY=/data/keys/key-0-p256.json
OUTPUT=/data/implementations/$IMPLEMENTATION/credential-0--key-0-p256.json

docker-compose run $IMPLEMENTATION \
credential create \
--input $INPUT \
--output $OUTPUT \
--key $KEY
```