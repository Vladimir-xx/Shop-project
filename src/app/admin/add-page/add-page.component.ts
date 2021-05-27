import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/product.service';
import {Product} from '../../shared/interfaces';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private productServ: ProductService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),

    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const product: Product = {
        type: this.form.value.type,
        title: this.form.value.title,
        photo: this.form.value.photo,
        info: this.form.value.info,
        price: this.form.value.price,
        date: new Date()
    };

    console.log(this.form);
    this.productServ.create(product).subscribe(res => console.log(res));
  }
}

