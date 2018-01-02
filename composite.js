function Folder(name) {
    this.list = [];
    this.name = name;
}

Folder.prototype.add = function (c) {
    this.list.push(c);
}

Folder.prototype.scan = function () {
    for (var i = 0; i < this.list.length; i++) {
        this.list[i].scan();
    }
}

function File(name) {
    this.name = name;
}

File.prototype.add = function () {
    throw new Error('文件不能添加子对象！');
}

File.prototype.scan = function () {
    console.log('正在浏览名为' + this.name + '的文件...');
}

// test
var root = new Folder('root');
var books = new Folder('books');
var others = new Folder('others');
var movies = new Folder('movies');
var musics = new Folder('musics');

var book1 = new File('book1');
var book2 = new File('book2');
var book3 = new File('book3');
var movie1 = new File('movie1');
var movie2 = new File('movie2');
var music1 = new File('music1');
var music2 = new File('music2');
var music3 = new File('music3');

books.add(book1);
books.add(book2)
books.add(book3)
movies.add(movie1);
movies.add(movie2);
musics.add(music1);
musics.add(music2);
others.add(movies);
others.add(musics);

root.add(books);
root.add(others);

root.scan();

//book1.add(book2);

