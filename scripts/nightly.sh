sed -i 's/"name": "kbt-ui",/"name": "@kbt-ui\/nightly",/' packages/kbt-ui/package.json
sed -i '2s/kbt-ui/@kbt-ui\/nightly/' internal/build-constants/src/pkg.ts
