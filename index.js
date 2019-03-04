function index(){
    console.log("Hello index") ;
}
index() ;

//Arrow functions

var foo = () => console.log("This is done by arrow") ; // for multiline use, {}
foo() ;

//1.

var foo = param1 => console.log(param1) ;
foo("If there is only one parameter, you can avoid () this") ;
//But if 0 or more than 1 params, then use () this.

var vikas = function(){
    console.log("This is confusing") ;
} ;

vikas() ;

//alternative

function vikky(){
    console.log("This is ok") ;
}
vikky() ;

//Important
//This is javascript object

var pick = {                 //Imagine pick as an object and {.....} as class

    p1 : 10,
    p2 : function(){
        console.log(this.p1) ;
    }
} ;

pick.p2() ;

//Arrow operators do not have a scope

var pick = {                 //Imagine pick as an object and {.....} as class

    p1 : 10,
    p2 : () => {
        console.log(this.p1) ; // It gives undefined, we have to do pick.p1 here
        //console.log(pick.p1) ; will give 10
    }
} ;
pick.p2() ;

//Another way anonymously
x => x*2 ;  //or  means x is the parameter, this func has no name, and return x*2 
(x) => x*2 ; // same
