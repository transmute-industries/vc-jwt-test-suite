
# Sample

This is a sample implementation.

```sh
npm run cli -- credential create \
--input './data/credential.json' \
--output './data/verifiable-credential.json' \
--key './data/key.json'
```

```sh
npm run cli -- credential verify \
--input './data/verifiable-credential.json' \
--output './data/verifiable-credential.verified.json'
```