# Curso Angular Avançado
*@layshidani*

*:bulb: nota: substituir dados entre <kbd><></kbd>.*


```bash
ng new <nome-do-projeto> --routing --skip-tests
```

* `--routing`: cria config rotas básico
* `--skip-tests`: não cria arquivos de teste

## Configurações iniciais:
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

---

# Notas

## Criando o módulo de categorias

## Módulo categories

```bash
ng g m pages/categories --routing
```

* g = generate
* m = module
* aninhado na pasta **pages**, aninhado em **categories**
* com arquivo de rota

```
|_pages
  |_categories
    |_categories-routing.module.ts
    |_categories.module.ts
```

### Componentes

* Category list

  ```bash
  ng g c pages/categories/category-list
  ```

  * g = generate
  * c = component

  ```
    |_pages
      |_categories
        |_categories-routing.module.ts
        |_categories.module.ts
        |_category-list
          |_category-list.component.html
          |_category-list.component.css
          |_category-list.component.ts
          |_category-list.component.spec.ts

  ```

* category form
  ```bash
  ng g c pages/categories/category-form
  ```

  * g = generate
  * c = component

  ```
    |_pages
      |_categories
        |_categories-routing.module.ts
        |_categories.module.ts
        |_category-list
          |_category-list.component.html
          |_category-list.component.css
          |_category-list.component.ts
          |_category-list.component.spec.ts
        |_category-form
          |_category-form.component.html
          |_category-form.component.css
          |_category-form.component.ts
          |_category-form.component.spec.ts

  ```

### Configurar rotas Category

- `site.com/categories` => list (master)
- `site.com/categories/:id/edit` => form (details) editar
- `site.com/categories/new` => form (details) criar


## Aula 35: Associação Category/Entry

Aqui precisamos associar a categoria ao lançamento, pois nossa base de dados não faz isso automaticamente e não é configurável para isso.

Dependendo da API que utilizamos, pode ser configurável já trazer a categoria associada ao lançamento.

Então não seria necessário fazer essa ligação.

* antes de fazermos a associação:
  ```JSON
  {
    "id":1,
    "name":"Gás de Cozinha",
    "description":"Qualquer descrição para essa despesa",
    "type":"expense",
    "date":"14/10/2018",
    "paid":true,
    "amount":"70,80",
    "category": undefined,
    "categoryId":1
  }
  ```

* a associação que precisamos:
  ```JSON
  {
    "id":1,
    "name":"Gás de Cozinha",
    "description":"Qualquer descrição para essa despesa",
    "type":"expense",
    "date":"14/10/2018",
    "paid":true,
    "amount":"70,80",
    "category": {
      "id":1,
      "name":"Moradia",
      "description":"Pagamentos de Contas da Casa"
    },
    "categoryId":1
  }
  ```

## Refactor

```
app
  |_core
    |_components
    |_guards
    |_services
    |_core.module.ts
  |_pages
      |_categories
        |_category-list
          |_category-list.component.html
          |_category-list.component.css
          |_category-list.component.ts
          |_category-list.component.spec.ts
        |_category-form
          |_category-form.component.html
          |_category-form.component.css
          |_category-form.component.ts
          |_category-form.component.spec.ts
        |_shared
          |_category-model.ts
          |_category.service.ts
          |_category.service.spec.ts
        |_categories-routing.module.ts
        |_categories.module.ts
      |_entrie
        |_entry-list
          |_entry-list.component.html
          |_entry-list.component.css
          |_entry-list.component.ts
          |_entry-list.component.spec.ts
        |_entry-form
          |_entry-form.component.html
          |_entry-form.component.css
          |_entry-form.component.ts
          |_entry-form.component.spec.ts
        |_shared
          |_entry-model.ts
          |_entry.service.ts
          |_entry.service.spec.ts
        |_entrie-routing.module.ts
        |_entrie.module.ts
  |_shared
    |_components
    |_modules
    |_shared.module.ts
  |_app-routing.module.ts
  |_app.component.html
  |_app.component.css
  |_app.component.ts
  |_app.component.spec.ts
  |_app.module.ts
  |_in-memory-database.ts

```
