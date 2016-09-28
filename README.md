#JavaScriptOOP

## Функціональний стиль

### публічні, приватні поля

### публічні, приватні методи
  
  * втрата контексту, пособи вирішення
    1) call(this); apply(this, arguments)
    2) bind
    3) замикання self

  * геттери, сеттери, 2в1

### насідування

  * extend

  ParentConstructor.call(this); 

  * захищені поля 
  * перевизначення parentFunc

## Прототипний стиль

  * __proto__
  * Constructor.prototype
  * ідея наслідування з прототипами
  * всі поля публічні тому, що методи в прототипі

### насідування

  * extend :)

  Constructor.prototype = Object.create(ParentConstructor.prototype);
  Constructor.prototype.constructor = Constructor;

  * батьківський конструктор

  ParentConstructor.apply(this, arguments);

  * перевизначення методів

  Constructor.prototype.method() {
    ParentConstructor.prototype.method();
    // other operations
  }

