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
<nav class="mb-5 mt-5">
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

## Criar CagoryService

```bash
ng g s pages/categories/shared/category
```

<details>
<summary>category.service.ts</summary>

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // inMemoryDatabase utiliza o padrão para fazer requisições api/nome-do-recurso
  private apiPath: string = 'api/categories';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Category[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  getById(id: number): Observable<Category> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Category): Observable<Category> {
    return this.http.post(this.apiPath, category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  update(category: Category): Observable<Category> {
    const url = `${this.apiPath}/${category.id}`;

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  // PRIVATE METHODS

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any>{
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
```
</details>

## Ativar interceptador Http InMemoryWebAPI (simulador back)

<details>
<summary>app.module.ts</summary>

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importar HttpClientModule
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import HttpClientInMemoryWebApiModule e a classe criada InMemoryDatabase
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add nos imports (quando for ligar um backend real, HttpClientInMemoryWebApiModule deverá ser removido, pois é para simular backend)
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

</details>

## Category-list Melhorias

<details>

<summary>category-list.component.html</summary>

```html
 <nav class="mb-5 mt-5">
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
    <!-- torna dinâmico com as info do banco de dados -->
    <tr *ngFor="let category of categories">
      <td>
        <strong>{{ category.name }}</strong><br>
        <small>{{ category.description }}</small>
      </td>
      <td>
        <!-- [routerLink] propertyBind -->
        <a [routerLink]="[ category.id, 'edit' ]" class="btn btn-outline-info btn-sm mr-2">Editar</a>
        <!-- add click -->
        <button (click)="deleteCategory(category)" class="btn btn-outline-danger btn-sm">Excluir</button>
      </td>
    </tr>
  </tbody>
</table>
```

</details>


<details>

<summary>category-list.component.ts</summary>

```ts
import { Component, OnInit } from '@angular/core';

// add imports
import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

// implements
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete){
      this.categoryService.delete(category.id).subscribe(
        () => this.categories = this.categories.filter(element => element != category),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

}

```

</details>

## Category form

<details>
<summary>categories.module.ts</summary>

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// add import
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    // add import
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
```
</details>

<details>
<summary>category-form.component.html</summary>

```html
<nav class="mb-5 mt-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a router-link="/">Home</a></li>
    <li class="breadcrumb-item"><a router-link="/categories">Categorias</a></li>
    <!-- add formulário de categoria -->
    <li class="breadcrumb-item active">Formulário de categoria</li>
  </ol>
</nav>

<div class="row mb-4">
  <div class="col-md">
    <!-- pl = padding left -->
    <h1 class="h2 border-left pl-2">Formulário de categoria {{ currentAction }}</h1>
  </div>
    <a class="btn btn-light float-right" routerLink="/categories">
     << Voltar
    </a>
  <div class="col-md">
  </div>
</div>

<form [formGroup]="categoryForm">
  <div class="card">
    <div class="card-header">
      Informações sobre a Categoria
    </div>

    <div class="card-body">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="name">Nome</label>
          <input type="text" class="form-control" id="name">
        </div>

        <div class="form-group col-md-8">
          <label for="description">Descrição</label>
          <input type="text" class="form-control" id="description">
        </div>
      </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-lg float-right mt-3">Salvar</button>

</form>
```
</details>

<details>
<summary>category-form.component.ts</summary>

```ts
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';

import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  // editando ou criando novo recurso (new ou edit):
  currentAction: string;
  // formulário de categorias, referenciar também no form html:
  categoryForm: FormGroup;
  // Título da página (new ou edit):
  pageTitle: string;
  // msgs de erro
  serverErrorMessages: string[] = null;
  // desabilitar o botão de enviar após click p/ impedir que seja clicado várias vezes
  submittingForm: boolean = false;
  // categoria
  category: Category = new Category();

  // injetar serviços no construtor
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  private setCurrentAction() {
    // this.route.snapshot.url -> gera um array com info da url

    if (this.route.snapshot.url[0].path = 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [ null ],
      name: [ null, [ Validators.required, Validators.minLength(2) ]],
      description: [ null ],
    })
  }

  private loadCategory() {
    if (this.currentAction == 'edit') {

      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get('id')))
      )
      .subscribe(
        (category) => {
          this.category = category;
          this.categoryForm.patchValue(category) // binds loaded category data to CategoryForm
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )
    }
  }


  private setPageTitle() {
    if (this.currentAction == 'new') {
      this.pageTitle = 'Cadastro de Nova Categoria'
    } else {
      const categoryName = this.category.name || ''
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }
  }
}
```
</details>

## Add módulo de lançamentos

```$
ng g m pages/entries --routing
```
