import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private showposts = 'http://127.0.0.1:8000/posts';
    private addposts = 'http://127.0.0.1:8000/post/add';
    private majposts = 'http://127.0.0.1:8000/postupdate/';
    private getpostbyid = 'http://127.0.0.1:8000/post/';
    private deletepost = 'http://127.0.0.1:8000/removepost/';

    constructor(private Http: HttpClient) {
    }

    getpost(): Observable<any> {
        return this.Http.get<any>(this.showposts);
    }

    postpost(form: any): Observable<any> {
        return this.Http.post<any>(this.addposts, form);
    }

    putpost(post): Observable<any> {
        console.log(post);
        const options = {responseType: 'text' as 'json'};
        return this.Http.put<any>(this.majposts + post.id, (post), options);

    }

    getPostId(id) {
        return this.Http.get<any>(this.getpostbyid + id);
    }

    deletepostt(id) {
        return this.Http.delete<any>(this.deletepost + id);
    }


}
