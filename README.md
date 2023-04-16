# TODO

[![Sample](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/sample.yml/badge.svg)](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/sample.yml)

## Docker Basics

```sh
docker-compose build

```

## Create Verifiable Credential

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
## Verify Verifiable Credential

```sh
IMPLEMENTATION=sample
INPUT=/data/implementations/$IMPLEMENTATION/credential-0--key-0-p256.json
OUTPUT=/data/implementations/$IMPLEMENTATION/credential-0--key-0-p256.verified.json

docker-compose run $IMPLEMENTATION \
credential verify \
--input $INPUT \
--output $OUTPUT
```