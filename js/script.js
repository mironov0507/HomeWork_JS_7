/////// АВТОМОБИЛЬ ///////////////////
 
let Auto = function(){
    this.get = function(){

        this.marka = prompt('Марка Вашего автомобиля? (мерседес, форд или ВАЗ)');
            switch(this.marka){
                case 'мерседес':
                    this.coefficient1 = 1;
                    break;
                case 'форд':
                    this.coefficient1 = 1.15;
                    break;
                case 'ВАЗ':
                    this.coefficient1 = 1.5;
                    break;   
                default: document.write('Некорректные данные марки автомобиля');
                return;
            }

        this.year = +prompt('Год выпуска?');
                switch(true){
                    case(this.year>=1970 && this.year<=1999):
                        this.coefficient2 = 1.3;
                        break;
                    case(this.year>=2000 && this.year<=2010):
                        this.coefficient2 = 1.12;
                        break;
                    case(this.year>=2011 && this.year<=2020):
                        this.coefficient2 = 1;
                        break;
                    default: document.write('Некорректные данные года выпуска');    
                    return;
                }

        this.fuel = prompt('Тип двигателя? (бензин, дизель)');
                if(this.fuel == 'бензин'){
                    this.coefficient3 = 1;
                }else if(this.fuel == 'дизель'){
                    this.coefficient3 = 0.65;
                }else {
                    document.write('Некорректные данные вида топлива');    
                return;
                }

        this.eng = +prompt('Объем двигателя, л');
                if(this.eng < 1 || this.eng > 10){
                    document.write('Некорректные данные объёма двигателя');    
                return;
                }

        this.status = confirm('Запустить двигатель?');
            if(this.status == true){
                this.speed = prompt('Предполагаемая средняя скорость Вашего движения, км/ч');
                this.distance = prompt('На какое расстояние планируется поездка, км');

            }else {
                document.write('Ждём Вас в следующий раз!');
                return;
            }
        this.calc();
    }

    this.calc = function(){
        this.result1 = this.eng * 4 * this.coefficient1 * this.coefficient2 * this.coefficient3;
        this.result2 = this.distance / 100 * this.result1;
        this.result3 = this.distance / this.speed;

        this.show();

    }

    this.show = function(){
        document.write(' ');
        document.write('<br/>');
        document.write(`Марка авто : ${this.marka}`);
        document.write('<br/>');
        document.write(`Год выпуска : ${this.year}`);
        document.write('<br/>');
        document.write(`Тип двигателя : ${this.fuel}`);
        document.write('<br/>');
        document.write(`Объем двигателя : ${this.eng}`);
        document.write('<br/>');
        document.write(`Средняя скорость : ${this.speed}`);
        document.write('<br/>');
        document.write(`Расстояние : ${this.distance}`);
        document.write('<br/>');
        document.write('------------------------------------------------------------');
        document.write('<br/>');
        document.write(`Средний расход топлива : ${this.result1} л/100км`);
        document.write('<br/>');
        document.write(`На поездку вы затратите : ${this.result2} л топлива`);
        document.write('<br/>');
        document.write(`Время которое вы затратите : ${this.result3} ч`);
    }
}

let avtomobile = new Auto();

avtomobile.get();


/////// ЛАМПОЧКА /////////////////////

/*let Lamp = function(){
    this.get = function() {
        this.power = +prompt('Мощность лампочки, Вт')/1000;
        this.cost = 0.19;
        this.status = confirm('Лампочка включена?');
        if(this.status == true) {
            this.time = +prompt('Время работы лампочки, ч');
            this.calc();
        }else this.get();
    }

    this.calc = function(){
        this.result = this.power * this.cost * this.time
        this.showResult();
    }

    this.showResult = function(){
        document.write(`Затраты на энергию лампы: ${this.result}`)
    }
}

let lamp = new Lamp();

lamp.get();*/
 