# VC JWT 2.0 Test Suite

[![Report](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/report.yml/badge.svg)](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/report.yml)

## Implementations 
| Status                              | Name                                                                 | Link    |
|-------------------------------------|----------------------------------------------------------------------|---------|
| [![Sample](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/sample.yml/badge.svg)](https://github.com/transmute-industries/vc-jwt-test-suite/actions/workflows/sample.yml) | Sample Implementation                                                               | [source](https://github.com/transmute-industries/vc-jwt-test-suite/tree/main/implementations/sample)    |


## Test Report Generation

```mermaid
graph LR
  Sample["Sample Implementation"]
  NewImp["+ New Implementation"]
  Pages["GitHub Pages"]
  Sample --> Main
  NewImp  --> Main
  Main --> Pages
```


## Docker Basics

```sh
docker-compose build
```

## TODO

Use act...

```sh
act -j sample --secret-file .env
```