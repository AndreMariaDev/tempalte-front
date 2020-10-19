import { Base } from 'src/app/base/base';
import { Serializer } from 'src/app/base/serializer';
import { Book } from 'src/app/book/book/book';

export class Author extends Base  {
    FirstName: String;
    LastName: String;
    Email: String;
    Books: Array<Book>
}

export class AuthorSerializer implements Serializer{

    fromJson(json: any): Author {
        let book : Book[] = [];
        if(json.books){
            json.books.map((result)=> book.push({
                Id : result.id,
                IsActive:result.isActive,  
                CreateDate:result.createDate,
                DateUpdate: result.dateUpdate,
                UserCode :result.userCode,
                AuthorId:result.authorId,
                Name: result.name,
                ISBN: result.isbn,
                Publisher: result.publisher,
                Author: result.Author 
            })
            );
        }

        let author : Author = {
            Id : json.id,
            IsActive:json.isActive,  
            CreateDate:json.createDate,
            DateUpdate: json.dateUpdate,
            UserCode :json.userCode,
            FirstName: json.firstName,
            LastName: json.lastName,
            Email: json.email,
            Books: book
        };

        return author;
      }
    
      toJson(author: Author): any {
        return {
            Id : author.Id,
            IsActive:author.IsActive,  
            CreateDate:author.CreateDate,
            DateUpdate: author.DateUpdate,
            UserCode :author.UserCode,
            FirstName: author.FirstName,
            LastName: author.LastName,
            Email: author.Email
        };
      }
}