(function(scope){

	var buffer = [];

	this.addEventListener('message', function(e) {
	  	if( !e.data )
	  		return
	  	buffer=buffer.concat( e.data.split(':') )
	}, false);

	scope.readline = function(){
		return buffer.length ? buffer.shift() : null
	}
	scope.write = function(s){
		this.postMessage( s );
	}

})(this)



var w = 30,h=20
var map = new Array( w )
for( var i=w;i--;){
	map[i]=new Array( h )
	for( var j=w;j--;)
		map[i][j] = 0
}
var P,me


var Player=function(i){
	this.map=map;
	this.id = i;
}
Player.prototype={
	moveTo:function(x,y){
		this.map[x][y] = i;
		this.x=x;
		this.y=y;
	},
}


var iteration = function( s ){
	
	// if it's the first loop
	if( !P ){

		P = []
		// initiation
		var m = s.split(' ')

		me = parseInt(m[1])
		var n = parseInt(m[0])

		for(var i=0;i<n;i++)
			P.push( new Player(i+1) )
	}

	// move the players
	for(var i=0;i<n;i++){
		var m = readline().split(' ')
		P[i].moveTo( m[2], m[3] )
	}

	write( 'LEFT' )
}



var loopfn=function(){
	var s
	if( (s=readline()) )
		iteration( s )
	setTimeout( loopfn , 10 )
}
loopfn()