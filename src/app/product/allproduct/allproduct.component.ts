import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';
import { CategoryWithProducts } from 'src/app/_models/category-with-products';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})

export class AllproductComponent implements OnInit {

  categories: Category[]
  productContainer: Product[]
  curuntId: number = 0
  showCategory!: CategoryWithProducts
  flage: boolean = false

  constructor(
    private activeRouter: ActivatedRoute,
    private categoryservice: CategoryService,) {
    this.categories = []
    this.productContainer = []
  }

  ngOnInit(): void {
    this.curuntId = Number(this.activeRouter.snapshot.paramMap.get("Cid"))
    console.log(this.curuntId);
    this.categoryservice.getAllCategory().subscribe(cats => {
      this.categories = cats;
    })
    this.categoryservice.getCategoryById(this.curuntId).subscribe(cat => {
      this.showCategory = cat;
      this.productContainer = this.showCategory.products;
      this.flage = true
    })
  }

  changedata(catid: number) {
    this.flage = false
    this.categoryservice.getCategoryById(catid).subscribe(cat => {
      this.showCategory = cat;
      this.productContainer = this.showCategory.products;
      this.flage = true
      this.curuntId = Number(this.activeRouter.snapshot.paramMap.get("Cid"))
    })
  }
}
