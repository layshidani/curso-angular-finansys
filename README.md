# Curso Angular Avançado
*@layshidani*

*:bulb: nota: substituir dados entre <kbd><></kbd>.*


```bash
ng new <nome-do-projeto> --routing --skip-tests
```

* `--routing`: cria config rotas básico
* `--skip-tests`: não cria arquivos de teste

## Instalar dependências

* Bootstrap
  ```bash
  npm i bootstrap -S
  ```
* JQuery
  ```bash
  npm i jquery -S
  ```
* Angular iMask (máscara de dados)
  ```bash
  npm i angular-imask -S
  ```
* Currency Formatter (formatar moeda)
  ```bash
  npm i currency-formatter -S
  ```
* Moment.js (manipulação datas)
  ```bash
  npm i moment -S
  ```
* Toastr (lib notificação)
  ```bash
  npm i toastr -S
  ```
* Prime NG e prime icons (components)
  ```bash
  npm i primeng primeicons -S
  ```
* In Memory Web API (emulates CRUD operations over a RESTy API)
  ```bash
  npm i angular-in-memory-web-api -S
  ```
* Chart.js (gráficos)
  ```bash
  npm i -S chart.js
  ```

## Configurar Bootstrap

No arquivo **angular.json** adicionar configuração de css e js.

<details>
angular.json:

<summary>Ver detalhes</summary>

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "finansys": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {
        "@schematics/angular:class": {
          "spec": false
        },
        "@schematics/angular:component": {
          "spec": false
        },
        "@schematics/angular:directive": {
          "spec": false
        },
        "@schematics/angular:guard": {
          "spec": false
        },
        "@schematics/angular:module": {
          "spec": false
        },
        "@schematics/angular:pipe": {
          "spec": false
        },
        "@schematics/angular:service": {
          "spec": false
        }
      },
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/finansys",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              // add config
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/toastr/build/toastr.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/nova-light/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
            "scripts": [
              // add config
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/chart.js/dist/Chart.bundle.js"
            ]
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "finansys:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "finansys:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "finansys:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "finansys-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "prefix": "",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "finansys:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "finansys:serve:production"
            }
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "finansys"
}
```
</details>