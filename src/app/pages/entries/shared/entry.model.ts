import { Category } from './../../categories/shared/category.model';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Entry extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public date?: string,
    public paid?: boolean,
    public amount?: string,
    public category?: Category,
    public categoryId?: number,
  ) {
    super();
  }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita',
  }

  static fromJson(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData);
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}
