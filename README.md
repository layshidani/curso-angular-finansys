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

### Configurar rotas

- `site.com/categories` => list (master)
- `site.com/categories/:id/edit` => form (details) editar
- `site.com/categories/new` => form (details) criar

<details>
<summary>no arquivo **app-routing.module.ts** raíz do projeto:</summary>

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // add path categories, ou seja, quando o path da url for categories, será direcionado para o CategoriesModules
    path: 'categories',
    // caminho@nomeDoModulo
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


```
</details>

<details>
<summary>no arquivo **categories-routing.module.ts**:</summary>

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  // add path vazio, porque já vem como categories do app.routing e o componente a ser carregado, no caso o CategoryList
  {
    path: '',
    component: CategoryListComponent
  },
  // add também um path que é o id
  // site.com/categories/:id/edit
  {
    path: ':id/edit',
    component: CategoryFormComponent
  },
  // add o path para new
  {
    path: 'new',
    component: CategoryFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

```
</details>

<details>
<summary>no arquivo **categories.module.ts**, é atualizado automaticamente, conferir:</summary>

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  // atualizar os declarations e imports
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }

```
</details>

## Add barra de navegação

<details>

<summary>app.component.html</summary>

```html
<!-- change config to navbar-dark bg-primary e add mb-4 -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" mb-4>
  <!-- add router link -->
  <a class="navbar-brand" routerLink="/">FINAN$YS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <!-- removido class="nav-item active" -->
      <li routerLinkActive="active">
        <!-- add router link -->
        <a class="nav-link" routerLink="/reports">Relatórios</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <!-- add router link -->
        <a class="nav-link" routerLink="/entries">Lançamentos</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
       <!-- add router link -->
        <a class="nav-link" routerLink="/categories">Categorias</a>
      </li>
    </ul>
  </div>
</nav>

<!-- add uma div class container para centralizar o conteúdo que vier da rota -->
<div class="container">
  <router-outlet></router-outlet>
</div>
```
</details>

## Add CategoryList template

<details>

<summary>category-list.component.html</summary>

```html
<nav class="mb-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a router-link='/'>Home</a></li>
    <li class="breadcrumb-item active">Categorias</li>
  </ol>
</nav>

<div class="row mb-4">
  <div class="col-md">
    <!-- pl = padding left -->
    <h1 class="h2 border-left pl-2">Categorias</h1>
  </div>
    <a class="btn btn-success float-right" routerLink="new">+ Nova Categoria</a>
  <div class="col-md">
  </div>
</div>

<table class="table table-hover">
  <thead>
    <tr class="bg-primary text-light">
      <th>Categorias</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Lazer</strong>
        <small>Cinema, parque, praia, etc.</small>
      </td>
      <td>
        <!-- [routerLink] propertyBind para futuramente add valor da variável, atualmente colocamos entre '' p ficar como string pois ainda não temos a variável configurada -->
        <a [routerLink]="['categoryID', 'edit']" class="btn btn-outline-info btn-sm mr-2">Editar</a>
        <!-- futuramente o click será associado à função de excluir (click)="funcao" -->
        <button class="btn btn-outline-danger btn-sm">Excluir</button>
      </td>
    </tr>
  </tbody>
</table>
```
</details>

## Criar class InMemoryDatabase

1. Criar model **Category**: `app/shared/category.model.ts`

  <details>
    <summary>category.model.ts</summary>
    ```ts
    export class Category {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
      ){}
    }
    ```
  </details>

2. Criar InMemoryDatabase: `app/in-memory-database.ts`.

  <details>
    <summary>in-memory-database.ts</summary>
    ```ts
    import { InMemoryDbService } from "angular-in-memory-web-api";

    import { Category } from './pages/categories/shared/category.model';

    export class InMemoryDatabase implements InMemoryDbService {
      createDb(){
        const categories: Category[] = [
          { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
          { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
          { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
          { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
          { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];
        return { categories };
      }
    }
    ```
  </details>