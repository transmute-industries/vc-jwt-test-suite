docker compose run sample credential create --input '/data/inputs/claimsets/_minimal-credential.json' --output '/data/outputs/sample/_minimal-credential.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/_minimal-credential.proof.json' --output '/data/outputs/sample/_minimal-credential.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/_minimal-presentation.json' --output '/data/outputs/sample/_minimal-presentation.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/_minimal-presentation.proof.json' --output '/data/outputs/sample/_minimal-presentation.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/_minimal-presentation.unsecured.json' --output '/data/outputs/sample/_minimal-presentation.unsecured.proof.json'
docker compose run sample presentation verify --input '/data/outputs/sample/_minimal-presentation.unsecured.proof.json' --output '/data/outputs/sample/_minimal-presentation.unsecured.proof.verified.json'
docker compose run sample credential create --input '/data/inputs/claimsets/alumni-credential-with-schema.json' --output '/data/outputs/sample/alumni-credential-with-schema.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/alumni-credential-with-schema.proof.json' --output '/data/outputs/sample/alumni-credential-with-schema.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/alumni-credential.json' --output '/data/outputs/sample/alumni-credential.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/alumni-credential.proof.json' --output '/data/outputs/sample/alumni-credential.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/alumni-presentation-with-holder.json' --output '/data/outputs/sample/alumni-presentation-with-holder.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/alumni-presentation-with-holder.proof.json' --output '/data/outputs/sample/alumni-presentation-with-holder.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/arrays-matrix-large.json' --output '/data/outputs/sample/arrays-matrix-large.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/arrays-matrix-large.proof.json' --output '/data/outputs/sample/arrays-matrix-large.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/arrays-matrix-small.json' --output '/data/outputs/sample/arrays-matrix-small.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/arrays-matrix-small.proof.json' --output '/data/outputs/sample/arrays-matrix-small.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/context-implicit-vc.json' --output '/data/outputs/sample/context-implicit-vc.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/context-implicit-vc.proof.json' --output '/data/outputs/sample/context-implicit-vc.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-implicit-vp.json' --output '/data/outputs/sample/context-implicit-vp.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-implicit-vp.proof.json' --output '/data/outputs/sample/context-implicit-vp.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-0.json' --output '/data/outputs/sample/context-mutilation-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-0.proof.json' --output '/data/outputs/sample/context-mutilation-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-1.json' --output '/data/outputs/sample/context-mutilation-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-1.proof.json' --output '/data/outputs/sample/context-mutilation-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-2.json' --output '/data/outputs/sample/context-mutilation-2.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-2.proof.json' --output '/data/outputs/sample/context-mutilation-2.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-3.json' --output '/data/outputs/sample/context-mutilation-3.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-3.proof.json' --output '/data/outputs/sample/context-mutilation-3.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-4.json' --output '/data/outputs/sample/context-mutilation-4.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-4.proof.json' --output '/data/outputs/sample/context-mutilation-4.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-5.json' --output '/data/outputs/sample/context-mutilation-5.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-5.proof.json' --output '/data/outputs/sample/context-mutilation-5.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-6.json' --output '/data/outputs/sample/context-mutilation-6.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-6.proof.json' --output '/data/outputs/sample/context-mutilation-6.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-0.json' --output '/data/outputs/sample/i18n-presentation-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-0.proof.json' --output '/data/outputs/sample/i18n-presentation-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-1.json' --output '/data/outputs/sample/i18n-presentation-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-1.proof.json' --output '/data/outputs/sample/i18n-presentation-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-2.json' --output '/data/outputs/sample/i18n-presentation-2.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-2.proof.json' --output '/data/outputs/sample/i18n-presentation-2.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-3.json' --output '/data/outputs/sample/i18n-presentation-3.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-3.proof.json' --output '/data/outputs/sample/i18n-presentation-3.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-4.json' --output '/data/outputs/sample/i18n-presentation-4.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-4.proof.json' --output '/data/outputs/sample/i18n-presentation-4.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-5.json' --output '/data/outputs/sample/i18n-presentation-5.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-5.proof.json' --output '/data/outputs/sample/i18n-presentation-5.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/jsonld-protected-0.json' --output '/data/outputs/sample/jsonld-protected-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/jsonld-protected-0.proof.json' --output '/data/outputs/sample/jsonld-protected-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/large-numbers-0.json' --output '/data/outputs/sample/large-numbers-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/large-numbers-0.proof.json' --output '/data/outputs/sample/large-numbers-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/nested-context-0.json' --output '/data/outputs/sample/nested-context-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/nested-context-0.proof.json' --output '/data/outputs/sample/nested-context-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/nested-context-1.json' --output '/data/outputs/sample/nested-context-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/nested-context-1.proof.json' --output '/data/outputs/sample/nested-context-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-1.json' --output '/data/outputs/sample/type-mutilation-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-1.proof.json' --output '/data/outputs/sample/type-mutilation-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-2.json' --output '/data/outputs/sample/type-mutilation-2.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-2.proof.json' --output '/data/outputs/sample/type-mutilation-2.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-3.json' --output '/data/outputs/sample/type-mutilation-3.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-3.proof.json' --output '/data/outputs/sample/type-mutilation-3.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-4.json' --output '/data/outputs/sample/type-mutilation-4.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-4.proof.json' --output '/data/outputs/sample/type-mutilation-4.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-5.json' --output '/data/outputs/sample/type-mutilation-5.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-5.proof.json' --output '/data/outputs/sample/type-mutilation-5.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-0.json' --output '/data/outputs/sample/unsafe-iri-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-0.proof.json' --output '/data/outputs/sample/unsafe-iri-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-1.json' --output '/data/outputs/sample/unsafe-iri-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-1.proof.json' --output '/data/outputs/sample/unsafe-iri-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-2.json' --output '/data/outputs/sample/unsafe-iri-2.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-2.proof.json' --output '/data/outputs/sample/unsafe-iri-2.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-0.json' --output '/data/outputs/sample/xss-0.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-0.proof.json' --output '/data/outputs/sample/xss-0.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-1.json' --output '/data/outputs/sample/xss-1.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-1.proof.json' --output '/data/outputs/sample/xss-1.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-2.json' --output '/data/outputs/sample/xss-2.proof.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-2.proof.json' --output '/data/outputs/sample/xss-2.proof.verified.json' --key '/data/inputs/keys/private.key.ES384.json'
docker compose run sample credential create --input '/data/inputs/claimsets/_minimal-credential.json' --output '/data/outputs/sample/_minimal-credential.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/_minimal-credential.proof.json' --output '/data/outputs/sample/_minimal-credential.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/_minimal-presentation.json' --output '/data/outputs/sample/_minimal-presentation.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/_minimal-presentation.proof.json' --output '/data/outputs/sample/_minimal-presentation.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/_minimal-presentation.unsecured.json' --output '/data/outputs/sample/_minimal-presentation.unsecured.proof.json'
docker compose run sample presentation verify --input '/data/outputs/sample/_minimal-presentation.unsecured.proof.json' --output '/data/outputs/sample/_minimal-presentation.unsecured.proof.verified.json'
docker compose run sample credential create --input '/data/inputs/claimsets/alumni-credential-with-schema.json' --output '/data/outputs/sample/alumni-credential-with-schema.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/alumni-credential-with-schema.proof.json' --output '/data/outputs/sample/alumni-credential-with-schema.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/alumni-credential.json' --output '/data/outputs/sample/alumni-credential.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/alumni-credential.proof.json' --output '/data/outputs/sample/alumni-credential.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/alumni-presentation-with-holder.json' --output '/data/outputs/sample/alumni-presentation-with-holder.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/alumni-presentation-with-holder.proof.json' --output '/data/outputs/sample/alumni-presentation-with-holder.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/arrays-matrix-large.json' --output '/data/outputs/sample/arrays-matrix-large.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/arrays-matrix-large.proof.json' --output '/data/outputs/sample/arrays-matrix-large.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/arrays-matrix-small.json' --output '/data/outputs/sample/arrays-matrix-small.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/arrays-matrix-small.proof.json' --output '/data/outputs/sample/arrays-matrix-small.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/context-implicit-vc.json' --output '/data/outputs/sample/context-implicit-vc.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/context-implicit-vc.proof.json' --output '/data/outputs/sample/context-implicit-vc.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-implicit-vp.json' --output '/data/outputs/sample/context-implicit-vp.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-implicit-vp.proof.json' --output '/data/outputs/sample/context-implicit-vp.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-0.json' --output '/data/outputs/sample/context-mutilation-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-0.proof.json' --output '/data/outputs/sample/context-mutilation-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-1.json' --output '/data/outputs/sample/context-mutilation-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-1.proof.json' --output '/data/outputs/sample/context-mutilation-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-2.json' --output '/data/outputs/sample/context-mutilation-2.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-2.proof.json' --output '/data/outputs/sample/context-mutilation-2.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-3.json' --output '/data/outputs/sample/context-mutilation-3.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-3.proof.json' --output '/data/outputs/sample/context-mutilation-3.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-4.json' --output '/data/outputs/sample/context-mutilation-4.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-4.proof.json' --output '/data/outputs/sample/context-mutilation-4.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-5.json' --output '/data/outputs/sample/context-mutilation-5.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-5.proof.json' --output '/data/outputs/sample/context-mutilation-5.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/context-mutilation-6.json' --output '/data/outputs/sample/context-mutilation-6.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/context-mutilation-6.proof.json' --output '/data/outputs/sample/context-mutilation-6.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-0.json' --output '/data/outputs/sample/i18n-presentation-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-0.proof.json' --output '/data/outputs/sample/i18n-presentation-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-1.json' --output '/data/outputs/sample/i18n-presentation-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-1.proof.json' --output '/data/outputs/sample/i18n-presentation-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-2.json' --output '/data/outputs/sample/i18n-presentation-2.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-2.proof.json' --output '/data/outputs/sample/i18n-presentation-2.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-3.json' --output '/data/outputs/sample/i18n-presentation-3.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-3.proof.json' --output '/data/outputs/sample/i18n-presentation-3.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-4.json' --output '/data/outputs/sample/i18n-presentation-4.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-4.proof.json' --output '/data/outputs/sample/i18n-presentation-4.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/i18n-presentation-5.json' --output '/data/outputs/sample/i18n-presentation-5.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/i18n-presentation-5.proof.json' --output '/data/outputs/sample/i18n-presentation-5.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/jsonld-protected-0.json' --output '/data/outputs/sample/jsonld-protected-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/jsonld-protected-0.proof.json' --output '/data/outputs/sample/jsonld-protected-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/large-numbers-0.json' --output '/data/outputs/sample/large-numbers-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/large-numbers-0.proof.json' --output '/data/outputs/sample/large-numbers-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/nested-context-0.json' --output '/data/outputs/sample/nested-context-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/nested-context-0.proof.json' --output '/data/outputs/sample/nested-context-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/nested-context-1.json' --output '/data/outputs/sample/nested-context-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/nested-context-1.proof.json' --output '/data/outputs/sample/nested-context-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-1.json' --output '/data/outputs/sample/type-mutilation-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-1.proof.json' --output '/data/outputs/sample/type-mutilation-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-2.json' --output '/data/outputs/sample/type-mutilation-2.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-2.proof.json' --output '/data/outputs/sample/type-mutilation-2.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-3.json' --output '/data/outputs/sample/type-mutilation-3.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-3.proof.json' --output '/data/outputs/sample/type-mutilation-3.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-4.json' --output '/data/outputs/sample/type-mutilation-4.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-4.proof.json' --output '/data/outputs/sample/type-mutilation-4.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation create --input '/data/inputs/claimsets/type-mutilation-5.json' --output '/data/outputs/sample/type-mutilation-5.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample presentation verify --input '/data/outputs/sample/type-mutilation-5.proof.json' --output '/data/outputs/sample/type-mutilation-5.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-0.json' --output '/data/outputs/sample/unsafe-iri-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-0.proof.json' --output '/data/outputs/sample/unsafe-iri-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-1.json' --output '/data/outputs/sample/unsafe-iri-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-1.proof.json' --output '/data/outputs/sample/unsafe-iri-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/unsafe-iri-2.json' --output '/data/outputs/sample/unsafe-iri-2.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/unsafe-iri-2.proof.json' --output '/data/outputs/sample/unsafe-iri-2.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-0.json' --output '/data/outputs/sample/xss-0.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-0.proof.json' --output '/data/outputs/sample/xss-0.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-1.json' --output '/data/outputs/sample/xss-1.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-1.proof.json' --output '/data/outputs/sample/xss-1.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential create --input '/data/inputs/claimsets/xss-2.json' --output '/data/outputs/sample/xss-2.proof.json' --key '/data/inputs/keys/private.key.EdDSA.json'
docker compose run sample credential verify --input '/data/outputs/sample/xss-2.proof.json' --output '/data/outputs/sample/xss-2.proof.verified.json' --key '/data/inputs/keys/private.key.EdDSA.json'
