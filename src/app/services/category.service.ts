import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private allcategory = 'http://127.0.0.1:8000/categories';
    private singleproduct = 'http://127.0.0.1:8000/productCategory/';

    constructor(private Http: HttpClient) {
    }

    getcategorys(): Observable<any> {
        return this.Http.get<any>(this.allcategory);
    }

    getsinglcategoryproduct(id): Observable<any> {

        return this.Http.get<any>(this.singleproduct + id);
    }
}
