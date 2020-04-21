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
